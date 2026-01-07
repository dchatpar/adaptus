# GitHub Secrets Setup Guide

## Required Secrets

Add these in **GitHub Repository → Settings → Secrets and variables → Actions → New repository secret**:

### 1. CHROMATIC_PROJECT_TOKEN
**Purpose:** Chromatic component visual testing

**How to get:**
1. Go to [chromatic.com](https://www.chromatic.com/)
2. Sign in with GitHub
3. Create new project or select existing
4. Copy project token from project settings

**Value format:** `chpt_xxxxxxxxxxxxxxxx`

---

### 2. PERCY_TOKEN
**Purpose:** Percy visual regression testing

**How to get:**
1. Go to [percy.io](https://percy.io/)
2. Sign in with GitHub
3. Create new project: "AdaptUs Website"
4. Copy token from Project Settings → Integrations

**Value format:** `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### 3. APPLITOOLS_API_KEY
**Purpose:** Applitools AI-powered visual validation

**How to get:**
1. Go to [applitools.com](https://applitools.com/)
2. Sign up for free account
3. Navigate to Profile → My API Key
4. Copy API key

**Value format:** `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### 4. LHCI_GITHUB_TOKEN (Optional but recommended)
**Purpose:** Lighthouse CI GitHub integration

**How to get:**
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`, `workflow`
4. Copy token

**Value format:** `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### 5. BASE_URL (Optional)
**Purpose:** Testing against deployed preview

**Value:** Your staging/preview URL
- Example: `https://adaptus-preview.vercel.app`
- Or: `http://localhost:3000` (default)

---

## Verification

After adding secrets, verify in GitHub Actions:

1. Go to **Actions** tab
2. Run workflow manually or push to trigger
3. Check job logs for secret usage
4. Secrets should show as `***` in logs

---

## Security Notes

- ✅ Secrets are encrypted at rest
- ✅ Only exposed to workflow runs
- ✅ Not visible in logs or pull requests from forks
- ⚠️ Rotate tokens if compromised
- ⚠️ Use separate tokens for staging/production

---

## Local Testing

For local testing, create `.env.local`:

```bash
CHROMATIC_PROJECT_TOKEN=your_token_here
PERCY_TOKEN=your_token_here
APPLITOOLS_API_KEY=your_key_here
BASE_URL=http://localhost:3000
```

**Important:** Add `.env.local` to `.gitignore`

---

## Troubleshooting

### Chromatic fails with "Unauthorized"
- Verify `CHROMATIC_PROJECT_TOKEN` is correct
- Check token hasn't expired
- Ensure project exists in Chromatic dashboard

### Percy fails with "Invalid token"
- Verify `PERCY_TOKEN` is correct
- Check project is created in Percy dashboard
- Ensure token has write permissions

### Applitools fails with "API key not found"
- Verify `APPLITOOLS_API_KEY` is set
- Check key is valid in Applitools dashboard
- Ensure account is active

### Lighthouse CI fails
- Check `LHCI_GITHUB_TOKEN` permissions
- Verify server is running before Lighthouse runs
- Check `lighthouserc.json` configuration
