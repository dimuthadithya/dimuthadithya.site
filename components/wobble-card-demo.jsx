'use client';

import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import { ArrowUpRight } from '@phosphor-icons/react';

const projects = [
  {
    title: 'YTPlayer Tracker',
    description:
      'Track YouTube learning, organize playlists as courses, and manage your progress with a dashboard and Chrome Extension.',
    video: '/videos/projects/ytcoursetracker.webm',
    color: 'from-pink-900/80 to-pink-950',
    accent: 'bg-pink-500',
  },
  {
    title: 'Tinaya Store',
    description:
      'A seamless e-commerce experience with modern design and fast performance.',
    video: '/videos/projects/tinayastore.webm',
    color: 'from-indigo-900/80 to-indigo-950',
    accent: 'bg-indigo-500',
  },
  {
    title: 'Busy Books',
    description:
      'Discover, read, and manage your favorite books effortlessly with Busy Books, your smart online library companion.',
    video: '/videos/projects/busybook.webm',
    color: 'from-blue-900/80 to-blue-950',
    accent: 'bg-blue-500',
  },
];

/* ─── Mobile swipe carousel ─────────────────────────────────────── */
function MobileProjectCard({ project }) {
  return (
    <div className='shrink-0 w-[78vw] max-w-[320px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex flex-col'>
      {/* Video preview */}
      <div className='relative w-full aspect-video bg-neutral-800 overflow-hidden'>
        <video
          src={project.video}
          className='w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        />
        {/* gradient overlay */}
        <div className={`absolute inset-0 bg-linear-to-t ${project.color} opacity-40 pointer-events-none`} />
      </div>

      {/* Text */}
      <div className='p-4 flex flex-col gap-2 flex-1'>
        <div className='flex items-start justify-between gap-2'>
          <h3 className='text-white font-semibold text-sm leading-snug'>
            {project.title}
          </h3>
          <span className={`shrink-0 mt-0.5 h-2 w-2 rounded-full ${project.accent}`} />
        </div>
        <p className='text-neutral-400 text-xs leading-relaxed'>
          {project.description}
        </p>
        <button className='mt-auto self-start flex items-center gap-1 text-xs text-neutral-300 hover:text-white transition-colors pt-2'>
          View project <ArrowUpRight size={12} />
        </button>
      </div>
    </div>
  );
}

/* ─── Desktop WobbleCard grid ────────────────────────────────────── */
function DesktopGrid() {
  return (
    <div className='hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
      <WobbleCard
        containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px]'
        className=''
      >
        <div className='max-w-xs'>
          <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Track Your YouTube Learning Journey with YTPlayer Tracker
          </h2>
          <p className='mt-4 text-left text-base/6 text-neutral-200 max-w-[80%]'>
            Track YouTube learning, organize playlists as courses, and manage
            your progress with YTPLAYTracker&apos;s dashboard and Chrome Extension.
          </p>
        </div>
        <video
          src='/videos/projects/ytcoursetracker.webm'
          width={450}
          height={600}
          alt='YTPlayer Tracker demo'
          className='absolute -right-10 md:-right-[40%] lg:-right-[33%] -bottom-2 object-contain rounded-2xl'
          autoPlay
          loop
          muted
          playsInline
        />
      </WobbleCard>

      <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
        <video
          src='/videos/projects/tinayastore.webm'
          width={450}
          height={100}
          alt='Tinaya Store demo'
          className='absolute right-[0%] -bottom-2 object-contain rounded-2xl'
          autoPlay
          loop
          muted
          playsInline
        />
      </WobbleCard>

      <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-blue-900 min-h-[600px] xl:min-h-[300px]'>
        <div className='max-w-sm'>
          <h2 className='max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Busy Books: Your Ultimate Digital Library
          </h2>
          <p className='mt-4 max-w-104 text-left text-base/6 text-neutral-200'>
            Discover, read, and manage your favorite books effortlessly with
            Busy Books, your smart online library companion.
          </p>
        </div>
        <video
          src='/videos/projects/busybook.webm'
          width={500}
          height={500}
          alt='Busy Books demo'
          className='absolute -right-10 md:-right-[40%] lg:-right-[8%] -bottom-3 object-contain rounded-2xl'
          autoPlay
          loop
          muted
          playsInline
        />
      </WobbleCard>
    </div>
  );
}

/* ─── Exported component ─────────────────────────────────────────── */
export default function WobbleCardDemo() {
  return (
    <>
      {/* Mobile: horizontal swipe carousel */}
      <div className='sm:hidden'>
        <div className='flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4'>
          {projects.map((project) => (
            <div key={project.title} className='snap-start'>
              <MobileProjectCard project={project} />
            </div>
          ))}
        </div>
        {/* Swipe hint */}
        <p className='text-center text-xs text-neutral-600 mt-1 font-inconsolata'>
          swipe to explore →
        </p>
      </div>

      {/* Desktop: WobbleCard grid */}
      <DesktopGrid />
    </>
  );
}
