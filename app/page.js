'use client';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { TextAnimate } from '@/components/ui/text-animate';

export default function Home() {
  return (
    <div className=' text-white h-screen flex flex-col select-none'>
      <div className='flex-1'></div>
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
          <TextAnimate
            animation='slideLeft'
            by='word'
            once
            className='text-3xl text-neutral-400 max-w-[50%] hover:text-neutral-200 transition-colors duration-300'
            delay={1}
          >
            I am a self taught full-stack developer interested in creating
            websites and other random tools on the internet.
          </TextAnimate>
        </div>
      </div>
    </div>
  );
}
