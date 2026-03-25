import Image from 'next/image';
import { WordRotate } from '@/components/ui/word-rotate';
import { TextAnimate } from '@/components/ui/text-animate';

export default function Home() {
  return (
    <>
      <div className='font-inconsolata flex gap-2 h-screen items-center justify-center tracking-tight  bg-neutral-950 '>
        <TextAnimate
          animation='slideLeft'
          by='character'
          className={'text-red-600 text-4xl font-bold uppercase'}
        >
          Dimuth
        </TextAnimate>
        <div className='tracking-tighter flex flex-col text-sm font-extralight justify-center opacity-80 transition-all duration-150 ease-in-out w-20 text-red-700'>
          <span>Portfolio</span>
          <span className='-mt-1'>
            <span className='me-1'>©</span>
            2026
          </span>
        </div>
      </div>
    </>
  );
}
