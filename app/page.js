'use client';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { TextAnimate } from '@/components/ui/text-animate';
import { NavigationMenuDemo } from '@/components/Navigation';
import { FlipWords } from '@/components/ui/flip-words';
import { TypingAnimation } from '@/components/ui/typing-animation';

export default function Home() {
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
    <div className=' text-white h-screen flex flex-col select-none'>
      <div className='flex-1'>
        <NavigationMenuDemo></NavigationMenuDemo>
      </div>
      <div className='h-7/8 px-20 flex flex-col items-start justify-center gap-10'>
        <div>
          <EncryptedText
            text='dimuth'
            encryptedClassName='text-neutral-500'
            revealedClassName='dark:text-white text-white'
            className={'text-9xl'}
            revealDelayMs={120}
          />{' '}
          <br />
          <EncryptedText
            text='adithya'
            encryptedClassName='text-neutral-500'
            revealedClassName='dark:text-white text-white'
            className={'text-9xl'}
            revealDelayMs={130}
          />
        </div>
        <div>
          <span className='text-3xl block  max-w-[70%] text-neutral-400 hover:text-neutral-100 duration-75 transition-all ease-in-out'>
            I am a self-taught{' '}
            <TypingAnimation
              words={roles}
              className={'text-white leading-0'}
              loop
            />{' '}
            building modern web experiences.
          </span>
        </div>
      </div>
    </div>
  );
}
