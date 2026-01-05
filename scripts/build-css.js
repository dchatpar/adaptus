const fs = require('fs');
const path = require('path');

// Simple CSS minification
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around special chars
        .trim();
}

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Read and minify CSS
const cssPath = path.join(__dirname, '..', 'styles.css');
const css = fs.readFileSync(cssPath, 'utf8');
const minified = minifyCSS(css);

// Write minified CSS
const outputPath = path.join(distDir, 'styles.min.css');
fs.writeFileSync(outputPath, minified);

console.log('✓ CSS built successfully');
console.log(`  Original size: ${css.length} bytes`);
console.log(`  Minified size: ${minified.length} bytes`);
console.log(`  Saved: ${((1 - minified.length / css.length) * 100).toFixed(1)}%`);
