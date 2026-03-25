import Image from 'next/image';
import { WordRotate } from '@/components/ui/word-rotate';

export default function Home() {
  return (
    <>
      <div className='font-inconsolata flex gap-2 h-screen items-center justify-center tracking-tight text-red-700 bg-neutral-950 '>
        {/* <WordRotate
          words={['Dimuth', 'adithya']}
          className={'text-4xl font-bold uppercase'}
        /> */}
        <h6 className='text-4xl font-bold uppercase'>dimuth</h6>
        <div className='tracking-tighter flex flex-col text-sm font-extralight justify-center opacity-80 transition-all duration-150 ease-in-out w-20'>
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
