# Enterprise Mega Menu Component

## Overview

Next-generation, enterprise-grade mega menu component following 2025+ design trends.

## Features

### ✅ Structure & Layout
- Multi-column grid layout with categories and sub-categories
- Integrated search field for instant filtering
- Featured content area in each dropdown
- Clear CTAs ("Get Started", "Contact")
- Sticky navigation on scroll

### ✅ Visual Elements
- SVG icons for all menu items
- Featured graphics/images in panels
- Gradient accents and hover effects
- Glassmorphism backdrop blur
- Premium visual design

### ✅ Animations
- Fade-in + slide-down panel entry
- Staggered item reveal (100ms delays)
- Smooth underline and color transitions
- 200-400ms panel transitions
- Cursor-following effects

### ✅ Responsive Behavior
- **Desktop:** Hover to reveal + keyboard accessible
- **Mobile:** Full-screen overlay with accordion
- **Tablet:** Touch-optimized interactions
- Hamburger menu icon on mobile

### ✅ Accessibility
- ARIA roles and labels
- Keyboard navigation (Tab, Enter, Esc)
- Focus management
- Screen reader support
- 44x44px touch targets

## Usage

```tsx
import { MegaMenu } from '@/components/navigation/MegaMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MegaMenu />
      <main>{children}</main>
    </>
  );
}
```

## Customization

### Menu Data Structure

Edit the `menuData` object in `MegaMenu.tsx`:

```typescript
const menuData = {
  products: {
    title: 'Products',
    icon: Sparkles,
    columns: [
      {
        title: 'Category Name',
        items: [
          {
            name: 'Item Name',
            href: '/path',
            icon: IconComponent,
            description: 'Brief description'
          },
        ],
      },
    ],
    featured: {
      title: 'Featured Title',
      description: 'Featured description',
      image: '/path/to/image.webp',
      href: '/featured/link',
    },
  },
};
```

### Styling

The component uses Tailwind CSS classes. Key customization points:

- **Colors:** Update `bg-primary`, `text-primary`, etc.
- **Spacing:** Adjust `p-8`, `gap-8`, etc.
- **Animations:** Modify Framer Motion `transition` values
- **Breakpoints:** Change `lg:` prefix for responsive behavior

### Animation Timing

```typescript
// Panel entry
transition={{ duration: 0.2 }}

// Staggered items
transition={{ delay: idx * 0.1 }}

// Hover effects
transition-colors duration-200
```

## Accessibility Features

### Keyboard Navigation
- **Tab:** Navigate through menu items
- **Enter/Space:** Activate menu items
- **Escape:** Close open panels
- **Arrow keys:** Navigate within panels

### ARIA Attributes
```tsx
aria-expanded={activeMenu === key}
aria-haspopup="true"
aria-label="Toggle menu"
```

### Focus Management
- Automatic focus trapping in mobile menu
- Visible focus indicators
- Logical tab order

## Performance Optimization

### Lazy Loading
- Featured images loaded on demand
- Menu panels rendered only when active

### Animation Performance
- CSS transforms for smooth 60fps animations
- `will-change` hints for GPU acceleration
- Debounced scroll handlers

### Bundle Size
- Tree-shakeable icon imports
- Minimal dependencies
- Code splitting for mobile menu

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- `framer-motion` - Animations
- `lucide-react` - Icons
- `next` - Framework
- `tailwindcss` - Styling

## Best Practices

### UX Guidelines
- ✅ Limit top-level items to 7 or fewer
- ✅ Provide descriptive microcopy
- ✅ Use consistent icon styles
- ✅ Test on real devices

### Performance
- ✅ Avoid heavy animations on load
- ✅ Use CSS animations where possible
- ✅ Optimize images (WebP format)
- ✅ Monitor bundle size

### Accessibility
- ✅ Test with screen readers
- ✅ Ensure keyboard-only navigation works
- ✅ Maintain color contrast ratios
- ✅ Provide skip links

## Examples

### Adding a New Menu Section

```typescript
const menuData = {
  // ... existing sections
  resources: {
    title: 'Resources',
    icon: FileText,
    columns: [
      {
        title: 'Documentation',
        items: [
          { name: 'API Docs', href: '/docs/api', icon: Code, description: 'API reference' },
          { name: 'Guides', href: '/docs/guides', icon: FileText, description: 'How-to guides' },
        ],
      },
    ],
    featured: {
      title: 'New: Developer Portal',
      description: 'Everything you need to build',
      image: '/images/dev-portal.webp',
      href: '/developers',
    },
  },
};
```

### Customizing Colors

```tsx
// In your Tailwind config
theme: {
  extend: {
    colors: {
      primary: '#6366f1',
      accent: '#8b5cf6',
    },
  },
}
```

## Troubleshooting

### Menu Not Opening
- Check `onMouseEnter`/`onMouseLeave` handlers
- Verify `activeMenu` state is updating
- Ensure no z-index conflicts

### Mobile Menu Issues
- Test touch events on real devices
- Check viewport meta tag
- Verify overflow scrolling works

### Animation Performance
- Reduce stagger delays if laggy
- Use `transform` instead of `top/left`
- Enable GPU acceleration

## Support

For issues or questions, refer to:
- Component documentation
- Framer Motion docs
- Tailwind CSS docs
- Next.js docs
