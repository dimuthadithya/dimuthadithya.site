'use client';

import Link from 'next/link';
import * as motion from 'motion/react-client';
import { NumberTicker } from '@/components/ui/number-ticker';
import SectionHeading from '@/components/sections/SectionHeading';
import SectionNextLink from '@/components/sections/SectionNextLink';
import { Star, GitFork, ArrowUpRight, Users, Code, MapPin, Link as LinkIcon } from '@phosphor-icons/react';

function StatCard({ icon: Icon, label, value, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className='flex flex-col gap-2 p-6 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-600 transition-colors duration-300'
    >
      <div className='flex items-center gap-2 text-neutral-400 text-sm font-inconsolata'>
        <Icon size={16} weight='duotone' />
        {label}
      </div>
      <span className='text-4xl font-bold text-white'>
        <NumberTicker value={value} className='text-white' />
      </span>
    </motion.div>
  );
}

function LiveBadge({ updatedAt }) {
  const date = new Date(updatedAt);
  const formatted = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <span className='inline-flex items-center gap-2 text-xs font-inconsolata text-neutral-400 border border-neutral-800 rounded-full px-3 py-1 bg-neutral-950'>
      {/* Pulsing dot */}
      <span className='relative flex h-2 w-2'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
        <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500' />
      </span>
      Live · updated {formatted}
    </span>
  );
}

export default function GitHubStatsSection({ data }) {
  if (!data) return null;

  const { profile, stats } = data;

  return (
    <div id='github' className='py-4'>
      {/* Heading + live badge */}
      <div className='flex flex-wrap items-end gap-4 mb-2'>
        <SectionHeading highlightedWord='github' restText='activity' className='my-0' />
      </div>
      <div className='mb-10'>
        <LiveBadge updatedAt={stats.updated_at} />
      </div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 p-5 rounded-2xl border border-neutral-800 bg-neutral-950'
      >
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className='w-14 h-14 rounded-full border border-neutral-700 shrink-0'
        />
        <div className='flex flex-col gap-1 flex-1 min-w-0'>
          <span className='text-white font-semibold'>{profile.name}</span>
          <span className='text-neutral-500 text-xs font-inconsolata'>{profile.bio}</span>
          <div className='flex flex-wrap gap-3 mt-1 text-neutral-600 text-xs font-inconsolata'>
            {profile.location && (
              <span className='flex items-center gap-1'>
                <MapPin size={11} /> {profile.location}
              </span>
            )}
            {profile.blog && (
              <span className='flex items-center gap-1'>
                <LinkIcon size={11} /> {profile.blog.replace(/^https?:\/\//, '')}
              </span>
            )}
            {profile.company && (
              <span className='text-neutral-600'>@ {profile.company}</span>
            )}
          </div>
        </div>
        <Link
          href={profile.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='shrink-0 text-xs font-inconsolata text-neutral-400 hover:text-white flex items-center gap-1 transition-colors border border-neutral-800 hover:border-neutral-600 rounded-full px-3 py-1'
        >
          @{profile.login} <ArrowUpRight size={13} />
        </Link>
      </motion.div>

      {/* Stats grid */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <StatCard icon={Code}    label='Projects'    value={stats.total_repos}   delay={0}    />
        <StatCard icon={Star}    label='Total Stars'  value={stats.total_stars}   delay={0.05} />
        <StatCard icon={GitFork} label='Total Forks'  value={stats.total_forks}   delay={0.1}  />
        <StatCard icon={Users}   label='Followers'    value={stats.followers}     delay={0.15} />
      </div>

      {/* View all projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className='mt-6 flex justify-end'
      >
        <Link
          href='/projects'
          className='inline-flex items-center gap-2 font-inconsolata text-sm text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 rounded-full px-5 py-2 transition-all duration-200 group'
        >
          View all {stats.total_repos} projects
          <ArrowUpRight size={14} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
        </Link>
      </motion.div>

      <SectionNextLink label='education' href='#education' />
    </div>
  );
}

