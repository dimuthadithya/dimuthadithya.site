'use client';

import * as motion from 'motion/react-client';
import { useState } from 'react';
import { CoolMode } from '@/components/ui/cool-mode';
import { Button } from '@/components/ui/button';
import { TracingBeam } from '@/components/ui/tracing-beam';

import LoadingScreen from '@/components/sections/LoadingScreen';
import HeroSection from '@/components/sections/HeroSection';
import SelectedWorksSection from '@/components/sections/SelectedWorksSection';
import WorkExperienceSection from '@/components/sections/WorkExperienceSection';
import MyStackSection from '@/components/sections/MyStackSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className='min-h-screen'>
        {/* Intro loader */}
        <LoadingScreen
          isLoading={isLoading}
          onComplete={() => setIsLoading(false)}
        />

        {/* Main content revealed after loading */}
        {!isLoading && (
          <TracingBeam>
            <motion.div
              className='flex flex-col text-white font-playfair-display px-4 sm:px-8 lg:px-20 pt-6 sm:pt-10 select-none max-w-5xl mx-auto relative'
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: '0vh', opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Floating DA button */}
              <div className='fixed justify-center right-4 sm:right-10 bottom-5 font-inconsolata z-50'>
                <CoolMode>
                  <Button className={'rounded-full h-5 w-5 bg-transparent'}>
                    DA
                  </Button>
                </CoolMode>
              </div>

              <HeroSection />
              <SelectedWorksSection />
              <WorkExperienceSection />
              <MyStackSection />
              <EducationSection />
              <ContactSection />
              <Footer />
            </motion.div>
          </TracingBeam>
        )}
      </div>
    </>
  );
}
