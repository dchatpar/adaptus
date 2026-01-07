import { blogPosts } from '../src/data/blog-premium';

console.log(`Scanning ${blogPosts.length} blog posts for missing or invalid images...`);

const missingImages = [];
const invalidUrls = [];

blogPosts.forEach((post) => {
  if (!post.image || post.image.trim() === '') {
    missingImages.push({ id: post.id, title: post.title });
  } else if (!post.image.startsWith('http')) {
    invalidUrls.push({ id: post.id, title: post.title, url: post.image });
  }
});

if (missingImages.length > 0) {
  console.log('\n❌ Found posts with MISSING images:');
  missingImages.forEach((p) => console.log(` - [${p.id}] ${p.title}`));
} else {
  console.log('\n✅ No missing images found.');
}

if (invalidUrls.length > 0) {
  console.log('\n❌ Found posts with INVALID image URLs:');
  invalidUrls.forEach((p) => console.log(` - [${p.id}] ${p.title} (URL: ${p.url})`));
} else {
  console.log('\n✅ No invalid image URLs found.');
}

console.log('\nDone.');
