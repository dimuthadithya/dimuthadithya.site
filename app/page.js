'use client';

import { NumberTicker } from '@/components/ui/number-ticker';
import { TextAnimate } from '@/components/ui/text-animate';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import Navigation from '@/components/Navigation';
import { TracingBeam } from '@/components/ui/tracing-beam';
import {
  ArrowDown,
  ArrowDownIcon,
  ArrowDownLeft,
  ArrowRight,
} from '@phosphor-icons/react';
import { WordRotate } from '@/components/ui/word-rotate';
import { ShinyButton } from '@/components/ui/shiny-button';
import { CoolMode } from '@/components/ui/cool-mode';
import { Button } from '@/components/ui/button';
import { useScroll, useTransform } from 'framer-motion';
import { Highlighter } from '@/components/ui/highlighter';
import WobbleCardDemo from '@/components/wobble-card-demo';
import TimelineDemo from '@/components/timeline-demo';

export default function Home() {
  const { scrollY } = useScroll();

  const [isLoading, setIsLoading] = useState(true);
  const opacity = useTransform(scrollY, [0, 50], [1, 0]);
  const y = useTransform(scrollY, [0, 50], [0, 20]);

  return (
    <>
      <div className={` min-h-screen`}>
        <motion.div
          className={`font-inconsolata  gap-2 items-center justify-center ${isLoading ? 'flex' : 'hidden'} h-screen tracking-tight select-none relative`}
          initial={{ y: '0vh' }}
          animate={{ y: '-100vh' }}
          transition={{ duration: 1, delay: 3, ease: [0.25, 1, 0.5, 1] }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <div className='max-h-50 overflow-hidden'>
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                repeat={3}
                animate={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.5,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                <TextAnimate
                  animation='slideLeft'
                  by='character'
                  className='text-red-600 text-4xl font-bold uppercase'
                >
                  Dimuth
                </TextAnimate>
              </motion.div>
            </motion.div>
          </div>
          <div className='max-h-50 overflow-hidden'>
            <motion.div
              className='tracking-tighter flex flex-col text-sm font-extralight justify-center opacity-80 ease-in-out w-20 text-red-700 transition-opacity duration-200 hover:opacity-100'
              initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 100 }}
                repeat={3}
                transition={{
                  duration: 1,
                  delay: 2.7,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className='flex flex-col'
              >
                <span>Portfolio</span>
                <span className='-mt-1'>
                  <span className='me-1'>©</span>
                  2026
                </span>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className='absolute text-white bottom-5 right-5'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            delay={9}
            transition={{ duration: 6, ease: [0.25, 1, 0.5, 1] }}
          >
            <NumberTicker
              value={100}
              className={`text-4xl font-medium tracking-tighter whitespace-pre-wrap text-white ${isLoading ? '' : 'hidden'}`}
            />
            <span>%</span>
          </motion.div>
        </motion.div>
        {!isLoading && (
          <TracingBeam>
            <motion.div
              className='flex flex-col text-white font-playfair-display px-20 py-10 select-none max-w-5xl mx-auto relative'
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: '0vh', opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className='fixed justify-center right-10 bottom-5 font-inconsolata'>
                <CoolMode>
                  <Button className={'rounded-full h-5 w-5 bg-transparent'}>
                    DA
                  </Button>
                </CoolMode>
              </div>
              <div className='h-[94vh] flex flex-col'>
                <div className='mb-20'>
                  <Navigation />
                </div>
                <div className='flex-1 flex flex-col'>
                  <div className='flex-1'>
                    <AvatarCircles
                      avatarUrls={[
                        {
                          imageUrl:
                            'https://avatars.githubusercontent.com/u/119920915?v=4',
                          profileUrl: 'https://github.com/dimuthadithya',
                        },
                      ]}
                    />
                    <h1 className='tracking-tight'>
                      <TextAnimate
                        animation='blurInUp'
                        by='character'
                        once={true}
                        duration={1}
                        className={'mb-3 text-5xl'}
                      >
                        Hey, I&apos;m Dimuth.
                      </TextAnimate>
                    </h1>
                    <h1 className='text-4xl'>
                      I specialize in building modern web applications, taking
                      products from{' '}
                      <span className='text-neutral-400'>zero to one</span>.
                      Over the past 3+ years, I&apos;ve crafted scalable
                      <span className='text-neutral-400'> B2B & B2C </span>
                      solutions that drive real business
                      <span className='text-neutral-400'> impact.</span>
                    </h1>
                  </div>
                  <div className='lg:h-30 text-3xl'>
                    <div className='text-neutral-400 hover:text-neutral-50 transition-colors duration-100 flex items-center'>
                      I build products that are
                      <span className='text-white ms-2'>
                        <WordRotate
                          words={[
                            'scalable.',
                            'user-focused.',
                            'high-performance.',
                            'impactful.',
                          ]}
                        />
                      </span>
                    </div>
                    <ShinyButton className={'bg-neutral-900 mt-4'}>
                      <div className='flex items-center gap-1'>
                        <span>Resume</span>
                        <ArrowDownIcon />
                      </div>
                    </ShinyButton>
                  </div>
                  <div className='capitalize font-inconsolata mt-10 text-sm flex justify-end'>
                    <motion.div
                      className='flex flex-1 flex-col items-start text-sm text-neutral-400 pb-2'
                      style={{ opacity, y }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 5,
                      }}
                    >
                      <span>Scroll</span>

                      <motion.span
                        animate={{
                          y: [0, 8, 0],
                          opacity: [1, 0.4, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <ArrowDown size={16} />
                      </motion.span>
                    </motion.div>
                    <div className='flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer mb-2 w-fit'>
                      <span className='me-1'>see selected works</span>
                      <ArrowDownLeft />
                    </div>
                  </div>
                </div>
              </div>
              <div className='min-h-screen'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className='my-10'
                >
                  <p className='text-6xl'>
                    <Highlighter
                      action='underline'
                      color='#FF9800'
                      isView={true}
                    >
                      Selected
                    </Highlighter>{' '}
                    Works
                  </p>
                </motion.div>
                <WobbleCardDemo />
                <div className='text-center my-10'>
                  <ShinyButton className={'bg-neutral-900 mt-4'}>
                    <div className='flex items-center gap-1'>
                      <span>view all projects</span>
                      <ArrowRight />
                    </div>
                  </ShinyButton>
                  <div className='flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer mb-2 capitalize font-inconsolata mt-10 text-sm  w-full '>
                    <span className='me-1'>work experienece</span>
                    <ArrowDownLeft />
                  </div>
                </div>
              </div>
              <div className='min-h-screen'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className='my-10 capitalize'
                >
                  <p className='text-6xl'>
                    <Highlighter
                      action='underline'
                      color='#FF9800'
                      isView={true}
                    >
                      work
                    </Highlighter>{' '}
                    experience
                  </p>
                </motion.div>
                <TimelineDemo />
                <div className='flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer mb-2 capitalize font-inconsolata mt-10 text-sm  w-full '>
                  <span className='me-1'>my stack</span>
                  <ArrowDownLeft />
                </div>
              </div>
              <div className='min-h-screen'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className='my-10 capitalize'
                >
                  <p className='text-6xl'>
                    <Highlighter
                      action='underline'
                      color='#FF9800'
                      isView={true}
                    >
                      my
                    </Highlighter>{' '}
                    stack
                  </p>
                  <div>
                    {/* Frontend */}
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 mb-4'>
                        Frontend
                      </h1>
                      <div className='flex flex-wrap gap-6 items-center'>
                        {[
                          { name: 'HTML', icon: 'html' },
                          { name: 'CSS', icon: 'css' },
                          { name: 'JavaScript', icon: 'js' },
                          { name: 'TypeScript', icon: 'ts' },
                          { name: 'React', icon: 'react' },
                          { name: 'Next.js', icon: 'nextjs' },
                          { name: 'TailwindCSS', icon: 'tailwind' },
                          { name: 'Bootstrap', icon: 'bootstrap' },
                          { name: 'Sass (SCSS)', icon: 'sass' },
                        ].map((tech, i) => (
                          <motion.div
                            key={tech.icon}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className='flex flex-col items-center'
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.icon}`}
                              alt={tech.name}
                              className='w-14 h-14'
                            />
                            <span className='mt-2 text-sm text-neutral-300'>
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Animation & Motion */}
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 mb-4'>
                        Animation & Motion
                      </h1>
                      <div className='flex flex-wrap gap-6 items-center'>
                        {[
                          {
                            name: 'GSAP',
                            svg: (
                              <svg
                                role='img'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-8 h-8'
                                fill='#88CE02'
                              >
                                <title>GSAP</title>
                                <path d='M9.83,7.59C10.647,7.595 11.267,7.828 11.672,8.282C12.055,8.713 12.239,9.336 12.219,10.132L12.205,10.193C12.197,10.211 12.185,10.229 12.17,10.243C12.14,10.272 12.099,10.288 12.057,10.288L10.398,10.288C10.29,10.288 10.199,10.2 10.199,10.093C10.199,9.669 10.071,9.435 9.809,9.383L9.689,9.372C9.347,9.372 9.125,9.583 9.119,9.951C9.112,10.361 9.344,10.734 10.004,11.374C10.872,12.19 11.221,12.913 11.204,13.867C11.177,15.411 10.127,16.41 8.531,16.41C7.716,16.41 7.093,16.191 6.678,15.761C6.258,15.324 6.066,14.683 6.106,13.855C6.108,13.813 6.125,13.772 6.155,13.743C6.185,13.714 6.226,13.698 6.267,13.698L7.983,13.698C8.007,13.699 8.03,13.705 8.052,13.715C8.073,13.726 8.092,13.741 8.107,13.76C8.12,13.775 8.129,13.793 8.135,13.813C8.14,13.832 8.141,13.853 8.137,13.873C8.118,14.171 8.171,14.394 8.288,14.518C8.363,14.598 8.469,14.639 8.599,14.639C8.916,14.639 9.102,14.414 9.109,14.024C9.115,13.687 9.007,13.39 8.427,12.792C7.676,12.058 7.003,11.3 7.024,10.108C7.037,9.416 7.311,8.784 7.798,8.327C8.312,7.845 9.014,7.59 9.83,7.59ZM4.047,7.618C4.794,7.612 5.381,7.842 5.789,8.303C6.221,8.79 6.44,9.524 6.441,10.485C6.44,10.527 6.422,10.567 6.392,10.597C6.362,10.626 6.322,10.643 6.28,10.643L4.479,10.643C4.448,10.642 4.417,10.629 4.395,10.607C4.373,10.584 4.361,10.553 4.36,10.522C4.346,9.899 4.172,9.576 3.828,9.538L3.757,9.534C3.067,9.535 2.66,10.472 2.444,10.992C2.142,11.719 1.988,12.507 2.018,13.293C2.033,13.659 2.092,14.173 2.438,14.386C2.746,14.575 3.185,14.45 3.451,14.24C3.716,14.031 3.93,13.669 4.02,13.339C4.033,13.293 4.033,13.258 4.021,13.241C4.015,13.233 4.003,13.229 3.989,13.226L3.485,13.222C3.461,13.222 3.436,13.216 3.414,13.206C3.392,13.196 3.372,13.181 3.356,13.162C3.344,13.148 3.335,13.13 3.331,13.112C3.327,13.093 3.327,13.074 3.331,13.056L3.647,11.682C3.663,11.611 3.726,11.558 3.804,11.548L3.804,11.545L6.839,11.545C6.846,11.545 6.854,11.545 6.86,11.546C6.939,11.556 6.995,11.63 6.994,11.71L6.994,11.714L6.678,13.085C6.661,13.163 6.583,13.22 6.494,13.22L6.113,13.22C6.1,13.22 6.086,13.225 6.075,13.233C6.064,13.241 6.056,13.253 6.052,13.266C5.7,14.46 5.223,15.282 4.594,15.775C4.058,16.195 3.399,16.391 2.517,16.391C1.725,16.391 1.191,16.136 0.738,15.633C0.14,14.967 -0.107,13.879 0.043,12.566C0.313,10.103 1.589,7.618 4.047,7.618ZM21.016,7.75C23.026,7.75 24.03,8.662 23.999,10.461C23.962,12.569 22.678,14.119 20.745,14.477C20.47,14.527 20.191,14.547 19.912,14.545L18.978,14.541C18.963,14.541 18.948,14.547 18.937,14.558C18.926,14.568 18.92,14.583 18.92,14.598C18.92,14.608 18.922,14.618 18.928,14.627C18.933,14.636 18.941,14.643 18.95,14.648L19.744,15.062C19.809,15.096 19.835,15.153 19.82,15.226C19.815,15.249 19.618,16.139 19.613,16.159C19.596,16.237 19.533,16.282 19.442,16.282L17.739,16.282C17.715,16.282 17.69,16.277 17.668,16.267C17.646,16.257 17.626,16.241 17.61,16.223C17.598,16.208 17.589,16.191 17.585,16.173C17.58,16.155 17.581,16.135 17.585,16.116L19.481,7.875C19.5,7.789 19.581,7.751 19.653,7.751L21.016,7.75ZM17.273,7.762C17.292,7.77 17.31,7.781 17.324,7.795C17.338,7.81 17.351,7.828 17.358,7.847C17.366,7.866 17.369,7.886 17.369,7.906L17.358,16.119C17.361,16.138 17.36,16.158 17.355,16.177C17.35,16.196 17.34,16.213 17.328,16.228C17.313,16.245 17.295,16.259 17.274,16.268C17.254,16.277 17.232,16.282 17.21,16.281L15.397,16.281C15.377,16.282 15.356,16.277 15.337,16.27C15.318,16.262 15.3,16.25 15.286,16.236C15.272,16.221 15.26,16.204 15.253,16.185C15.245,16.166 15.241,16.146 15.241,16.125L15.28,15.328C15.282,15.241 15.28,15.217 15.229,15.211L15.161,15.209L13.447,15.209C13.323,15.209 13.314,15.22 13.27,15.334L12.914,16.191C12.882,16.252 12.818,16.281 12.722,16.281L10.927,16.281C10.818,16.281 10.74,16.173 10.781,16.072L14.499,7.873C14.524,7.824 14.562,7.75 14.648,7.75L17.214,7.75C17.234,7.75 17.254,7.754 17.273,7.762ZM15.5,9.985C15.492,9.953 15.466,9.956 15.445,9.998C15.43,10.028 15.416,10.06 15.405,10.091L14.121,13.274C14.114,13.294 14.109,13.31 14.105,13.322C14.104,13.328 14.103,13.335 14.104,13.341C14.105,13.347 14.108,13.353 14.111,13.358C14.115,13.363 14.12,13.367 14.126,13.37C14.131,13.373 14.137,13.376 14.143,13.376L15.215,13.39C15.334,13.38 15.34,13.374 15.352,13.253C15.354,13.21 15.506,10.022 15.5,9.985ZM20.112,9.582C20.097,9.582 20.083,9.588 20.072,9.599C20.061,9.609 20.055,9.624 20.054,9.639C20.054,9.649 20.057,9.659 20.062,9.668C20.068,9.677 20.075,9.685 20.084,9.69C20.097,9.697 20.869,10.104 20.926,10.135C20.968,10.158 20.969,10.198 20.955,10.267C20.948,10.298 20.415,12.642 20.416,12.644C20.419,12.647 20.435,12.655 20.515,12.655L20.551,12.655C21.446,12.619 21.934,11.561 21.952,10.534C21.961,9.979 21.772,9.638 21.429,9.588L21.358,9.582L20.112,9.582Z' />
                              </svg>
                            ),
                          },
                          { name: 'Framer Motion', icon: 'framermotion' },
                          { name: 'Webflow', icon: 'webflow' },
                        ].map((tech, i) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className='flex flex-col items-center'
                          >
                            {tech.svg ? (
                              <div className='w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800'>
                                {tech.svg}
                              </div>
                            ) : (
                              <img
                                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                                alt={tech.name}
                                className='w-14 h-14'
                              />
                            )}
                            <span className='mt-2 text-sm text-neutral-300'>
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 mb-4'>
                        Backend
                      </h1>
                      <div className='flex flex-wrap gap-6 items-center'>
                        {[
                          { name: 'Node.js', icon: 'nodejs' },
                          { name: 'Express', icon: 'express' },
                          { name: 'NestJS', icon: 'nestjs' },
                          { name: 'PHP', icon: 'php' },
                          { name: 'Laravel', icon: 'laravel' },
                          { name: 'C#', icon: 'cs' },
                          { name: 'Java', icon: 'java' },
                        ].map((tech, i) => (
                          <motion.div
                            key={tech.icon}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className='flex flex-col items-center'
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.icon}`}
                              alt={tech.name}
                              className='w-14 h-14'
                            />
                            <span className='mt-2 text-sm text-neutral-300'>
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Database */}
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 mb-4'>
                        Database
                      </h1>
                      <div className='flex flex-wrap gap-6 items-center'>
                        {[
                          { name: 'MongoDB', icon: 'mongodb' },
                          { name: 'PostgreSQL', icon: 'postgres' },
                          { name: 'MySQL', icon: 'mysql' },
                          { name: 'SQLite', icon: 'sqlite' },
                          { name: 'Redis', icon: 'redis' },
                          { name: 'Supabase', icon: 'supabase' },
                          { name: 'Firebase', icon: 'firebase' },
                        ].map((tech, i) => (
                          <motion.div
                            key={tech.icon}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className='flex flex-col items-center'
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.icon}`}
                              alt={tech.name}
                              className='w-14 h-14'
                            />
                            <span className='mt-2 text-sm text-neutral-300'>
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Cloud & Hosting */}
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 mb-4'>
                        Cloud & Hosting
                      </h1>
                      <div className='flex flex-wrap gap-6 items-center'>
                        {[
                          { name: 'AWS', icon: 'aws' },
                          { name: 'Vercel', icon: 'vercel' },
                          { name: 'Netlify', icon: 'netlify' },
                          { name: 'Docker', icon: 'docker' },
                        ].map((tech, i) => (
                          <motion.div
                            key={tech.icon}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className='flex flex-col items-center'
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.icon}`}
                              alt={tech.name}
                              className='w-14 h-14'
                            />
                            <span className='mt-2 text-sm text-neutral-300'>
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Design & Creative */}
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 mb-4'>
                        Design & Creative
                      </h1>
                      <div className='flex flex-wrap gap-6 items-center'>
                        {[
                          { name: 'Figma', icon: 'figma' },
                          { name: 'Photoshop', icon: 'ps' },
                        ].map((tech, i) => (
                          <motion.div
                            key={tech.icon}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className='flex flex-col items-center'
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${tech.icon}`}
                              alt={tech.name}
                              className='w-14 h-14'
                            />
                            <span className='mt-2 text-sm text-neutral-300'>
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Workflow */}
                    <div className='my-10'>
                      <h1 className='text-4xl text-neutral-300 mb-4'>
                        Tools & Workflow
                      </h1>
                      <div className='flex flex-wrap gap-6 items-center'>
                        {[
                          { name: 'Git', icon: 'git' },
                          { name: 'GitHub', icon: 'github' },
                          { name: 'VS Code', icon: 'vscode' },
                          { name: 'Postman', icon: 'postman' },
                          { name: 'Notion', icon: 'notion' },
                          { name: 'Markdown', icon: 'md' },
                          {
                            name: 'Chrome Ext.',
                            svg: (
                              <svg
                                role='img'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-8 h-8'
                                fill='#4285F4'
                              >
                                <title>Google Chrome</title>
                                <path d='M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z' />
                              </svg>
                            ),
                          },
                        ].map((tech, i) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className='flex flex-col items-center'
                          >
                            {tech.svg ? (
                              <div className='w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800'>
                                {tech.svg}
                              </div>
                            ) : (
                              <img
                                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                                alt={tech.name}
                                className='w-14 h-14'
                              />
                            )}
                            <span className='mt-2 text-sm text-neutral-300'>
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className='flex justify-end items-center opacity-80 hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer mb-2 capitalize font-inconsolata mt-10 text-sm  w-full '>
                  <span className='me-1'>my education</span>
                  <ArrowDownLeft />
                </div>
              </div>
              <div className='min-h-screen'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className='my-10 capitalize'
                >
                  <p className='text-6xl'>
                    <Highlighter
                      action='underline'
                      color='#FF9800'
                      isView={true}
                    >
                      my
                    </Highlighter>{' '}
                    Education
                  </p>
                </motion.div>
              </div>
              <div className='min-h-screen'>
                <h1>hello world</h1>
              </div>
            </motion.div>
          </TracingBeam>
        )}
      </div>
    </>
  );
}
