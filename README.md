# dimuthadithya.site

Personal portfolio website for **Dimuth Adithya** — full-stack developer, Chrome extension builder, and online instructor at [Coderoom](https://coderoomlk.online).

Built with **Next.js 16**, **Framer Motion**, **TailwindCSS v4**, and deployed on **Vercel**. GitHub repository data is automatically fetched and cached via a scheduled GitHub Actions workflow.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | TailwindCSS v4 |
| Animations | Framer Motion / Motion |
| Icons | Phosphor Icons |
| UI Primitives | Radix UI / shadcn |
| Deployment | Vercel |
| CI / Data sync | GitHub Actions |

---

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/dimuthadithya/dimuthadithya.site.git
cd dimuthadithya.site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

See [Environment Variables](#environment-variables) below for a full description of each key.

### 4. Fetch GitHub data (optional — needed for project cards & stats)

```bash
npm run fetch-github
```

This runs `scripts/fetch-github.js` and writes cached data to `data/github-data.json`.

### 5. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

All variables are defined in `.env` (local) and must also be configured in **Vercel** and **GitHub Secrets** for production and CI.

### `.env` reference

```env
# ─── Public (exposed to the browser) ─────────────────────────────────────────

# Your deployed site URL (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://dimuthadithya.site

# Your GitHub profile URL
NEXT_PUBLIC_GITHUB_URL=https://github.com/dimuthadithya

# Your LinkedIn profile URL
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/dimuth-adithya/

# Skill icon strip URL (used in the stack section)
NEXT_PUBLIC_ICON_URL=https://skillicons.dev/icons?i=github,linkedin,twitter

# ─── Server-only (GitHub data fetcher) ────────────────────────────────────────

# GitHub Personal Access Token (needs repo read scope)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Your GitHub username
GITHUB_USERNAME=dimuthadithya

# Comma-separated repo topic tags — repos tagged with ANY of these are included
GITHUB_PROJECT_TAGS=project
```

---

## GitHub Secrets Setup

The GitHub Actions workflow (`update-github-cache.yml`) needs access to a few secrets. Go to:

**Repository → Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Description | Required |
|---|---|---|
| `GITHUB_TOKEN` | Auto-provided by GitHub Actions — **no setup needed** | ✅ Auto |
| `GITHUB_USERNAME` | Your GitHub username (e.g. `dimuthadithya`) | Optional — falls back to hardcoded value |
| `GITHUB_PROJECT_TAGS` | Comma-separated topic tags to filter repos (e.g. `project`) | Optional — falls back to `portfolio,project,showcase` |

> **Note:** `GITHUB_TOKEN` is automatically injected by GitHub Actions with the correct `contents: write` permission. You do **not** need to create it manually.

---

## Vercel Environment Variables Setup

Go to your Vercel project dashboard:

**Project → Settings → Environment Variables**

Add the following variables. Set them for **Production**, **Preview**, and **Development** environments as needed.

| Variable Name | Example Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://dimuthadithya.site` | Production |
| `NEXT_PUBLIC_GITHUB_URL` | `https://github.com/dimuthadithya` | All |
| `NEXT_PUBLIC_LINKEDIN_URL` | `https://www.linkedin.com/in/dimuth-adithya/` | All |
| `NEXT_PUBLIC_ICON_URL` | `https://skillicons.dev/icons?i=...` | All |
| `GITHUB_TOKEN` | `ghp_xxxxxxxxxxxx` | All (for manual builds that need to fetch data) |
| `GITHUB_USERNAME` | `dimuthadithya` | All |
| `GITHUB_PROJECT_TAGS` | `project` | All |

> **Tip:** Variables prefixed with `NEXT_PUBLIC_` are bundled into the client-side JavaScript. Never put secrets in `NEXT_PUBLIC_` variables.

---

## GitHub Actions — Automatic Data Sync

The workflow at `.github/workflows/update-github-cache.yml` runs **every day at midnight UTC** and on manual trigger.

### What it does

1. Checks out the repository
2. Installs Node.js dependencies
3. Runs `npm run fetch-github` — calls the GitHub API and writes updated data to `data/github-data.json`
4. Commits and pushes the updated JSON file back to the repo (triggering a Vercel redeploy with fresh data)

### Manual trigger

You can run it anytime from:

**Repository → Actions → Update GitHub Cache → Run workflow**

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server locally |
| `npm run lint` | Lint the codebase with ESLint |
| `npm run fetch-github` | Fetch & cache GitHub repository data |

---

## Project Structure

```
dimuthadithya.site/
├── app/                    # Next.js App Router pages
│   ├── page.js             # Home page
│   ├── layout.js           # Root layout & fonts
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page section components
│   │   ├── HeroSection.jsx
│   │   ├── SelectedWorksSection.jsx
│   │   ├── WorkExperienceSection.jsx
│   │   ├── TeachingSection.jsx
│   │   ├── MyStackSection.jsx
│   │   ├── GitHubStatsSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── ui/                 # Reusable UI primitives
│   └── Navigation.jsx      # Top navigation bar
├── data/
│   └── github-data.json    # Auto-generated GitHub cache (do not edit manually)
├── scripts/
│   └── fetch-github.js     # GitHub data fetching script
├── public/                 # Static assets (images, fonts)
├── .env                    # Local environment variables (gitignored)
├── .env.example            # Template for environment variables
└── .github/
    └── workflows/
        └── update-github-cache.yml   # Scheduled GitHub data sync
```

---

## Deployment

This site is deployed on **Vercel** with automatic deployments on every push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dimuthadithya/dimuthadithya.site)

---

## License

This project is for personal use. Feel free to use it as inspiration, but please don't copy it directly.
