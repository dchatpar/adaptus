import { blogPosts } from '../src/data/blog-premium';

console.log(`Total blog posts: ${blogPosts.length}`);

// Check categories count
const categories: Record<string, number> = {};
blogPosts.forEach((post) => {
  categories[post.category] = (categories[post.category] || 0) + 1;
});

console.log('Posts per category:');
console.table(categories);

// Check for duplicates
const slugs = new Set();
const duplicates: string[] = [];
blogPosts.forEach((post) => {
  if (slugs.has(post.slug)) {
    duplicates.push(post.slug);
  }
  slugs.add(post.slug);
});

if (duplicates.length > 0) {
  console.log(`⚠️ Found ${duplicates.length} duplicate slugs!`);
  console.log(duplicates);
} else {
  console.log('✅ No duplicate slugs found');
}
