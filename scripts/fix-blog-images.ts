import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/data/blog-premium';

// A curated list of high-quality Unsplash images for Tech, Business, AI, Logistics
const freshImages = [
  // Tech / AI / Server
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80', // Chip
  'https://images.unsplash.com/photo-1558494949-ef526b004f90?w=1920&q=80', // Server
  'https://images.unsplash.com/photo-1531297461136-82eb3b207205?w=1920&q=80', // Tech dark
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80', // Network
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80', // Team coding
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80', // Cybersecurity
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80', // Matrix/Code
  'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1920&q=80', // Data viz
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80', // AI brain
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80', // AI abstract

  // Business / Corporate
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80', // Tall building
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80', // Office nice
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80', // Team meeting
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80', // Handshake
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80', // Suits
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80', // Analytics graph
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // Dashboard
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80', // Finance/Accounting

  // Logistics / Industry
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80', // Warehouse
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80', // Engineer factory
  'https://images.unsplash.com/photo-1494412574643-35d3d4018d40?w=1920&q=80', // Server rack
  'https://images.unsplash.com/photo-1513828583688-c2917aff9959?w=1920&q=80', // Drone delivery
  'https://images.unsplash.com/photo-1566576912903-abd698f8dd01?w=1920&q=80', // Shipping port
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80', // Industrial

  // Abstract / Modern
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80', // Abstract dark
  'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?w=1920&q=80', // Neon fluid
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80', // 3D render
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1920&q=80', // Retro grid

  // More Generic Tech
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80', // Women coding
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80', // Tech diversity
  'https://images.unsplash.com/photo-1451187863213-d1bcbaae3404?w=1920&q=80', // Planet data
  'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1920&q=80', // Programmer
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80', // Code screen
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&q=80', // Laptop code
  'https://images.unsplash.com/photo-1529101091760-61df6be34fc8?w=1920&q=80', // Code blue

  // Misc
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1920&q=80', // Coffee work
  'https://images.unsplash.com/photo-1493612276216-9c783700ebce?w=1920&q=80', // Call center
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80', // Office people
  'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1920&q=80', // Dell monitor
  'https://images.unsplash.com/photo-1553877607-ca9810e6e765?w=1920&q=80', // Robot arm
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80', // Robot face
  'https://images.unsplash.com/photo-1535378437327-b7149b386c3a?w=1920&q=80', // Future city
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80', // Abstract mesh
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80', // Data stream
  'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1920&q=80', // Desk setup
];

const main = async () => {
  const usedImages = new Set<string>();
  // Pre-populate with images from posts to ensure we know what's used
  // But we want to re-assign duplicates, so maybe we iterate and build the set, identifying dupes?

  // Strategy:
  // 1. Iterate posts.
  // 2. If image seen before -> assign new from `freshImages` (pop it).
  // 3. If image NOT seen before -> add to usedImages.
  // 4. Also fix 'global-payroll-eor-compliance' explicitly.

  const TARGET_SLUG = 'global-payroll-eor-compliance';
  const TARGET_NEW_IMAGE = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80'; // Finance/Compliance

  let fixedCount = 0;
  const newPosts = blogPosts.map((post) => {
    let currentImage = post.image;
    let wasFixed = false;

    // Explicit fix
    if (post.slug === TARGET_SLUG) {
      console.log(`Fixing target slug: ${TARGET_SLUG}`);
      currentImage = TARGET_NEW_IMAGE;
      wasFixed = true;
    }

    // Duplicate check
    // Check if this image has been used by a PREVIOUS post in this very loop?
    // Wait, `map` runs effectively in order.
    if (usedImages.has(currentImage)) {
      // It's a duplicate!
      if (freshImages.length > 0) {
        const newImg = freshImages.shift();
        if (newImg) {
          console.log(`Replacing duplicate for [${post.id}] ${post.slug}`);
          currentImage = newImg;
          wasFixed = true;
          fixedCount++;
        }
      } else {
        console.warn('Ran out of fresh images!');
        // Keep duplicate if we must, or rotate?
      }
    }

    usedImages.add(currentImage);

    return {
      ...post,
      image: currentImage,
    };
  });

  // Now write back to file
  // We need to preserve the TS structure.
  // The file structure is constant imports + `export const blogPosts: BlogPost[] = [...]` + helper functions.
  // Instead of parsing/stringifying the whole file which is risky with functions,
  // I will read the file, locate `export const blogPosts: BlogPost[] = [`, find the matching closing `];`,
  // and replace the content inside.

  const filePath = path.join(__dirname, '../src/data/blog-premium.ts');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // We'll regenerate the array content as a string
  // JSON.stringify is close but keys shouldn't be quoted if possible to match style,
  // but actually JSON is fine for data.
  // However, `author` object etc needs to be clean.

  const newContentString = JSON.stringify(newPosts, null, 4);

  // Regex to find the array
  // Look for: export const blogPosts: BlogPost[] = [ ... ];
  const regex = /export const blogPosts: BlogPost\[\] = \[\s*([\s\S]*?)\s*\];/;

  // Actually, simpler: just replace the whole array definition.
  // But `JSON.stringify` will put quotes around keys ("id": "...") which is valid JSON but maybe not preferred style (TS usually allows unquoted).
  // It's fine.

  // We need to remove the outer `[` and `]` from stringify because we want to preserve the variable declaration wrapper?
  // Or just replace the whole block.

  const match = fileContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
  if (!match) {
    console.error('Could not find blogPosts array in file!');
    process.exit(1);
  }

  // Construct new file content
  // We'll strictly replace the ARRAY CONTENT.
  const newFileContent = fileContent.replace(
    /export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/,
    `export const blogPosts: BlogPost[] = ${newContentString};`
  );

  fs.writeFileSync(filePath, newFileContent, 'utf-8');
  console.log(`\nSuccessfully updated blog-premium.ts. Fixed ${fixedCount} duplicates.`);
};

main();
