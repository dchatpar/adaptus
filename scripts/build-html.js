const fs = require('fs');
const path = require('path');

// Simple HTML minification
function minifyHTML(html) {
    return html
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/>\s+</g, '><') // Remove whitespace between tags
        .trim();
}

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Read HTML
const htmlPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Update CSS reference to minified version
html = html.replace('styles.css', 'styles.min.css');

// Minify HTML
const minified = minifyHTML(html);

// Write minified HTML
const outputPath = path.join(distDir, 'index.html');
fs.writeFileSync(outputPath, minified);

// Copy JavaScript file
const jsPath = path.join(__dirname, '..', 'script.js');
const jsOutputPath = path.join(distDir, 'script.js');
fs.copyFileSync(jsPath, jsOutputPath);

console.log('✓ HTML built successfully');
console.log(`  Original size: ${html.length} bytes`);
console.log(`  Minified size: ${minified.length} bytes`);
console.log(`  Saved: ${((1 - minified.length / html.length) * 100).toFixed(1)}%`);
console.log('✓ JavaScript copied to dist');
