# Adaptus

A modern, responsive website built with pure HTML, CSS, and JavaScript.

## Features

- 🎨 Modern, clean design with gradient accents
- 📱 Fully responsive layout
- ⚡ Fast and lightweight
- 🎯 Smooth scrolling and animations
- 🔧 Simple build system
- 🎭 Interactive navigation

## Quick Start

### Development

Open `index.html` directly in your browser, or use a development server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080
```

Then open http://localhost:8080 in your browser.

### Build for Production

```bash
# Install dependencies (optional, only needed for build)
npm install

# Build optimized version
npm run build

# Serve the built version
npm run serve
```

The built files will be in the `dist/` directory.

## Project Structure

```
adaptus/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── scripts/            # Build scripts
│   ├── build-css.js    # CSS minification
│   └── build-html.js   # HTML minification
└── dist/              # Built files (generated)
```

## Sections

- **Hero**: Eye-catching landing section with call-to-action buttons
- **Features**: Showcase of key features with icon cards
- **About**: Information about Adaptus with visual elements
- **Contact**: Contact form for user inquiries
- **Footer**: Social links and copyright information

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --dark-bg: #0f172a;
    --light-bg: #f8fafc;
    /* ... */
}
```

### Content

Update the text content in `index.html` to match your needs.

### Functionality

Modify `script.js` to add or change interactive features.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
