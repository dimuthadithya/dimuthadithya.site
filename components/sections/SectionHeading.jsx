'use client';

import { TextAnimate } from '@/components/ui/text-animate';

/**
 * Reusable animated section heading using TextAnimate with blurIn effect.
 *
 * @param {string} highlightedWord  – first word (animates in with blurIn)
 * @param {string} restText         – remaining text shown after the highlighted word
 * @param {string} [className]      – extra classes appended to the wrapper
 */
export default function SectionHeading({ highlightedWord, restText, className = '' }) {
  const fullText = `${highlightedWord} ${restText}`;

  return (
    <div className={`my-10 capitalize ${className}`}>
      <TextAnimate
        animation='blurIn'
        by='word'
        as='p'
        once={true}
        className='text-4xl sm:text-5xl lg:text-6xl'
      >
        {fullText}
      </TextAnimate>
    </div>
  );
}
