'use client';
import { Particles } from '@/components/ui/particles';
import { TextAnimate } from '@/components/ui/text-animate';

export default function Home() {
  return (
    <>
      <div className='relative'>
        <Particles
          className='absolute top-0 left-0 w-full overflow-hidden'
          color='#000'
        />
        <div className='py-10 text-center'>image</div>
        <div className='text-center text-6xl font-semibold opacity-70 leading-9'>
          <TextAnimate animation='blurIn'>Hey, I&apos;m Dimuth!</TextAnimate>
          <br />
          <TextAnimate animation='blurIn' delay={0.2}>
            Welcome to my corner of
          </TextAnimate>
          <br />
          <TextAnimate animation='blurIn' delay={0.4}>
            the internet!
          </TextAnimate>
        </div>
      </div>
      <div className='h-screen'></div>
    </>
  );
}
