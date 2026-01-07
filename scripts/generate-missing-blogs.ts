import fs from 'fs';
import path from 'path';

// Categories and their targets
const targets = {
  'ai-ml': { count: 25, name: 'AI & Machine Learning' },
  software: { count: 20, name: 'Software Development' },
  cloud: { count: 15, name: 'Cloud & Infrastructure' },
  marketing: { count: 15, name: 'Digital Marketing' },
  security: { count: 10, name: 'Cybersecurity' },
  industry: { count: 15, name: 'Industry Insights' },
};

// Titles pool
const titles = {
  'ai-ml': [
    'The Future of Generative AI in Business',
    'Implementing Large Language Models Locally',
    'AI Ethics: Navigating the Grey Areas',
    'Computer Vision in Retail: Beyond Security',
    'The Role of AI in Supply Chain Optimization',
    'AutoML: Democratizing Machine Learning',
    'Reinforcement Learning for Robotics',
    'AI-Driven Personalization at Scale',
    'Detecting Deepfakes: A New Arms Race',
    'The Environmental Impact of AI Training',
    'Edge AI: Intelligence on Devices',
    'Conversational AI: Beyond Basic Scripts',
    'AI in Healthcare: Diagnostic Assistants',
    'Financial Forecasting with Deep Learning',
    'Synthetic Data for Privacy Preservation',
    'Explainable AI (XAI): Trusting the Black Box',
    'Neural Networks Simplified for Executives',
    'The Rise of Agentic AI Workflows',
    'AI Governance Frameworks for 2026',
    'Prompt Engineering Best Practices',
    'Vector Databases Explained',
    'RAG Architectures for Enterprise',
    'AI in Legal Tech',
    'Predictive Analytics for HR',
    'The Chief AI Officer Role',
  ],
  software: [
    'Rust vs Go: Systems Programming in 2025',
    'WebAssembly: The Future of Web Apps?',
    'GraphQL vs REST: Making the Right Choice',
    'Clean Code Principles for Modern Teams',
    'Test-Driven Development: Is It Still Relevant?',
    'Serverless Architectures: Pros and Cons',
    'Monorepos: Managing Large Codebases',
    'Event-Driven Architecture Patterns',
    'Legacy Code Refactoring Strategies',
    'Mobile Development: Flutter vs React Native',
    'Progressive Web Apps (PWA) in 2025',
    'CI/CD Pipelines for Microservices',
    'Feature Flags: Decoupling Deploy from Release',
    'Domain-Driven Design (DDD) Crash Course',
    'API Security Best Practices',
    'Managing Technical Debt Effectively',
    'Green Coding: Sustainable Software Engineering',
    'Web3 and Blockchain: Practical Use Cases',
    'Low-Code vs Pro-Code',
    'Debugging Distributed Systems',
  ],
  cloud: [
    'Multi-Cloud Strategy: Avoiding Vendor Lock-in',
    'Infrastructure as Code with Terraform',
    'Serverless Security Challenges',
    'Cloud Cost Management (FinOps)',
    'Service Mesh: Do You Really Need It?',
    'Container Security Best Practices',
    'Disaster Recovery in the Cloud',
    'Edge Computing vs Cloud Computing',
    'Hybrid Cloud Architectures',
    'Azure vs AWS vs Google Cloud: 2025 Comparison',
    'Observability: Logs, Metrics, and Traces',
    'Cloud Native Networking',
    'GitOps: Operations by Pull Request',
    'Zero Trust Security in the Cloud',
    'Kubernetes Networking Guide',
  ],
  marketing: [
    'TikTok for B2B Marketing?',
    'The Death of Third-Party Cookies',
    'Influencer Marketing ROI',
    'Podcast Advertising Strategies',
    'Personal Branding for Founders',
    'Email Marketing Automation Workflows',
    'Social Proof and Conversion Rate Optimization',
    'Data-Driven Storytelling',
    'Account-Based Marketing (ABM) Guide',
    'Voice Search Optimization Tactics',
    'Interactive Content Marketing',
    'Community Led Growth',
    'Marketing Attribution Models',
    'Dark Social: Tracking the Untrackable',
    'Video Marketing Trends 2025',
  ],
  security: [
    'Ransomware Trends in 2025',
    'Phishing Simulation Training',
    'Identity and Access Management (IAM)',
    'Securing Remote Workforces',
    'Supply Chain Attacks: Prevention',
    'IoT Security Vulnerabilities',
    'DevSecOps: Integrating Security Early',
    'Social Engineering Awareness',
    'Biometric Security Pros and Cons',
    'Quantum Cryptography Preparedness',
  ],
  industry: [
    'The Future of Remote Work',
    'Fintech Trends to Watch',
    'Healthtech Innovations',
    'Edtech: The Classroom of 2026',
    'Sustainable Business Practices',
    'The Gig Economy Evolution',
    'Smart Cities: Infrastructure of Tomorrow',
    'E-commerce Trends in 2025',
    'The Creator Economy Landscape',
    '5G and 6G Impact on Business',
    'Blockchain in Supply Chain',
    'The Metaverse: Hype vs Reality',
    'Digital Transformation Success Stories',
    'Agile Management Beyond Software',
    'Corporate Wellness and Productivity',
  ],
};

// Author keys from the existing file
const authorKeys = [
  'sarahChen',
  'alexThompson',
  'davidPark',
  'emmaWilliams',
  'jessicaMartinez',
  'michaelRodriguez',
  'robertKim',
];

const authorsObject = `
// Author profiles
const authors = {
	alexThompson: {
		name: "Alex Thompson",
		role: "Solutions Architect",
		bio: "Cloud architecture expert specializing in microservices and distributed systems.",
	},
	davidPark: {
		name: "David Park",
		role: "DevOps Lead",
		bio: "Kubernetes certified expert helping enterprises optimize cloud infrastructure.",
	},
	emmaWilliams: {
		name: "Emma Williams",
		role: "Senior Full-Stack Developer",
		bio: "React and Next.js specialist with a passion for performance optimization.",
	},
	jessicaMartinez: {
		name: "Jessica Martinez",
		role: "Head of Digital Marketing",
		bio: "SEO and content marketing strategist with proven ROI for SaaS companies.",
	},
	michaelRodriguez: {
		name: "Michael Rodriguez",
		role: "VP of Engineering",
		bio: "Former Google engineer with 20 years of experience in scalable systems and IoT.",
	},
	robertKim: {
		name: "Robert Kim",
		role: "Security Architect",
		bio: "CISSP certified with expertise in zero-trust architecture and compliance.",
	},
    sarahChen: {
		name: "Dr. Sarah Chen",
		role: "Chief AI Officer",
		bio: "PhD in Machine Learning from Stanford. 15+ years building AI systems for Fortune 500 companies.",
	},
};
`;

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getRandomDate() {
  const start = new Date(2025, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

function generateContent(title: string, category: string) {
  return `<p>In the rapidly evolving landscape of <strong>${category}</strong>, staying ahead of the curve is crucial. This article explores <em>${title}</em> and what it means for modern enterprises.</p>

<h2>The Current State of ${title}</h2>
<p>Recent developments have shown that organizations adopting this approach see significant improvements in efficiency and scalability. According to recent industry surveys, 78% of leaders consider this a top priority for 2026.</p>

<h2>Key Challenges and Solutions</h2>
<ul>
    <li><strong>Integration Complexity:</strong> integrating new systems with legacy infrastructure remains a hurdle.</li>
    <li><strong>Skill Gap:</strong> finding talent with the right expertise is increasingly difficult.</li>
    <li><strong>Cost Management:</strong> balancing innovation with budget constraints.</li>
</ul>

<h2>Best Practices for Implementation</h2>
<ol>
    <li>Start with a clear strategy and defined KPIs.</li>
    <li>Invest in training and upskilling your team.</li>
    <li>Adopt an iterative approach, starting with pilot projects.</li>
    <li>Measure impact and adjust course as needed.</li>
</ol>

<h2>Looking Ahead</h2>
<p>As we move further into the decade, ${title} will continue to shape the industry. The organizations that adapt now will be the leaders of tomorrow.</p>

<p>For more insights on how to leverage these trends, contact our expert team today.</p>`;
}

const colors = ['6366f1', 'ec4899', '8b5cf6', '06b6d4', '10b981', 'f59e0b', 'ef4444', '3b82f6'];

function run() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blog-premium.ts');
  let fileContent = fs.readFileSync(filePath, 'utf8');

  // 1. Inject Authors if missing
  if (!fileContent.includes('const authors = {')) {
    // Find where to insert. Before `export const blogPosts`
    const postsDef = 'export const blogPosts';
    const insertIdx = fileContent.indexOf(postsDef);
    if (insertIdx !== -1) {
      fileContent =
        fileContent.slice(0, insertIdx) + authorsObject + '\n' + fileContent.slice(insertIdx);
    } else {
      console.error('Could not find definition of blogPosts');
      return;
    }
  }

  // 2. Find insertion point for posts
  const anchor = 'export function getBlogPostBySlug';
  const lastIndex = fileContent.indexOf(anchor);

  if (lastIndex === -1) {
    console.error('Could not find anchor: ' + anchor);
    return;
  }

  const beforeAnchor = fileContent.slice(0, lastIndex);
  const insertPoint = beforeAnchor.lastIndexOf('];');

  if (insertPoint === -1) {
    console.error('Could not find closing bracket of blogPosts array before anchor');
    return;
  }

  const existingSlugs = new Set();
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = slugRegex.exec(fileContent)) !== null) {
    existingSlugs.add(match[1]);
  }

  const newPosts: string[] = [];
  let idCounter = 8;

  for (const [category, config] of Object.entries(targets)) {
    const categoryTitles = titles[category as keyof typeof titles];

    for (const title of categoryTitles) {
      const slug = generateSlug(title);
      if (existingSlugs.has(slug)) continue;

      const authorKey = authorKeys[Math.floor(Math.random() * authorKeys.length)];
      const date = getRandomDate();
      const color = colors[Math.floor(Math.random() * colors.length)];
      const image = `https://placehold.co/1920x1080/${color}/white/png?text=${encodeURIComponent(title)}`;
      const excerpt = `Explore deep insights into ${title} and how it impacts the modern ${config.name} landscape in 2025.`;
      const metaDesc = `Comprehensive guide to ${title} for enterprise leaders and technology professionals.`;

      const post = `
	{
		author: authors.${authorKey},
		category: "${category}",
		content: ${JSON.stringify(generateContent(title, config.name))},
		excerpt: ${JSON.stringify(excerpt)},
		featured: ${Math.random() > 0.8},
		id: "${idCounter++}",
		image: "${image}",
		imageAlt: "${title} concept illustration",
		keywords: ["${category}", "Technology", "Enterprise", "Innovation"],
		metaDescription: ${JSON.stringify(metaDesc)},
		metaTitle: ${JSON.stringify(title + ' | AdaptUs Group')},
		publishDate: "${date}",
		readTime: "${Math.floor(Math.random() * 10 + 5)} min",
		slug: "${slug}",
		tags: ["${config.name}", "Tech Trends", "Strategy"],
		title: ${JSON.stringify(title)},
	},
`;

      newPosts.push(post);
    }
  }

  // Prepended comma to fix syntax error
  const newContent =
    fileContent.slice(0, insertPoint) + ',' + newPosts.join('') + fileContent.slice(insertPoint);

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ Added ${newPosts.length} new blog posts to src/data/blog-premium.ts`);
}

run();
