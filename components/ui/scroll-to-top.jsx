'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from '@phosphor-icons/react';

/**
 * Floating scroll-to-top button — desktop only.
 * Appears after scrolling 300px down.
 * Hides automatically when the footer enters the viewport.
 */
export function FloatingScrollTop() {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = document.querySelector('footer');

    const onScroll = () => {
      const scrolled = window.scrollY > 300;

      // Hide when footer is visible
      let footerVisible = false;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        footerVisible = rect.top < window.innerHeight;
      }

      setVisible(scrolled && !footerVisible);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key='floating-scroll-top'
          onClick={scrollTop}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label='Scroll to top'
          className='
            hidden sm:flex
            fixed bottom-5 left-1/2 -translate-x-1/2 z-50
            items-center gap-2
            px-4 py-2 rounded-full
            bg-neutral-900/90 backdrop-blur-md
            border border-neutral-700
            text-neutral-300 hover:text-white hover:border-neutral-500
            text-xs font-inconsolata tracking-wide
            transition-colors duration-200
            shadow-lg
          '
        >
          <ArrowUp size={13} weight='bold' />
          <span>Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/**
 * Inline scroll-to-top button — used inside the footer.
 */
export function FooterScrollTop() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      aria-label='Scroll to top'
      className='
        flex items-center gap-2
        text-neutral-500 hover:text-white
        text-xs font-inconsolata tracking-wide
        transition-colors duration-200
        group
      '
    >
      <span className='flex items-center justify-center w-7 h-7 rounded-full border border-neutral-700 group-hover:border-neutral-400 transition-colors duration-200'>
        <ArrowUp size={13} weight='bold' />
      </span>
      <span>Back to top</span>
    </button>
  );
}
