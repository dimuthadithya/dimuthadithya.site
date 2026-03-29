'use client';

import * as motion from 'motion/react-client';
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from '@/components/ui/text-reveal-card';
import SectionHeading from '@/components/sections/SectionHeading';

/**
 * "Let's Talk" contact section with the TextRevealCard email interaction.
 */
export default function ContactSection() {
  return (
    <div id='contact' className='flex flex-col'>
      <SectionHeading highlightedWord="Let's" restText='Talk' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className='flex flex-col items-center gap-6 w-full'
      >
        <TextRevealCard
          text='Have a project in mind?'
          revealText='dimuthadithya01@gmail.com'
          className='w-full'
        >
          <TextRevealCardTitle>Hover to reveal</TextRevealCardTitle>
          <TextRevealCardDescription>
            Slide your mouse across to get in touch.
          </TextRevealCardDescription>
        </TextRevealCard>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='flex items-center gap-4 mt-4 font-inconsolata text-sm text-neutral-500'
        >
          <a
            href='mailto:dimuthadithya01@gmail.com'
            className='hover:text-red-600 transition-colors duration-200 flex items-center gap-2 group'
          >
            <span className='w-4 h-px bg-neutral-600 group-hover:bg-red-600 transition-colors duration-200' />
            dimuthadithya01@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
