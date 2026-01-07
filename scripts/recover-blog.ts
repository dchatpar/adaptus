import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../src/data/blog-premium.ts');

const recover = () => {
  console.log('Reading file...');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Find the start
  const startMarker = 'export const blogPosts: BlogPost[] = ';
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    console.log('Could not find start marker.');
    return;
  }

  const arrayStart = content.indexOf('[', startIndex);
  if (arrayStart === -1) {
    console.log('Could not find array start.');
    return;
  }

  console.log('Found array start at', arrayStart);

  // Attempt to extract JSON
  // We expect a valid JSON array `[ ... ]`.
  // It might differ if TS/JS allowed trailing commas etc, but JSON.stringify produces strict JSON.
  // So we can try to find the matching `]`.

  let depth = 0;
  let inString = false;
  let escape = false;
  let arrayEnd = -1;

  for (let i = arrayStart; i < content.length; i++) {
    const char = content[i];

    if (escape) {
      escape = false;
      continue;
    }

    if (char === '\\') {
      escape = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      continue;
    }

    if (!inString) {
      if (char === '[') depth++;
      if (char === ']') {
        depth--;
        if (depth === 0) {
          arrayEnd = i;
          break;
        }
      }
    }
  }

  if (arrayEnd === -1) {
    console.log('Could not find matching array end.');
    // Try to assume the last `];` is the end?
    // Or finding the last `]` in file.
    const lastBracket = content.lastIndexOf(']');
    if (lastBracket > arrayStart) {
      console.log("Falling back to last ']' in file.");
      arrayEnd = lastBracket;
    } else {
      return;
    }
  }

  console.log('Found array end at', arrayEnd);

  // Extract the JSON string
  const jsonString = content.substring(arrayStart, arrayEnd + 1);

  try {
    const posts = JSON.parse(jsonString);
    console.log(`Successfully parsed ${posts.length} posts.`);

    // Deduplicate just in case
    const seen = new Set();
    const uniquePosts = [];
    for (const p of posts) {
      if (!seen.has(p.id)) {
        seen.add(p.id);
        uniquePosts.push(p);
      }
    }
    console.log(`Unique posts: ${uniquePosts.length}`);

    // Reconstruct file
    const header = `// PROFESSIONAL EDITORIAL BLOG POSTS
// Generated: 2025-12-23T08:00:00.000Z
// Total Posts: ${uniquePosts.length}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    author: {
        name: string;
        role: string;
        bio: string;
    };
    publishDate: string;
    updatedDate?: string;
    readTime: string;
    image: string;
    imageAlt: string;
    featured?: boolean;
    keywords?: string[];
    schema?: any;
}

export const blogCategories = [
    { slug: 'ai-automation', name: 'AI & Automation' },
    { slug: 'software-engineering', name: 'Software Engineering' },
    { slug: 'cloud-infrastructure', name: 'Cloud & DevOps' },
    { slug: 'cybersecurity', name: 'Cybersecurity' },
    { slug: 'data-analytics', name: 'Data & Analytics' },
    { slug: 'digital-strategy', name: 'Digital Strategy' },
    { slug: 'product-growth', name: 'Product & Growth' },
    { slug: 'leadership-culture', name: 'Leadership & Culture' },
    { slug: 'distribution-logistics', name: 'Logistics & Distribution' },
    { slug: 'manpower-staffing', name: 'Talent & Staffing' }
];

export const blogPosts: BlogPost[] = `;

    const footer = `;

export function getBlogPostBySlug(slug: string) {
    return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string) {
    return blogPosts.filter(post => post.category === category);
}

export function getFeaturedPosts() {
    return blogPosts.filter(post => post.featured);
}

export function getAllBlogSlugs() {
    return blogPosts.map(post => post.slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3) {
    const currentPost = getBlogPostBySlug(currentSlug);
    if (!currentPost) return [];

    return blogPosts
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, limit);
}
`;

    const finalContent = header + JSON.stringify(uniquePosts, null, 4) + footer;
    fs.writeFileSync(filePath, finalContent, 'utf-8');
    console.log('File repaired successfully.');
  } catch (e: any) {
    console.log('Error parsing extracted JSON:', e.message);
    // Print tail of string to debug
    console.log('Tail:', jsonString.substring(jsonString.length - 100));
  }
};

recover();
