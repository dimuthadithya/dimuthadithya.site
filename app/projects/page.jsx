'use client';

import Link from 'next/link';
import * as motion from 'motion/react-client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TextAnimate } from '@/components/ui/text-animate';
import { NumberTicker } from '@/components/ui/number-ticker';
import {
  ArrowLeft, ArrowUpRight, Star, GitFork,
  Globe, Code, Envelope,
} from '@phosphor-icons/react';
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

// ─── Scroll-animated section wrapper ─────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ repo, index }) {
  const topLang   = getTopLanguage(repo.languages);
  const langColor = LANG_COLORS[topLang] || '#555';

  return (
    <motion.a
      href={repo.html_url}
      target='_blank'
      rel='noopener noreferrer'
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -4 }}
      className='group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-600 hover:bg-neutral-900 transition-colors duration-300 overflow-hidden'
    >
      {/* Screenshot / placeholder */}
      {repo.card_image ? (
        <div className='relative w-full h-44 overflow-hidden border-b border-neutral-800'>
          <img
            src={repo.card_image}
            alt={repo.name}
            className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
            loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent' />
          <div className='absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            <ArrowUpRight size={13} className='text-white' />
          </div>
        </div>
      ) : (
        <div className='relative w-full h-28 border-b border-neutral-800 bg-neutral-950 flex items-center justify-center'>
          <Code size={28} className='text-neutral-800' />
          <div className='absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            <ArrowUpRight size={13} className='text-white' />
          </div>
        </div>
      )}

      {/* Body */}
      <div className='flex flex-col gap-2.5 p-4 flex-1'>
        <div className='flex items-center justify-between gap-2'>
          <h2 className='text-white font-semibold text-sm leading-snug truncate'>
            {repo.name}
          </h2>
          {repo.is_fork && (
            <span className='shrink-0 text-[10px] font-inconsolata px-1.5 py-0.5 rounded border border-neutral-800 text-neutral-600'>
              fork
            </span>
          )}
        </div>

        {repo.description && (
          <p className='text-neutral-500 text-xs leading-relaxed line-clamp-2 font-inconsolata'>
            {repo.description}
          </p>
        )}

        {repo.topics?.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-1'>
            {repo.topics
              .filter(t => !['project', 'showcase', 'portfolio'].includes(t))
              .slice(0, 5)
              .map(tag => (
                <span
                  key={tag}
                  className='text-[10px] font-inconsolata px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-600'
                >
                  {tag}
                </span>
              ))}
          </div>
        )}

        {/* Meta footer */}
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
              onClick={e => { e.preventDefault(); window.open(repo.homepage, '_blank'); }}
              className='ml-auto flex items-center gap-1 hover:text-white transition-colors'
            >
              <Globe size={11} /> Live
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

// ─── Stat pill ────────────────────────────────────────────────────────────────
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const { repos = [], stats, profile } = githubData;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOp  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className='min-h-screen bg-neutral-950 text-white font-playfair-display'>

      {/* ── Sticky top bar ──────────────────────────────────────────────── */}
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

      {/* ── Parallax hero ───────────────────────────────────────────────── */}
      <section ref={heroRef} className='relative min-h-[55vh] flex items-end border-b border-neutral-800 overflow-hidden'>
        {/* Radial glow */}
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.04),transparent)] pointer-events-none' />

        <motion.div
          style={{ y: heroY, opacity: heroOp }}
          className='relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 pt-24 w-full'
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='font-inconsolata text-xs text-neutral-600 uppercase tracking-widest mb-5'
          >
            Open Source · {repos.length} projects
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

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className='flex flex-wrap gap-2'
          >
            <StatPill value={repos.length}      label='projects'  />
            <StatPill value={stats.total_stars} label='stars'     />
            <StatPill value={stats.total_forks} label='forks'     />
            <StatPill value={stats.followers}   label='followers' />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Projects grid ───────────────────────────────────────────────── */}
      <section className='max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {repos.map((repo, i) => (
            <ProjectCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>
      </section>

      {/* ── Project idea CTA ────────────────────────────────────────────── */}
      <section className='border-t border-neutral-800 bg-neutral-900/30'>
        <div className='max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-24 text-center'>
          <FadeUp>
            <p className='font-inconsolata text-xs text-neutral-600 uppercase tracking-widest mb-4'>
              Got a project idea?
            </p>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-6'>
              Let&apos;s build it together.
            </h2>
            <p className='text-neutral-500 text-sm font-inconsolata max-w-md mx-auto mb-10 leading-relaxed'>
              Whether it&apos;s a side project, a startup idea, or something you&apos;ve been sitting on — drop me an email and let&apos;s figure it out.
            </p>
            <motion.a
              href='mailto:dimuthadithya01@gmail.com'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className='inline-flex items-center gap-3 font-inconsolata text-sm bg-white text-black px-7 py-3 rounded-full hover:bg-neutral-100 transition-colors duration-200'
            >
              <Envelope size={16} weight='bold' />
              dimuthadithya01@gmail.com
            </motion.a>
          </FadeUp>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className='border-t border-neutral-800'>
        <div className='max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-inconsolata text-xs text-neutral-700'>
          <span>© {new Date().getFullYear()} Dimuth Adithya. All rights reserved.</span>
          <span>
            Data cached{' '}
            {new Date(stats.updated_at).toLocaleDateString('en-US', {
              month: 'short', day: 'numeric', year: 'numeric',
            })}{' '}
            · auto-refreshes daily via GitHub Actions
          </span>
          <div className='flex items-center gap-4'>
            <Link href='/' className='hover:text-white transition-colors'>Home</Link>
            <Link
              href={profile.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors flex items-center gap-1'
            >
              GitHub <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
