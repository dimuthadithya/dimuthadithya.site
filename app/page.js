'use client';

import { TextAnimate } from '@/components/ui/text-animate';
import * as motion from 'motion/react-client';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className={`bg-neutral-950 min-h-screen`}>
        <motion.div
          className={`font-inconsolata  gap-2 items-center justify-center ${isLoading ? 'flex' : 'hidden'} h-screen tracking-tight select-none`}
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
        </motion.div>
        {!isLoading && (
          <motion.div
            className=' flex flex-col items-center justify-center bg-black text-white'
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: '0vh', opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className='min-h-screen'>
              <h1>hello world</h1>
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
