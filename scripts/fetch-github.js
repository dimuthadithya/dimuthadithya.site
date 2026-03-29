/**
 * fetch-github.js
 * ──────────────────────────────────────────────────────────────────────────
 * Fetches GitHub profile + filtered repos and writes the result to
 * ./data/github-data.json so the Next.js app can consume it statically.
 *
 * Configuration (via .env or shell environment):
 *   GITHUB_TOKEN              – Personal access token (optional but avoids rate limits)
 *   GITHUB_USERNAME           – Your GitHub username  (e.g. dimuthadithya)
 *   GITHUB_PROJECT_TAGS       – Comma-separated topic tags to filter repos by
 *                               (e.g. "portfolio,project,showcase")
 *                               A repo is included if it has ANY of these tags.
 *
 * Usage:
 *   node scripts/fetch-github.js
 *   # or via npm script:
 *   npm run fetch-github
 */

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');

// ─── Config ──────────────────────────────────────────────────────────────────

// Support loading from .env without requiring dotenv as a dep
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .forEach((line) => {
      const [key, ...rest] = line.split('=');
      if (key && rest.length && !process.env[key.trim()]) {
        process.env[key.trim()] = rest.join('=').trim();
      }
    });
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.GITHUB_USERNAME || 'dimuthadithya';
const PROJECT_TAGS = (process.env.GITHUB_PROJECT_TAGS || 'portfolio,project')
  .split(',')
  .map((t) => t.trim().toLowerCase())
  .filter(Boolean);

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'github-data.json');

console.log(`\n🔍  GitHub username : ${USERNAME}`);
console.log(`🏷️   Filter tags     : ${PROJECT_TAGS.join(', ')}`);
console.log(`💾  Output          : ${OUTPUT_PATH}\n`);

// ─── HTTP helpers ─────────────────────────────────────────────────────────────

const BASE_HEADERS = {
  'User-Agent': 'Node.js/fetch-github-script',
  Accept: 'application/vnd.github.mercy-preview+json',
  ...(GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {}),
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: BASE_HEADERS }, (res) => {
        if (res.statusCode === 403) {
          reject(new Error(`Rate limited (403) fetching ${url}. Set GITHUB_TOKEN to increase limits.`));
          return;
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(`Failed to parse JSON from ${url}`));
          }
        });
      })
      .on('error', reject);
  });
}

function fetchRaw(url) {
  return new Promise((resolve) => {
    https
      .get(url, { headers: { 'User-Agent': 'Node.js/fetch-github-script' } }, (res) => {
        if (res.statusCode !== 200) { resolve(null); return; }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', () => resolve(null));
  });
}

// ─── Markdown image extractor ─────────────────────────────────────────────────

function extractImagesFromMarkdown(markdown, repoName) {
  if (!markdown) return [];
  const imageRegex = /!\[.*?\]\((.*?)\)/g;
  return [...markdown.matchAll(imageRegex)]
    .map((m) => {
      let url = m[1];
      if (!url.startsWith('http')) {
        url = `https://raw.githubusercontent.com/${USERNAME}/${repoName}/main/${url.replace(/^\//, '')}`;
      } else if (url.includes('github.com') && !url.includes('raw.githubusercontent.com')) {
        url = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
      }
      return url;
    })
    .filter(Boolean);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // 1. Profile
  console.log('👤  Fetching profile…');
  const profile = await fetchJson(`https://api.github.com/users/${USERNAME}`);

  // 2. All repos (up to 100)
  console.log('📦  Fetching repos…');
  const allRepos = await fetchJson(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`
  );

  if (!Array.isArray(allRepos)) {
    console.error('❌  Unexpected response:', allRepos);
    process.exit(1);
  }

  console.log(`     Found ${allRepos.length} total repos. Filtering by tags: [${PROJECT_TAGS.join(', ')}]…\n`);

  // 3. Filter + enrich each repo
  const enriched = await Promise.all(
    allRepos.map(async (repo) => {
      // Fetch topics
      const topicsData = await fetchJson(
        `https://api.github.com/repos/${USERNAME}/${repo.name}/topics`
      ).catch(() => ({ names: [] }));

      const topics = topicsData.names || [];
      const hasMatchingTag = PROJECT_TAGS.some((tag) => topics.includes(tag));

      if (!hasMatchingTag) return null;

      console.log(`  ✅  ${repo.name}  [${topics.join(', ')}]`);

      // Languages
      const languages = await fetchJson(repo.languages_url).catch(() => ({}));

      // README images
      const readmeUrl = `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/main/README.md`;
      const readme = await fetchRaw(readmeUrl);
      const images = extractImagesFromMarkdown(readme, repo.name);

      if (images.length) {
        console.log(`       📷  ${images.length} image(s) found in README`);
      }

      return {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics,
        languages,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        watchers_count: repo.watchers_count,
        open_issues_count: repo.open_issues_count,
        size: repo.size,
        default_branch: repo.default_branch,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
        is_fork: repo.fork,
        archived: repo.archived,
        card_image: images[0] || null,
        readme_images: images,
      };
    })
  );

  const repos = enriched.filter(Boolean);

  // 4. Aggregate stats
  const stats = {
    total_repos: repos.length,
    total_stars: repos.reduce((s, r) => s + r.stargazers_count, 0),
    total_forks: repos.reduce((s, r) => s + r.forks_count, 0),
    public_repos: profile.public_repos,
    followers: profile.followers,
    following: profile.following,
    updated_at: new Date().toISOString(),
  };

  const output = { profile, repos, stats };

  // 5. Write output
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));

  console.log(`\n✅  Done!`);
  console.log(`   Repos saved  : ${repos.length}`);
  console.log(`   Total stars  : ${stats.total_stars}`);
  console.log(`   Total forks  : ${stats.total_forks}`);
  console.log(`   Output       : ${OUTPUT_PATH}\n`);
}

main().catch((err) => {
  console.error('\n❌  Fatal error:', err.message);
  process.exit(1);
});
