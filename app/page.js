'use client';

import { NumberTicker } from '@/components/ui/number-ticker';
import { TextAnimate } from '@/components/ui/text-animate';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import Navigation from '@/components/Navigation';
import { TracingBeam } from '@/components/ui/tracing-beam';
import {
  ArrowDown,
  ArrowDownIcon,
  ArrowDownLeft,
  ArrowRight,
} from '@phosphor-icons/react';
import { WordRotate } from '@/components/ui/word-rotate';
import { ShinyButton } from '@/components/ui/shiny-button';
import { CoolMode } from '@/components/ui/cool-mode';
import { Button } from '@/components/ui/button';
import { useScroll, useTransform } from 'framer-motion';
import { Highlighter } from '@/components/ui/highlighter';
import WobbleCardDemo from '@/components/wobble-card-demo';
import TimelineDemo from '@/components/timeline-demo';

export default function Home() {
  const { scrollY } = useScroll();

  const [isLoading, setIsLoading] = useState(true);
  const opacity = useTransform(scrollY, [0, 50], [1, 0]);
  const y = useTransform(scrollY, [0, 50], [0, 20]);

  return (
    <>
      <div className={` min-h-screen`}>
        <motion.div
          className={`font-inconsolata  gap-2 items-center justify-center ${isLoading ? 'flex' : 'hidden'} h-screen tracking-tight select-none relative`}
          initial={{ y: '0vh' }}
          animate={{ y: '-100vh' }}
          transition={{ duration: 1, delay: 3, ease: [0.25, 1, 0.5, 1] }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <div className='max-h-50 overflow-hidden'>
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                repeat={3}
                animate={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.5,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                <TextAnimate
                  animation='slideLeft'
                  by='character'
                  className='text-red-600 text-4xl font-bold uppercase'
                >
                  Dimuth
                </TextAnimate>
              </motion.div>
            </motion.div>
          </div>
          <div className='max-h-50 overflow-hidden'>
            <motion.div
              className='tracking-tighter flex flex-col text-sm font-extralight justify-center opacity-80 ease-in-out w-20 text-red-700 transition-opacity duration-200 hover:opacity-100'
              initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 100 }}
                repeat={3}
                transition={{
                  duration: 1,
                  delay: 2.7,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className='flex flex-col'
              >
                <span>Portfolio</span>
                <span className='-mt-1'>
                  <span className='me-1'>©</span>
                  2026
                </span>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className='absolute text-white bottom-5 right-5'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            delay={9}
            transition={{ duration: 6, ease: [0.25, 1, 0.5, 1] }}
          >
            <NumberTicker
              value={100}
              className={`text-4xl font-medium tracking-tighter whitespace-pre-wrap text-white ${isLoading ? '' : 'hidden'}`}
            />
            <span>%</span>
          </motion.div>
        </motion.div>
        {!isLoading && (
          <TracingBeam>
            <motion.div
              className='flex flex-col text-white font-playfair-display px-20 py-10 select-none max-w-5xl mx-auto relative'
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: '0vh', opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className='fixed justify-center right-10 bottom-5 font-inconsolata'>
                <CoolMode>
                  <Button className={'rounded-full h-5 w-5 bg-transparent'}>
                    DA
                  </Button>
                </CoolMode>
              </div>
              <div className='h-[94vh] flex flex-col'>
                <div className='mb-20'>
                  <Navigation />
                </div>
                <div className='flex-1 flex flex-col'>
                  <div className='flex-1'>
                    <AvatarCircles
                      avatarUrls={[
                        {
                          imageUrl:
                            'https://avatars.githubusercontent.com/u/119920915?v=4',
                          profileUrl: 'https://github.com/dimuthadithya',
                        },
                      ]}
                    />
                    <h1 className='tracking-tight'>
                      <TextAnimate
                        animation='blurInUp'
                        by='character'
                        once={true}
                        duration={1}
                        className={'mb-3 text-5xl'}
                      >
                        Hey, I&apos;m Dimuth.
                      </TextAnimate>
                    </h1>
                    <h1 className='text-4xl'>
                      I specialize in building modern web applications, taking
                      products from{' '}
                      <span className='text-neutral-400'>zero to one</span>.
                      Over the past 3+ years, I&apos;ve crafted scalable
                      <span className='text-neutral-400'> B2B & B2C </span>
                      solutions that drive real business
                      <span className='text-neutral-400'> impact.</span>
                    </h1>
                  </div>
                  <div className='lg:h-30 text-3xl'>
                    <div className='text-neutral-400 hover:text-neutral-50 transition-colors duration-100 flex items-center'>
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
                  <div className='capitalize font-inconsolata mt-10 text-sm flex justify-end'>
                    <motion.div
                      className='flex flex-1 flex-col items-start text-sm text-neutral-400 pb-2'
                      style={{ opacity, y }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 5,
                      }}
                    >
                      <span>Scroll</span>

                      <motion.span
                        animate={{
                          y: [0, 8, 0],
                          opacity: [1, 0.4, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <ArrowDown size={16} />
                      </motion.span>
                    </motion.div>
                    <div className='flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer mb-2 w-fit'>
                      <span className='me-1'>see selected works</span>
                      <ArrowDownLeft />
                    </div>
                  </div>
                </div>
              </div>
              <div className='min-h-screen'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className='my-10'
                >
                  <p className='text-6xl'>
                    <Highlighter
                      action='underline'
                      color='#FF9800'
                      isView={true}
                    >
                      Selected
                    </Highlighter>{' '}
                    Works
                  </p>
                </motion.div>
                <WobbleCardDemo />
                <div className='text-center my-10'>
                  <ShinyButton className={'bg-neutral-900 mt-4'}>
                    <div className='flex items-center gap-1'>
                      <span>view all projects</span>
                      <ArrowRight />
                    </div>
                  </ShinyButton>
                  <div className='flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer mb-2 capitalize font-inconsolata mt-10 text-sm  w-full '>
                    <span className='me-1'>work experienece</span>
                    <ArrowDownLeft />
                  </div>
                </div>
              </div>
              <div className='min-h-screen'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className='my-10 capitalize'
                >
                  <p className='text-6xl'>
                    <Highlighter
                      action='underline'
                      color='#FF9800'
                      isView={true}
                    >
                      work
                    </Highlighter>{' '}
                    experience
                  </p>
                </motion.div>
                <TimelineDemo />
                <div className='flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer mb-2 capitalize font-inconsolata mt-10 text-sm  w-full '>
                  <span className='me-1'>my stack</span>
                  <ArrowDownLeft />
                </div>
              </div>
              <div className='min-h-screen'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className='my-10 capitalize'
                >
                  <p className='text-6xl'>
                    <Highlighter
                      action='underline'
                      color='#FF9800'
                      isView={true}
                    >
                      my
                    </Highlighter>{' '}
                    stack
                  </p>
                  <div>
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 '>Frontend</h1>
                    </div>
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 '>Backend</h1>
                    </div>
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 '>Database</h1>
                    </div>
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 '>
                        Tools & Workflow
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className='min-h-screen'>
                <h1>hello world</h1>
              </div>
              <div className='min-h-screen'>
                <h1>hello world</h1>
              </div>
            </motion.div>
          </TracingBeam>
        )}
      </div>
    </>
  );
}
