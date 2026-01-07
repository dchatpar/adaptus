import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { blogPosts, BlogPost } from '../src/data/blog-premium';

// --- ROBUST FALLBACK IMAGES (Verified High Availability) ---
// Using mostly generic tech/corporate images that are less likely to be 404
const FALLBACK_POOL = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80', // Team coding
  'https://images.unsplash.com/photo-1504384308090-c54be3855833?w=1920&q=80', // Abstract tech
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Cyber lock
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80', // Network globe
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80', // Dashboard
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80', // Corporate woman
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80', // Mesh network
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80', // Matrix code
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80', // Skyscraper
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80', // Chip
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80', // AI brain
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80', // Handshake
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80', // Team analysis
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80', // Code monitor
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80', // Startup team
  'https://images.unsplash.com/photo-1558494949-ef526b004f90?w=1920&q=80', // Server (Wait, this one FAILED in logs, remove?)
  // Remove known bad ones
].filter((url) => !url.includes('1558494949')); // Filter out the one that failed in user logs

const KNOWN_BAD_URLS = [
  'https://images.unsplash.com/photo-1558494949-ef526b004f90?w=1920&q=80',
  'https://images.unsplash.com/photo-1531297461136-82eb3b207205?w=1920&q=80',
];

const checkUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!url) return resolve(false);
    // Instant fail for known bad ones to save ease
    if (KNOWN_BAD_URLS.some((bad) => url.includes(bad.split('?')[0]))) {
      return resolve(false);
    }

    const client = url.startsWith('https') ? https : http;
    const req = client.request(url, { method: 'HEAD', timeout: 3000 }, (res) => {
      if (res.statusCode === 404) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
    req.end();
  });
};

const main = async () => {
  console.log('Starting deep image validation and repair...');

  const updatedPosts: BlogPost[] = [];
  let fixCount = 0;

  // We iterate sequentially to properly manage fallback pool usage
  for (const post of blogPosts) {
    let currentImage = post.image;
    let needsFix = false;

    // Check if known bad or 404
    const isValid = await checkUrl(currentImage);

    if (!isValid) {
      console.log(`❌ BROKEN: [${post.slug}] ${currentImage}`);
      needsFix = true;
    }

    if (needsFix) {
      // Pick a fallback
      const fallback = FALLBACK_POOL.shift(); // Take one
      if (fallback) {
        currentImage = fallback;
        FALLBACK_POOL.push(fallback); // Recycle it to end
        console.log(`   -> REPLACED WITH: ${currentImage}`);
        fixCount++;
      } else {
        console.log('   -> NO FALLBACKS AVAILABLE! Keeping broken.');
      }
    }

    updatedPosts.push({
      ...post,
      image: currentImage,
    });
  }

  if (fixCount > 0) {
    console.log(`\nFixed ${fixCount} broken images. Writing to file...`);

    const filePath = path.join(__dirname, '../src/data/blog-premium.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Regex replacement of array
    const startRegex = /export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/;
    const newArrayContent = JSON.stringify(updatedPosts, null, 4);
    const newFileContent = fileContent.replace(
      startRegex,
      `export const blogPosts: BlogPost[] = ${newArrayContent};`
    );

    fs.writeFileSync(filePath, newFileContent, 'utf-8');
    console.log('File updated successfully.');
  } else {
    console.log('No broken images found (or all checked out valid).');
  }
};

main();
