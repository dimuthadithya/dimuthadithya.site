'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { ArrowUpRightIcon, List, X } from '@phosphor-icons/react';
import { TextAnimate } from './ui/text-animate';
import { PointerHighlight } from './ui/pointer-highlight';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Works', href: '#works' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const mobileLinks = [
  { label: 'Home', href: '#' },
  { label: 'Selected Works', href: '#works' },
  { label: 'Work Experience', href: '#experience' },
  { label: 'My Stack', href: '#stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navigation() {
  return (
    <div className='w-full flex items-center font-inconsolata'>
      {/* Brand */}
      <PointerHighlight className=''>
        <div className='flex flex-col text-sm capitalize'>
          <span className='hidden sm:block'>Dimuth Adithya</span>
          <span className='sm:hidden font-bold text-base tracking-tight'>DA</span>
          <span className='-mt-1 text-neutral-300 hidden sm:block'>Full stack developer</span>
        </div>
      </PointerHighlight>

      {/* Desktop pill nav */}
      <div className='flex-1 text-sm'>
        <NavigationMenu className='mx-auto hidden sm:flex'>
          <NavigationMenuList
            className='
              bg-neutral-50
              rounded-full
              px-2 py-1
              flex items-center
              gap-1
            '
          >
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.label}>
                <button
                  key={item.label}
                  className={`
                    px-4 py-1.5 text-sm rounded-full transition-all
                    ${index === 0
                      ? 'bg-black text-white shadow-sm'
                      : 'text-neutral-700 hover:bg-neutral-300'
                    }
                  `}
                >
                  <a href={item.href}>{item.label}</a>
                </button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop CTA */}
      <div className='hidden sm:block'>
        <span className='flex items-center font-inconsolata hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer'>
          <TextAnimate animation='scaleUp' by='text' delay={1}>
            <span>Let&apos;s Talk</span>
          </TextAnimate>
          <TextAnimate animation='scaleUp' by='text' delay={2}>
            <ArrowUpRightIcon />
          </TextAnimate>
        </span>
      </div>

      {/* Mobile hamburger */}
      <div className='sm:hidden ml-auto'>
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label='Open menu'
              className='flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors duration-200'
            >
              <List size={20} />
            </button>
          </SheetTrigger>

          <SheetContent
            side='right'
            showCloseButton={false}
            className='w-full sm:w-80 bg-neutral-950 border-l border-neutral-800 p-0 flex flex-col'
          >
            {/* Drawer header */}
            <div className='flex items-center justify-between px-6 pt-6 pb-4 border-b border-neutral-800'>
              <div className='flex flex-col'>
                <SheetTitle className='text-white text-sm font-medium tracking-tight font-inconsolata'>
                  Dimuth Adithya
                </SheetTitle>
                <span className='text-neutral-400 text-xs'>Full stack developer</span>
              </div>
              <SheetClose asChild>
                <button
                  aria-label='Close menu'
                  className='flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white transition-colors duration-200'
                >
                  <X size={18} />
                </button>
              </SheetClose>
            </div>

            {/* Nav links */}
            <nav className='flex-1 px-6 py-6 flex flex-col gap-1'>
              {mobileLinks.map((link, i) => (
                <SheetClose asChild key={link.label}>
                  <a
                    href={link.href}
                    className='group flex items-center justify-between py-3 border-b border-neutral-900 text-neutral-300 hover:text-white transition-colors duration-200'
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <span className='text-base font-inconsolata'>{link.label}</span>
                    <ArrowUpRightIcon
                      size={16}
                      className='opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400'
                    />
                  </a>
                </SheetClose>
              ))}
            </nav>

            {/* Drawer footer */}
            <div className='px-6 pb-8 pt-4 border-t border-neutral-800 flex flex-col gap-3'>
              <a
                href='mailto:dimuthadithya01@gmail.com'
                className='text-xs text-neutral-500 hover:text-white transition-colors duration-200 font-inconsolata'
              >
                dimuthadithya01@gmail.com
              </a>
              <div className='flex items-center gap-4'>
                {[
                  { label: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL },
                  { label: 'LinkedIn', href: '#' },
                  { label: 'Twitter', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xs text-neutral-600 hover:text-white transition-colors duration-200 font-inconsolata'
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navigation;
