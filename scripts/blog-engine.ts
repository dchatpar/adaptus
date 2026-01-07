import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import util from 'node:util';

const execPromise = util.promisify(exec);

const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/blog-premium.ts');
const IMAGE_OUTPUT_DIR = path.join(process.cwd(), 'public/images/blog');

// Ensure output directory exists
if (!fs.existsSync(IMAGE_OUTPUT_DIR)) {
  fs.mkdirSync(IMAGE_OUTPUT_DIR, { recursive: true });
}

async function scrapeImage(query: string, slug: string): Promise<string | null> {
  try {
    console.log(`\n🔍 Scraping image for: "${query}" (slug: ${slug})`);
    // Use the python script from .venv
    // We limit to 1 image, HD.
    const command = `./.venv/bin/python scripts/image_scraper.py "${query}" --limit 1 --output "${IMAGE_OUTPUT_DIR}" --hd`;

    const { stdout, stderr } = await execPromise(command);

    // Parse stdout to find the saved filename
    // Output format: "✅ Saved: filename.jpg (1920x1080)"
    const match = stdout.match(/✅ Saved: ([^\s]+) \(\d+x\d+\)/);

    if (match && match[1]) {
      const originalFilename = match[1].trim();
      const extension = path.extname(originalFilename);
      const newFilename = `${slug}${extension}`;
      const oldPath = path.join(IMAGE_OUTPUT_DIR, originalFilename);
      const newPath = path.join(IMAGE_OUTPUT_DIR, newFilename);

      // Rename to match slug for cleanliness
      fs.renameSync(oldPath, newPath);

      console.log(`✅ Image secured: ${newFilename}`);
      return `/images/blog/${newFilename}`;
    } else {
      console.error('❌ No image saved by scraper.');
      console.log('Stdout:', stdout);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error scraping image for ${slug}:`, error);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting Blog Engine: Image Processor');

  // Read the source file
  let fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

  // We need to extract the blog posts to identify them.
  // Since we can't easily eval the TS, we'll use a regex to find blocks that look like blog posts.
  // Or we can rely on the fact that we have the slugs in the file.

  // Regex to capture the slug and the current image
  // Look for: slug: "some-slug", ... image: "some-image"
  // We iterate through the file finding object structures.
  // Assuming standard formatting from the previous file read:
  // slug: "...",
  // ...
  // image: "...",

  // We will build a list of tasks.
  const tasks: { slug: string; title: string; currentImage: string; index: number }[] = [];

  // This regex is a bit brittle but works if formatting is consistent
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const titleRegex = /title:\s*"([^"]+)"/g; // We might need to look around the slug

  // Let's use a simpler approach:
  // 1. Split the file by objects in the array? No, too hard with nested braces.
  // 2. Just find all `slug: "..."` and verify if they need an update.

  // Better: Regex that matches the whole object block roughly?
  // Let's just find matches for `slug: "..."` and then look ahead for `image: "..."` relative to it.

  let match;
  // We'll iterate the file content to find slugs.
  // Note: This assumes 'slug' comes before 'image' or they are close.
  // In the file, 'slug' is near the top of the object, 'image' is further down.

  // To get the Title (for query) and Slug, we need to parse.
  // Let's try to import the data using a temporary script that compiles to JS or use ts-node if available?
  // We don't have ts-node installed globally maybe, but we can try running with `npx tsx`.
  // Actually, `npx tsx` is great.

  // Let's use a two-step process:
  // 1. Run a script to output the needed metadata (slug, title, currentImage) as JSON.
  // 2. Use this script to process that list and update the file text.

  // But I can just do it all here if I can parse the text.
  // Let's try parsing text roughly.

  const lines = fileContent.split('\n');
  let currentSlug = '';
  let currentTitle = '';
  const currentImage = '';

  // We will collect replacements to make.
  const replacements: { slug: string; title: string; oldImage: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('title: "')) {
      const m = line.match(/title:\s*"([^"]+)"/);
      if (m) currentTitle = m[1];
    }

    if (line.includes('slug: "')) {
      const m = line.match(/slug:\s*"([^"]+)"/);
      if (m) currentSlug = m[1];
    }

    if (
      line.includes('image: "') ||
      line.includes('image: imageColors') ||
      line.includes('image: `')
    ) {
      // Found an image line.
      // Check if we have a slug/title context.
      if (currentSlug && currentTitle) {
        // Check if it's a placeholder
        let isPlaceholder = false;
        if (line.includes('imageColors')) isPlaceholder = true;
        if (line.includes('placehold.co')) isPlaceholder = true;
        if (line.includes('data:image')) isPlaceholder = true;

        if (isPlaceholder) {
          // Get the exact value being replaced
          const imageValueMatch = line.match(/image:\s*(.+),?/);
          if (imageValueMatch) {
            replacements.push({
              slug: currentSlug,
              title: currentTitle,
              oldImage: imageValueMatch[1].replace(/,$/, ''), // remove trailing comma
            });
          }
        }

        // Reset for next object
        currentSlug = '';
        currentTitle = '';
      }
    }
  }

  console.log(`Found ${replacements.length} posts requiring image updates.`);

  for (const item of replacements) {
    // Double check regex in file to ensure uniqueness?
    // We will construct a regex to replace the specific line for this slug.

    // Process
    const newImagePath = await scrapeImage(item.title, item.slug);

    if (newImagePath) {
      // Replace in fileContent
      // We look for the block containing this slug, and then the image line within it.
      // This is safer.

      // Regex: find the slug, then lazily find the image property
      const safeRegex = new RegExp(`(slug:\s*"${item.slug}"[\s\S]*?image:\s*)([^,\n]+)`, 'u');

      if (safeRegex.test(fileContent)) {
        fileContent = fileContent.replace(safeRegex, `$1"${newImagePath}"`);
        console.log(`📝 Updated record for ${item.slug}`);
      } else {
        console.error(`❌ Could not locate record for replacement: ${item.slug}`);
      }
    }
  }

  fs.writeFileSync(DATA_FILE_PATH, fileContent, 'utf-8');
  console.log('\n🎉 All operations complete. File updated.');
}

main().catch(console.error);
