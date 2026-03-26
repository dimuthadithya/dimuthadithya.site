'use client';

import { ShinyButton } from '@/components/ui/shiny-button';
import { ArrowRight } from '@phosphor-icons/react';
import SectionHeading from '@/components/sections/SectionHeading';
import SectionNextLink from '@/components/sections/SectionNextLink';
import WobbleCardDemo from '@/components/wobble-card-demo';

/**
 * "Selected Works" section.
 */
export default function SelectedWorksSection() {
  return (
    <div id='works'>
      <SectionHeading highlightedWord='Selected' restText='Works' />
      <WobbleCardDemo />
      <div className='text-center my-10'>
        <ShinyButton className={'bg-neutral-900 mt-4'}>
          <div className='flex items-center gap-1'>
            <span>view all projects</span>
            <ArrowRight />
          </div>
        </ShinyButton>
        <SectionNextLink label='work experience' href='#experience' />
      </div>
    </div>
  );
}
