'use client';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { TextAnimate } from '@/components/ui/text-animate';
import { NavigationMenuDemo } from '@/components/Navigation';
import { FlipWords } from '@/components/ui/flip-words';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { DotPattern } from '@/components/ui/dot-pattern';
import { LightRays } from '@/components/ui/light-rays';
import { useState } from 'react';
import { Particles } from '@/components/ui/particles';

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const roles = [
    ' Full-Stack Developer',
    ' Frontend Developer',
    ' Backend Developer',
    ' Web Developer',
    ' Chrome Extension Developer',
    ' AI Developer',
    ' Creative Developer',
    ' Tool Builder',
    ' Problem Solver',
  ];

  return (
    <>
      <div className='text-white h-screen flex flex-col select-none'>
        <div className='flex-1'>
          <NavigationMenuDemo></NavigationMenuDemo>
        </div>
        <div className='h-7/8 px-20 flex flex-col items-start justify-center gap-10'>
          <div className='text-white'>
            <div className='flex flex-col text-9xl leading-none'>
              <div
                onMouseEnter={() => setHovered('dimuth')}
                onMouseLeave={() => setHovered(null)}
              >
                <EncryptedText
                  text='dimuth'
                  encryptedClassName='text-neutral-500'
                  revealedClassName={
                    hovered === 'dimuth' ? 'text-white/30' : 'text-white'
                  }
                  className='cursor-pointer transition-all duration-300'
                  revealDelayMs={120}
                />
              </div>

              <div
                onMouseEnter={() => setHovered('adithya')}
                onMouseLeave={() => setHovered(null)}
              >
                <EncryptedText
                  text='adithya'
                  encryptedClassName='text-neutral-500'
                  revealedClassName={
                    hovered === 'dimuth' ? 'text-white' : 'text-white/30'
                  }
                  className='cursor-pointer transition-all duration-300'
                  revealDelayMs={130}
                />
              </div>
            </div>
          </div>
          <div>
            <span className='text-3xl block  max-w-[70%] text-neutral-400 hover:text-neutral-100 duration-75 transition-all ease-in-out'>
              I am a self-taught{' '}
              <TypingAnimation
                words={roles}
                className={'text-green-400 leading-0'}
                loop
              />{' '}
              building modern web experiences.
            </span>
          </div>
        </div>
      </div>
      <div className='h-screen'>
        <h1>hello</h1>
      </div>
    </>
  );
}
