'use client';

import * as motion from 'motion/react-client';
import { LinkPreview } from '@/components/ui/link-preview';
import SectionHeading from '@/components/sections/SectionHeading';
import SectionNextLink from '@/components/sections/SectionNextLink';
import {
  Chalkboard,
  Student,
  Certificate,
  Users,
  MonitorPlay,
  Code,
} from '@phosphor-icons/react';

const HIGHLIGHTS = [
  {
    icon: MonitorPlay,
    label: 'Live Online Classes',
    desc: 'Interactive sessions covering full-stack web development from fundamentals to deployment.',
  },
  {
    icon: Code,
    label: 'Hands-on Projects',
    desc: 'Students build real-world projects — web apps, APIs, and tools — during the course.',
  },
  {
    icon: Users,
    label: 'Community of Learners',
    desc: 'A growing community of learners supported with Q&A, code reviews, and mentorship.',
  },
  {
    icon: Certificate,
    label: 'Structured Curriculum',
    desc: 'A well-structured curriculum designed to take beginners to job-ready developers.',
  },
];

/**
 * "Teaching" section — highlights online teaching at Coderoom.
 */
export default function TeachingSection() {
  return (
    <div id='teaching'>
      <SectionHeading highlightedWord='teaching' restText='& mentoring' />

      {/* Intro card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        className='mb-8 border border-neutral-800 rounded-2xl p-4 sm:p-8 bg-neutral-950'
      >
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6'>
          <div>
            <span className='text-xs font-inconsolata text-orange-400 tracking-widest uppercase mb-2 block'>
              Online Instructor
            </span>
            <h2 className='text-2xl sm:text-3xl font-playfair-display text-white mb-1'>
              Teaching at{' '}
              <LinkPreview
                url='https://coderoomlk.online'
                className='text-orange-400 hover:text-orange-300 transition-colors duration-200 underline underline-offset-4 decoration-orange-700'
              >
                Coderoom
              </LinkPreview>
            </h2>
            <p className='text-neutral-400 font-inconsolata text-sm'>
              coderoomlk.online · Ongoing
            </p>
          </div>

          {/* Badge */}
          <div className='flex items-center gap-2 bg-orange-950/40 border border-orange-800 rounded-full px-4 py-2 shrink-0'>
            <Chalkboard size={16} className='text-orange-400' />
            <span className='text-orange-400 font-inconsolata text-sm font-semibold'>
              Instructor
            </span>
          </div>
        </div>

        <div className='text-neutral-300 text-sm sm:text-base font-inconsolata mb-8 leading-relaxed'>
          Beyond writing code, I run online programming classes at{' '}
          <LinkPreview
            url='https://coderoomlk.online'
            className='text-orange-400 hover:text-orange-300 transition-colors duration-200'
          >
            Coderoom
          </LinkPreview>{' '}
          — a platform I use to mentor students who want to break into full-stack
          web development. From complete beginners to those looking to level up,
          I guide learners through structured, project-based courses covering
          modern technologies like React, Node.js, and more.
        </div>

        {/* Highlights grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className='flex gap-4 border border-neutral-800 rounded-xl p-4 bg-neutral-900/50 hover:border-neutral-600 transition-colors duration-200'
            >
              <div className='shrink-0 mt-0.5'>
                <item.icon size={22} className='text-orange-400' />
              </div>
              <div>
                <p className='text-white font-inconsolata text-sm font-semibold mb-1'>
                  {item.label}
                </p>
                <p className='text-neutral-400 font-inconsolata text-xs leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <SectionNextLink label='my stack' href='#stack' />
    </div>
  );
}
