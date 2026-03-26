'use client';

import { NumberTicker } from '@/components/ui/number-ticker';
import { TextAnimate } from '@/components/ui/text-animate';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import { AvatarCircles } from '@/components/ui/avatar-circles';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className={`bg-neutral-950 min-h-screen`}>
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
          <motion.div
            className=' flex flex-col bg-black text-white font-playfair-display px-20 py-10'
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: '0vh', opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className='min-h-screen'>
              <div></div>
              <div>
                <AvatarCircles
                  avatarUrls={[
                    {
                      imageUrl:
                        'https://avatars.githubusercontent.com/u/119920915?v=4',
                      profileUrl: 'https://github.com/dimuthadithya',
                    },
                  ]}
                />
                <h1 className='text-6xl'>
                  Hey, I&apos;m Dimuth. I specialize in taking products from
                  zero to one shaping B2B and B2C web & mobile applications over
                  the past 3+ years to drive business impact.
                </h1>
              </div>
              <div></div>
            </div>
            <div className='min-h-screen'>
              <h1>hello world</h1>
            </div>
            <div className='min-h-screen'>
              <h1>hello world</h1>
            </div>
            <div className='min-h-screen'>
              <h1>hello world</h1>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
