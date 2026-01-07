import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { blogPosts } from '../src/data/blog-premium';

const execAsync = promisify(exec);

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'blog-premium.ts');
const TEMP_DIR = path.join(process.cwd(), 'temp_images');
const TARGET_DIR = path.join(process.cwd(), 'public', 'images', 'blog');

// Ensure directories exist
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Scraper options
async function scrapePost(post: (typeof blogPosts)[0]) {
  if (!post.image.includes('placehold.co')) {
    return null; // Skip already real images
  }

  console.log(`Processing: [${post.slug}] ${post.title}`);

  const tempOutputDir = path.join(TEMP_DIR, post.slug);

  // Clean temp dir
  if (fs.existsSync(tempOutputDir)) {
    fs.rmSync(tempOutputDir, { recursive: true, force: true });
  }

  // Use no-hd to ensure we get results even if low res
  const cmd = `python3 scripts/image_scraper.py "${post.title}" --limit 1 --output "${tempOutputDir}" --workers 1 --no-hd`;

  try {
    await execAsync(cmd, { env: { ...process.env, PYTHONPATH: process.cwd() } });

    if (!fs.existsSync(tempOutputDir)) {
      return { slug: post.slug, error: 'Output dir not created' };
    }

    const files = fs.readdirSync(tempOutputDir);
    if (files.length === 0) {
      return { slug: post.slug, error: 'No images found' };
    }

    const downloadedFile = files[0];
    const sourcePath = path.join(tempOutputDir, downloadedFile);
    const ext = path.extname(downloadedFile);
    const newFilename = `${post.slug}${ext}`;
    const destPath = path.join(TARGET_DIR, newFilename);

    fs.copyFileSync(sourcePath, destPath);
    console.log(`   ✅ Saved: ${newFilename}`);

    // Cleanup
    fs.rmSync(tempOutputDir, { recursive: true, force: true });

    return {
      slug: post.slug,
      oldImage: post.image,
      newImage: `/images/blog/${newFilename}`,
    };
  } catch (error: any) {
    // Cleanup
    if (fs.existsSync(tempOutputDir)) {
      fs.rmSync(tempOutputDir, { recursive: true, force: true });
    }
    return { slug: post.slug, error: error.message };
  }
}

async function run() {
  console.log(`Found ${blogPosts.length} total posts.`);
  const placeholderPosts = blogPosts.filter((p) => p.image.includes('placehold.co'));
  console.log(`Found ${placeholderPosts.length} posts with placeholders.`);

  const updates: Array<{ oldImage: string; newImage: string }> = [];
  const errors: Array<{ slug: string; error: string }> = [];

  // Process sequentially
  for (const post of placeholderPosts) {
    const result = await scrapePost(post);
    if (result) {
      if (result.newImage) {
        updates.push({ oldImage: result.oldImage!, newImage: result.newImage });
      } else if (result.error) {
        console.log(`   ❌ Failed: ${result.error}`);
        errors.push({ slug: result.slug, error: result.error! });
      }
    }
  }

  if (updates.length > 0) {
    console.log(`\nWriting updates for ${updates.length} posts...`);
    let fileContent = fs.readFileSync(DATA_FILE, 'utf8');

    for (const update of updates) {
      // Replace the exact URL string
      fileContent = fileContent.replace(update.oldImage, update.newImage);
    }

    fs.writeFileSync(DATA_FILE, fileContent, 'utf8');
    console.log('🎉 Updated blog-premium.ts successfully!');
  } else {
    console.log('\n⚠️ No updates to write.');
  }

  // Cleanup main temp
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
}

run().catch(console.error);
