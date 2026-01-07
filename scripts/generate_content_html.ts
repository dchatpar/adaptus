import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const CONTENT_DIR = 'src/data/content';
const OUTPUT_FILE = 'src/data/all_content_html.ts';

async function generateHtmlContent() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  const contentMap: Record<string, string> = {};

  for (const file of files) {
    const slug = file.replace('.md', '');
    const markdown = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
    const html = await marked.parse(markdown);
    contentMap[slug] = html;
    console.log(`Processed ${file} -> ${slug}`);
  }

  const output = `// AUTO-GENERATED CONTENT - DO NOT EDIT MANUALLY
export const allContentHtml: Record<string, string> = ${JSON.stringify(contentMap, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`Generated ${OUTPUT_FILE}`);
}

generateHtmlContent().catch(console.error);
