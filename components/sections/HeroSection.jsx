'use client';

import * as motion from 'motion/react-client';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { TextAnimate } from '@/components/ui/text-animate';
import { WordRotate } from '@/components/ui/word-rotate';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ArrowDown, ArrowDownLeft, ArrowDownIcon } from '@phosphor-icons/react';
import Navigation from '@/components/Navigation';
import { useScroll, useTransform } from 'framer-motion';

/**
 * Hero / landing section — occupies ~100vh.
 * Scroll-linked opacity/y for the "Scroll" hint is handled internally.
 */
export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [1, 0]);
  const y = useTransform(scrollY, [0, 50], [0, 20]);

  return (
    <div className='h-[94vh] flex flex-col'>
      {/* Navigation */}
      <div className='mb-20'>
        <Navigation />
      </div>

      <div className='flex-1 flex flex-col'>
        {/* Main copy */}
        <div className='flex-1'>
          <AvatarCircles
            avatarUrls={[
              {
                imageUrl: '/images/profile.png',
                profileUrl: process.env.NEXT_PUBLIC_GITHUB_URL,
              },
            ]}
          />
          <div className='flex flex-wrap items-center gap-3 mb-3'>
            <h1 className='tracking-tight'>
              <TextAnimate
                animation='blurInUp'
                by='character'
                once={true}
                duration={1}
                className={'text-3xl sm:text-4xl lg:text-5xl'}
              >
                Hey, I&apos;m Dimuth.
              </TextAnimate>
            </h1>
          </div>
          <h2 className='text-xl sm:text-2xl lg:text-4xl leading-snug'>
            Full-stack developer building{' '}
            <span className='text-neutral-400'>
              web apps &amp; Chrome extensions
            </span>{' '}
            that simplify everyday workflows. I also{' '}
            <span className='text-neutral-400'>teach programming online</span>,
            helping students go from zero to{' '}
            <span className='text-neutral-400'>job-ready.</span>
          </h2>
        </div>

        {/* Bottom row */}
        <div className='lg:h-30 text-xl sm:text-2xl lg:text-3xl'>
          <div className='text-neutral-400 hover:text-red-600 transition-colors duration-100 flex flex-wrap items-center gap-x-2'>
            I build products that are
            <span className='text-white ms-2'>
              <WordRotate
                words={[
                  'scalable.',
                  'user-focused.',
                  'high-performance.',
                  'impactful.',
                ]}
              />
            </span>
          </div>
          <ShinyButton className={'bg-neutral-900 mt-4'}>
            <div className='flex items-center gap-1'>
              <span>Resume</span>
              <ArrowDownIcon />
            </div>
          </ShinyButton>
        </div>

        {/* Scroll hint + "see selected works" */}
        <div className='capitalize font-inconsolata mt-3 text-sm flex justify-end'>
          <motion.div
            className='flex flex-1 flex-col items-start text-sm text-neutral-400 pb-2'
            style={{ opacity, y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowDown size={16} />
            </motion.span>
          </motion.div>

          <div className='hidden sm:flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-red-600 duration-200 cursor-pointer mb-2 w-fit'>
            <span className='me-1'>see selected works</span>
            <ArrowDownLeft />
          </div>
        </div>
      </div>
    </div>
  );
}
