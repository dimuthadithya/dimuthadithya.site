'use client';

import * as motion from 'motion/react-client';
import { Highlighter } from '@/components/ui/highlighter';

/**
 * Reusable animated section heading.
 *
 * @param {string} highlightedWord  – the word rendered inside <Highlighter>
 * @param {string} restText         – the remaining text shown after the highlighted word
 * @param {string} [className]      – extra classes appended to the wrapper
 */
export default function SectionHeading({ highlightedWord, restText, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`my-10 capitalize ${className}`}
    >
      <p className='text-4xl sm:text-5xl lg:text-6xl'>
        <Highlighter action='underline' color='#FF9800' isView={true}>
          {highlightedWord}
        </Highlighter>{' '}
        {restText}
      </p>
    </motion.div>
  );
}
