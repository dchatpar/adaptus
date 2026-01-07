# AdaptUs Group

> **Premium Enterprise Website** — Vancouver, Canada

A production-ready Next.js 15 application with TypeScript, Tailwind CSS v4, and comprehensive quality tooling for the AdaptUs Group corporate website.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Code Quality**: ESLint, Prettier, Stylelint
- **Git Hooks**: Husky + lint-staged
- **Commit Convention**: Conventional Commits (Commitlint)
- **CI/CD**: GitHub Actions
- **Performance**: Lighthouse CI
- **Security**: Snyk / Dependabot

## 📋 Prerequisites

- **Node.js**: v20.x or higher
- **pnpm**: v10.x or higher
- **Git**: Latest version

## 🛠️ Development Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd adaptus
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Script               | Description                  |
| -------------------- | ---------------------------- |
| `pnpm dev`           | Start development server     |
| `pnpm build`         | Build production bundle      |
| `pnpm start`         | Start production server      |
| `pnpm lint`          | Run ESLint                   |
| `pnpm lint:fix`      | Fix ESLint errors            |
| `pnpm format`        | Format code with Prettier    |
| `pnpm format:check`  | Check code formatting        |
| `pnpm stylelint`     | Run Stylelint on CSS files   |
| `pnpm stylelint:fix` | Fix Stylelint errors         |
| `pnpm typecheck`     | Run TypeScript type checking |
| `pnpm lhci`          | Run Lighthouse CI            |

## 📝 Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/). All commit messages must follow this format:

```
<type>(<scope>): <subject>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or dependencies
- `ci`: CI/CD changes
- `chore`: Other changes (maintenance, etc.)
- `revert`: Revert a previous commit

### Examples

```bash
feat(auth): add user authentication
fix(ui): resolve button alignment issue
docs(readme): update installation instructions
```

### Commit Hooks

- **pre-commit**: Runs lint-staged (ESLint, Prettier, Stylelint on staged files)
- **commit-msg**: Validates commit message format with Commitlint

## 🔍 Code Quality

### ESLint

Configured with:

- Next.js recommended rules
- TypeScript strict rules
- React Hooks rules
- Prettier integration

### Prettier

Enforces consistent code formatting:

- 2-space indentation
- Single quotes
- Trailing commas (ES5)
- 100 character line width

### Stylelint

Validates CSS with Tailwind CSS support.

### TypeScript

Strict mode enabled with:

- `noImplicitAny`
- `strictNullChecks`
- `noUnusedLocals`
- `noUnusedParameters`
- `noFallthroughCasesInSwitch`

## 🚦 CI/CD Pipeline

GitHub Actions workflow runs on every push and pull request:

1. **Install**: Cache and install dependencies
2. **Lint**: ESLint + Stylelint
3. **Type Check**: TypeScript compiler
4. **Build**: Production build
5. **Lighthouse**: Performance, accessibility, SEO audits
6. **Security**: Snyk vulnerability scanning

All jobs must pass for PRs to be merged.

## 🏗️ Project Structure

```
adaptus/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI/CD
├── .husky/                  # Git hooks
├── .vscode/                 # VSCode settings
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/          # React components
├── public/                  # Static assets
├── .eslintrc.cjs           # ESLint config
├── .prettierrc             # Prettier config
├── .stylelintrc.cjs        # Stylelint config
├── .commitlintrc.js        # Commitlint config
├── .lintstagedrc.js        # lint-staged config
├── lighthouserc.js         # Lighthouse CI config
├── tsconfig.json           # TypeScript config
└── package.json
```

## 🎨 Design Philosophy

This is a **premium enterprise website** built with:

- ✨ Advanced motion systems (Framer Motion / GSAP)
- 🎯 Sophisticated UI/UX patterns (2025-2026 standards)
- 🔥 Micro-interactions and layered interfaces
- ♿ Accessibility-first approach
- 📱 Responsive and mobile-optimized
- ⚡ Performance-optimized (Core Web Vitals)

## 🔒 Security

- Automated dependency scanning
- Regular security updates
- Strict TypeScript configuration
- ESLint security rules

See [SECURITY.md](./SECURITY.md) for vulnerability reporting.

## 📖 Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and development process.

## 📄 License

Copyright © 2026 AdaptUs Group Inc. All rights reserved.

---

**Built with ❤️ by the AdaptUs Group team in Vancouver, Canada**
