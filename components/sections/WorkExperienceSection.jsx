'use client';

import SectionHeading from '@/components/sections/SectionHeading';
import SectionNextLink from '@/components/sections/SectionNextLink';
import TimelineDemo from '@/components/timeline-demo';

/**
 * "Work Experience" section.
 */
export default function WorkExperienceSection() {
  return (
    <div id='experience'>
      <SectionHeading highlightedWord='work' restText='experience' />
      <TimelineDemo />
      <SectionNextLink label='my stack' href='#stack' />
    </div>
  );
}
