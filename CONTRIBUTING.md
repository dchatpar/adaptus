# Contributing to AdaptUs Group

Thank you for your interest in contributing to the AdaptUs Group website! This document provides guidelines and best practices for contributing to this project.

## 🎯 Code of Conduct

- Be respectful and professional
- Write clean, maintainable code
- Follow the established coding standards
- Test your changes thoroughly
- Document your code when necessary

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Create a feature branch: `git checkout -b feat/your-feature-name`
4. Make your changes
5. Commit using conventional commits
6. Push to your fork
7. Open a pull request

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript strict mode (already configured)
- Avoid `any` types when possible
- Use explicit return types for public functions
- Prefer interfaces over types for object shapes
- Use meaningful variable and function names

### React

- Use functional components with hooks
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks
- Use proper prop typing with TypeScript
- Avoid inline styles; use Tailwind CSS classes

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use CSS variables for theme values
- Avoid arbitrary values when possible

### File Organization

```
src/
├── app/              # Next.js pages (App Router)
├── components/       # Reusable React components
│   ├── ui/          # Base UI components
│   └── sections/    # Page sections
├── lib/             # Utility functions and helpers
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
└── styles/          # Global styles
```

## 🔄 Git Workflow

### Branching Strategy

- `main`: Production-ready code
- `develop`: Development branch
- `feat/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates
- `refactor/*`: Code refactoring

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `perf`: Performance
- `test`: Tests
- `build`: Build system
- `ci`: CI/CD
- `chore`: Maintenance

**Examples:**

```bash
feat(auth): implement user login flow
fix(ui): resolve mobile navigation overflow
docs(readme): add installation instructions
refactor(api): simplify data fetching logic
```

## ✅ Pull Request Process

1. **Before submitting:**
   - Run `pnpm lint` and fix all errors
   - Run `pnpm typecheck` and resolve type issues
   - Run `pnpm format` to format code
   - Test your changes locally
   - Update documentation if needed

2. **PR Title:**
   - Follow conventional commit format
   - Be descriptive and concise

3. **PR Description:**
   - Explain what changes you made and why
   - Reference related issues
   - Include screenshots for UI changes
   - List any breaking changes

4. **Review Process:**
   - Wait for CI checks to pass
   - Address reviewer feedback
   - Keep PR focused and small when possible

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Test across different browsers
- Test responsive layouts on various screen sizes
- Verify accessibility with screen readers

## 🎨 Design Guidelines

### Premium Enterprise Standards

- **Motion**: Use sophisticated animations (Framer Motion, GSAP)
- **Interactions**: Implement micro-interactions for enhanced UX
- **Typography**: Use modern, readable fonts (Inter, Roboto, etc.)
- **Colors**: Maintain brand consistency
- **Spacing**: Follow consistent spacing scale
- **Accessibility**: WCAG 2.1 AA compliance minimum

### UI/UX Best Practices

- Mobile-first responsive design
- Fast loading times (optimize images, lazy load)
- Clear visual hierarchy
- Intuitive navigation
- Consistent component patterns
- Smooth transitions and animations

## 🔍 Code Review Checklist

- [ ] Code follows style guidelines
- [ ] TypeScript types are properly defined
- [ ] No console.log statements (use console.warn/error if needed)
- [ ] Components are properly documented
- [ ] Accessibility standards met
- [ ] Performance optimized
- [ ] Responsive design implemented
- [ ] Tests added/updated
- [ ] Documentation updated

## 🐛 Reporting Bugs

When reporting bugs, include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, device
7. **Additional Context**: Any other relevant information

## 💡 Suggesting Enhancements

When suggesting features:

1. **Use Case**: Explain the problem it solves
2. **Proposed Solution**: Describe your idea
3. **Alternatives**: Other approaches considered
4. **Mockups**: Visual examples if applicable

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [React Documentation](https://react.dev/)

## 🙏 Thank You

Your contributions make AdaptUs Group better. We appreciate your time and effort!

---

**Questions?** Open an issue or reach out to the maintainers.
