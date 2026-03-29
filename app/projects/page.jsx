'use client';

import Link from 'next/link';
import * as motion from 'motion/react-client';
import { TextAnimate } from '@/components/ui/text-animate';
import { NumberTicker } from '@/components/ui/number-ticker';
import { ArrowLeft, ArrowUpRight, Star, GitFork, Globe, Code } from '@phosphor-icons/react';
import githubData from '@/data/github-data.json';

// ─── Language colour map ──────────────────────────────────────────────────────
const LANG_COLORS = {
  JavaScript: '#f7df1e', TypeScript: '#3178c6', PHP:    '#777bb4',
  Python:     '#3776ab', HTML:       '#e34f26', CSS:    '#264de4',
  SCSS:       '#c6538c', Blade:      '#f05340', Vue:    '#42b883',
  Java:       '#007396', Dart:       '#0175c2', Ruby:   '#cc342d',
  Go:         '#00add8', Rust:       '#dea584', Hack:   '#878787',
};

function getTopLanguage(languages) {
  if (!languages || !Object.keys(languages).length) return null;
  return Object.entries(languages).sort(([, a], [, b]) => b - a)[0][0];
}

function ProjectCard({ repo, index }) {
  const topLang   = getTopLanguage(repo.languages);
  const langColor = LANG_COLORS[topLang] || '#555';

  return (
    <motion.a
      href={repo.html_url}
      target='_blank'
      rel='noopener noreferrer'
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
      className='group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300 overflow-hidden'
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {/* Screenshot */}
      {repo.card_image ? (
        <div className='relative w-full h-44 overflow-hidden border-b border-neutral-800'>
          <img
            src={repo.card_image}
            alt={repo.name}
            className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
            loading='lazy'
          />
          {/* Gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent' />
          {/* Arrow indicator */}
          <div className='absolute top-3 right-3 w-7 h-7 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            <ArrowUpRight size={14} className='text-white' />
          </div>
        </div>
      ) : (
        /* Placeholder if no image */
        <div className='relative w-full h-28 border-b border-neutral-800 bg-neutral-950 flex items-center justify-center'>
          <Code size={32} className='text-neutral-800' />
          <div className='absolute top-3 right-3 w-7 h-7 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            <ArrowUpRight size={14} className='text-white' />
          </div>
        </div>
      )}

      {/* Content */}
      <div className='flex flex-col gap-2.5 p-4 flex-1'>
        {/* Title */}
        <div className='flex items-center justify-between gap-2'>
          <h2 className='text-white font-semibold text-sm leading-snug group-hover:text-neutral-200 transition-colors truncate'>
            {repo.name}
          </h2>
          {repo.is_fork && (
            <span className='shrink-0 text-[10px] font-inconsolata px-1.5 py-0.5 rounded border border-neutral-800 text-neutral-600'>
              fork
            </span>
          )}
        </div>

        {/* Description */}
        {repo.description && (
          <p className='text-neutral-500 text-xs leading-relaxed line-clamp-2 font-inconsolata'>
            {repo.description}
          </p>
        )}

        {/* Tags */}
        {repo.topics?.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-auto'>
            {repo.topics.filter(t => t !== 'project' && t !== 'showcase' && t !== 'portfolio').slice(0, 5).map(tag => (
              <span
                key={tag}
                className='text-[10px] font-inconsolata px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-500'
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer meta */}
        <div className='flex items-center gap-3 pt-3 mt-auto border-t border-neutral-800/60 text-[11px] font-inconsolata text-neutral-600'>
          {topLang && (
            <span className='flex items-center gap-1.5'>
              <span className='w-2 h-2 rounded-full' style={{ backgroundColor: langColor }} />
              {topLang}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className='flex items-center gap-1'><Star size={11} /> {repo.stargazers_count}</span>
          )}
          {repo.forks_count > 0 && (
            <span className='flex items-center gap-1'><GitFork size={11} /> {repo.forks_count}</span>
          )}
          {repo.homepage && (
            <span
              onClick={(e) => { e.preventDefault(); window.open(repo.homepage, '_blank'); }}
              className='ml-auto flex items-center gap-1 hover:text-white transition-colors cursor-pointer'
            >
              <Globe size={11} /> Live
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

function StatPill({ label, value }) {
  return (
    <div className='flex items-center gap-2 font-inconsolata text-sm text-neutral-500 border border-neutral-800 rounded-full px-4 py-1.5 bg-neutral-950'>
      <span className='text-white font-semibold tabular-nums'>
        <NumberTicker value={value} className='text-white' />
      </span>
      {label}
    </div>
  );
}

export default function ProjectsPage() {
  const { repos = [], stats, profile } = githubData;

  return (
    <main className='min-h-screen bg-neutral-950 text-white font-playfair-display'>

      {/* Top bar */}
      <div className='sticky top-0 z-40 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md'>
        <div className='max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-3 flex items-center justify-between'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-xs font-inconsolata text-neutral-500 hover:text-white transition-colors group'
          >
            <ArrowLeft size={13} className='group-hover:-translate-x-0.5 transition-transform' />
            dimuthadithya.site
          </Link>
          <Link
            href={profile.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs font-inconsolata text-neutral-600 hover:text-white transition-colors flex items-center gap-1'
          >
            @{profile.login} <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16'>

        {/* Hero header */}
        <div className='mb-12'>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='font-inconsolata text-xs text-neutral-600 uppercase tracking-widest mb-4'
          >
            Open Source Work
          </motion.p>

          <TextAnimate
            animation='blurIn'
            by='word'
            as='h1'
            once
            className='text-5xl sm:text-6xl lg:text-7xl capitalize leading-tight mb-8'
          >
            all projects
          </TextAnimate>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex flex-wrap gap-2'
          >
            <StatPill value={repos.length}        label='projects' />
            <StatPill value={stats.total_stars}   label='stars'    />
            <StatPill value={stats.total_forks}   label='forks'    />
            <StatPill value={stats.followers}     label='followers' />
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-neutral-800 mb-10' />

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {repos.map((repo, i) => (
            <ProjectCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-neutral-700 text-xs font-inconsolata mt-16 pb-8'
        >
          Cached {new Date(stats.updated_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · auto-refreshes daily via GitHub Actions
        </motion.p>
      </div>
    </main>
  );
}
