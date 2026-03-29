'use client';

import { ArrowDownLeft } from '@phosphor-icons/react';

/**
 * Reusable "what's next" hint link shown at the bottom of each section.
 * Hidden on mobile, visible from sm breakpoint upward.
 *
 * @param {string} label  – e.g. "work experience"
 * @param {string} [href] – optional anchor href
 */
export default function SectionNextLink({ label, href = '#' }) {
  return (
    <div className='hidden sm:flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-red-600 duration-200 cursor-pointer mb-2 capitalize font-inconsolata mt-10 text-sm w-full'>
      <a href={href} className='flex items-center gap-1'>
        <span className='me-1'>{label}</span>
        <ArrowDownLeft />
      </a>
    </div>
  );
}
