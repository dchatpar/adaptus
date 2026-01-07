# CI/CD Visual Testing Setup

## Required GitHub Secrets

Add these secrets in **Settings → Secrets → Actions**:

1. `CHROMATIC_PROJECT_TOKEN` - Get from [Chromatic](https://www.chromatic.com/)
2. `PERCY_TOKEN` - Get from [Percy](https://percy.io/)
3. `APPLITOOLS_API_KEY` - Get from [Applitools](https://applitools.com/) (optional)

## Workflow Overview

The GitHub Actions workflow runs 6 jobs sequentially:

### 1. Chromatic (Component Visual)
- Captures Storybook component snapshots
- Detects UI drift at component level
- Reports: Chromatic dashboard

### 2. Playwright (E2E + Visual)
- Runs functional tests across 6 browsers/devices
- Takes visual snapshots
- Reports: `playwright-report/`

### 3. Percy (Visual Regression)
- AI-powered visual comparison
- Detects layout shifts and style changes
- Reports: Percy dashboard

### 4. BackstopJS (Visual Regression)
- Screenshot comparison across 4 viewports
- 11 test scenarios (homepage + 6 industries)
- Reports: `backstop_data/html_report/`

### 5. Lighthouse CI (Performance)
- Performance audits (LCP, CLS, TBT)
- Accessibility checks (WCAG AA)
- SEO validation
- Reports: `.lighthouseci/`

### 6. Build Verification
- TypeScript type checking
- ESLint validation
- Production build test

## Performance Budgets

Configured in `lighthouserc.js`:

- **Performance:** ≥ 90
- **Accessibility:** ≥ 95
- **Best Practices:** ≥ 90
- **SEO:** ≥ 90
- **LCP:** ≤ 2.5s
- **CLS:** ≤ 0.1
- **TBT:** ≤ 300ms

## Running Tests Locally

```bash
# Component visual tests
pnpm storybook
pnpm chromatic

# E2E tests
pnpm playwright
pnpm playwright:ui

# Visual regression
pnpm backstop:test
pnpm percy

# Performance
pnpm lhci

# All tests
pnpm visual:all
```

## Branch Protection

Recommended branch protection rules:

1. Require status checks to pass:
   - Chromatic Visual Component Tests
   - Playwright E2E & Visual Tests
   - Percy Visual Regression
   - Lighthouse Performance & Audit
   - Build Verification

2. Require review from code owners

3. Require linear history

## Artifacts

All test reports are uploaded as GitHub Actions artifacts:

- `playwright-report` (30 days)
- `backstop-report` (30 days)
- `lighthouse-report` (30 days)

## Troubleshooting

### Chromatic fails
- Check `CHROMATIC_PROJECT_TOKEN` is set
- Verify Storybook builds: `pnpm build-storybook`

### Percy fails
- Check `PERCY_TOKEN` is set
- Ensure dev server is running

### Lighthouse fails
- Check performance budgets in `lighthouserc.js`
- Review LCP, CLS, TBT metrics

### BackstopJS fails
- Run `pnpm backstop:reference` to create baseline
- Approve changes: `pnpm backstop:approve`
