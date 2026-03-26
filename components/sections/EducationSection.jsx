'use client';

import * as motion from 'motion/react-client';
import SectionHeading from '@/components/sections/SectionHeading';
import SectionNextLink from '@/components/sections/SectionNextLink';

// ─── Data ─────────────────────────────────────────────────────────────────────

const HND_SEMESTERS = [
  { sem: 1, gpa: null, subjects: null },
  { sem: 2, gpa: null, subjects: null },
  { sem: 3, gpa: null, subjects: null },
  { sem: 4, gpa: null, subjects: null },
];

const AL_GRADES = [
  {
    grade: 'A',
    label: '1 A pass',
    color: 'text-green-400',
    border: 'border-green-900',
    bg: 'bg-green-950/40',
  },
  {
    grade: 'B',
    label: '2 B passes',
    color: 'text-blue-400',
    border: 'border-blue-900',
    bg: 'bg-blue-950/40',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * "My Education" section with HND and GCE A/L cards.
 */
export default function EducationSection() {
  return (
    <div id='education'>
      <SectionHeading highlightedWord='my' restText='Education' />

      {/* HND Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        className='mb-12 border border-neutral-800 rounded-2xl p-4 sm:p-8 bg-neutral-950'
      >
        <div className='flex items-start justify-between mb-6 flex-wrap gap-4'>
          <div>
            <span className='text-xs font-inconsolata text-orange-400 tracking-widest uppercase mb-2 block'>
              Higher National Diploma
            </span>
            <h2 className='text-3xl font-playfair-display text-white mb-1'>
              HND in Computing
            </h2>
            <p className='text-neutral-400 font-inconsolata text-sm'>
              Completed · 2025
            </p>
          </div>
          <div className='flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-full px-4 py-2'>
            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
            <span className='text-green-400 font-inconsolata text-sm'>Completed</span>
          </div>
        </div>

        {/* Semesters Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {HND_SEMESTERS.map((s, i) => (
            <motion.div
              key={s.sem}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className='border border-neutral-800 rounded-xl p-5 bg-neutral-900/50 hover:border-neutral-600 transition-colors duration-200'
            >
              <div className='flex items-center justify-between mb-3'>
                <span className='text-neutral-300 font-inconsolata text-sm tracking-wider uppercase'>
                  Semester {s.sem}
                </span>
                <span className='font-inconsolata text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400'>
                  {s.gpa ? `GPA ${s.gpa}` : 'GPA — coming soon'}
                </span>
              </div>
              <div className='min-h-10 flex items-center'>
                {s.subjects ? (
                  <ul className='text-neutral-400 text-sm font-inconsolata space-y-1'>
                    {s.subjects.map((sub) => (
                      <li key={sub} className='flex items-center gap-2'>
                        <span className='w-1 h-1 rounded-full bg-orange-400' />
                        {sub}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-neutral-600 text-sm font-inconsolata italic'>
                    Subjects · coming soon
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GCE A/L Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className='mb-12 border border-neutral-800 rounded-2xl p-4 sm:p-8 bg-neutral-950'
      >
        <div className='flex items-start justify-between mb-6 flex-wrap gap-4'>
          <div>
            <span className='text-xs font-inconsolata text-orange-400 tracking-widest uppercase mb-2 block'>
              GCE Advanced Level
            </span>
            <h2 className='text-3xl font-playfair-display text-white mb-1'>
              Commerce Stream
            </h2>
            <p className='text-neutral-400 font-inconsolata text-sm'>
              Completed · 2020
            </p>
          </div>
          <div className='flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-full px-4 py-2'>
            <span className='w-2 h-2 rounded-full bg-blue-400' />
            <span className='text-blue-400 font-inconsolata text-sm'>2020</span>
          </div>
        </div>

        <div className='flex flex-wrap gap-4'>
          {AL_GRADES.map((item) => (
            <motion.div
              key={item.grade}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${item.border} ${item.bg}`}
            >
              <span className={`text-4xl font-bold font-playfair-display ${item.color}`}>
                {item.grade}
              </span>
              <span className={`font-inconsolata text-sm ${item.color} opacity-80`}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <SectionNextLink label="Let's talk" href='#contact' />
    </div>
  );
}
