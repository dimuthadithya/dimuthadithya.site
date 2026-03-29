'use client';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { LinkPreview } from '@/components/ui/link-preview';

export default function TimelineDemo() {
  const data = [
    {
      title: '2025',
      company: (
        <LinkPreview
          url='https://oxymai.com/'
          className='font-bold text-neutral-100  transition-colors duration-200'
        >
          OXYMAI PVT LTD
        </LinkPreview>
      ),
      position: 'Web Development Intern',
      fullTime: true,
      content: (
        <div>
          <p className='mb-8 text-xs font-normal  md:text-sm text-neutral-200'>
            During my Oxymai internship, I developed and delivered over 11
            projects, including React web apps, Chrome extensions (MV3), landing
            pages, and full-stack tools using Vite, Firebase, TailwindCSS,
            Express, and Redis. My work focused on UI/UX design, API
            integration, Chrome extension automation, advanced animations with
            Framer Motion, and scalable cloud deployment.
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src='/images/projects/busybook.png'
              alt='startup template'
              className='w-full rounded-lg object-top object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-h-60'
            />
            <img
              src='/images/projects/ytcoursetracker.png'
              alt='startup template'
              width={500}
              height={500}
              className='w-full rounded-lg object-top object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-h-60'
            />
            <img
              src='/images/projects/whiskautomator.png'
              alt='startup template'
              width={500}
              height={500}
              className='w-full rounded-lg object-top object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-h-60'
            />
            <img
              src='/images/projects/vectorfly.png'
              alt='startup template'
              width={500}
              height={500}
              className='w-full rounded-lg object-top object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-h-60'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2025',
      company: 'PROXIMA PVT LTD',
      position: 'Web Developer',
      fullTime: false,
      content: (
        <div>
          <p className='mb-8 text-xs font-normal  md:text-sm text-neutral-200'>
            During my part-time role at Proxima Pvt Ltd, I contributed to
            designing and developing modern web interfaces, responsive landing
            pages, and scalable frontend solutions. My work involved building
            interactive UI components, optimizing user experience, integrating
            APIs, and creating smooth animations using modern technologies such
            as Next.js, React, TailwindCSS, Framer Motion, and Firebase. I also
            collaborated on performance optimization, reusable component
            architecture, and delivering clean, production-ready user
            experiences.
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src='/images/projects/tinayastore.png'
              alt='hero template'
              width={500}
              height={500}
              className='w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-h-60'
            />
            <img
              src='/images/projects/udawattatea.png'
              alt='feature template'
              width={500}
              height={500}
              className='w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-h-60'
            />
            <img
              src='/images/projects/udawattamedicles.png'
              alt='cards template'
              width={500}
              height={500}
              className='w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-h-60'
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: 'Early 2025',
    //   company: 'Freelance Developer',
    //   position: '',
    //   fullTime: true,
    //   content: (
    //     <div>
    //       <p className='mb-4 text-xs font-normal  md:text-sm text-neutral-200'>
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className='mb-8'>
    //         <div className='flex items-center gap-2 text-xs md:text-sm text-neutral-300'>
    //           ✅ Card grid component
    //         </div>
    //         <div className='flex items-center gap-2 text-xs  md:text-sm text-neutral-300'>
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className='flex items-center gap-2 text-xs md:text-sm text-neutral-300'>
    //           ✅ Random file upload lol
    //         </div>
    //         <div className='flex items-center gap-2 text-xs  md:text-sm text-neutral-300'>
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className='flex items-center gap-2 text-xs  mdtext-sm text-neutral-300'>
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className='grid grid-cols-2 gap-4'>
    //         <img
    //           src='https://assets.aceternity.com/pro/hero-sections.png'
    //           alt='hero template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <img
    //           src='https://assets.aceternity.com/features-section.png'
    //           alt='feature template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <img
    //           src='https://assets.aceternity.com/pro/bento-grids.png'
    //           alt='bento template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //         <img
    //           src='https://assets.aceternity.com/cards.png'
    //           alt='cards template'
    //           width={500}
    //           height={500}
    //           className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className='relative w-full overflow-clip'>
      <Timeline data={data} />
    </div>
  );
}
