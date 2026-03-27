'use client';

import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';

export default function WobbleCardDemo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
      <WobbleCard
        containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'
        className=''
      >
        <div className='max-w-xs'>
          <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Track Your YouTube Learning Journey with YTPlayer Tracker
          </h2>
          <p className='mt-4 text-left  text-base/6 text-neutral-200 max-w-[80%]'>
            Track YouTube learning, organize playlists as courses, and manage
            your progress with YTPLAYTracker’s dashboard and Chrome Extension.
          </p>
        </div>
        <video
          src='/videos/projects/ytcoursetracker.webm'
          width={450}
          height={600}
          alt='linear demo image'
          className='absolute -right-10 md:-right-[40%] lg:-right-[33%] -bottom-2 object-contain rounded-2xl'
          autoPlay
          loop
          muted
        />
      </WobbleCard>
      <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
        <video
          src='/videos/projects/tinayastore.webm'
          width={450}
          height={100}
          alt='linear demo image'
          className='absolute right-[0%] -bottom-2 object-contain rounded-2xl'
          autoPlay
          loop
          muted
        />
      </WobbleCard>
      <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
        <div className='max-w-sm'>
          <h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Busy Books: Your Ultimate Digital Library
          </h2>
          <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
            Discover, read, and manage your favorite books effortlessly with
            Busy Books, your smart online library companion.
          </p>
        </div>
        <video
          src='/videos/projects/busybook.webm'
          width={500}
          height={500}
          alt='linear demo image'
          className='absolute -right-10 md:-right-[40%] lg:-right-[8%] -bottom-3 object-contain rounded-2xl'
          autoPlay
          loop
          muted
        />
      </WobbleCard>
    </div>
  );
}
