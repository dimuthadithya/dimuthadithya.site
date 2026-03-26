import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { TextAnimate } from './ui/text-animate';
import { PointerHighlight } from './ui/pointer-highlight';

const navItems = ['Home', 'Projects', 'Framer', 'Contact', 'Resume'];

function Navigation() {
  return (
    <div className='w-full flex items-center font-inconsolata'>
      <PointerHighlight className=''>
        <div className='flex flex-col text-sm capitalize'>
          <span>Dimuth Adithya</span>
          <span className='-mt-1 text-neutral-300'>Full stack developer</span>
        </div>
      </PointerHighlight>
      <div className='flex-1 text-sm font-'>
        <NavigationMenu className={'mx-auto'}>
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
              <NavigationMenuItem key={item}>
                <button
                  className={`
                    px-4 py-1.5 text-sm rounded-full transition-all
                    ${
                      index === 0
                        ? 'bg-black text-white shadow-sm'
                        : 'text-neutral-700 hover:bg-neutral-300'
                    }
                  `}
                >
                  {item}
                </button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <span className='flex items-center font-inconsolata hover:opacity-100 transition-opacity hover:text-green-400 duration-200 cursor-pointer'>
          <TextAnimate animation='scaleUp' by='text' delay={1}>
            <span>Let&apos;s Talk</span>
          </TextAnimate>
          <TextAnimate animation='scaleUp' by='text' delay={2}>
            <ArrowUpRightIcon />
          </TextAnimate>
        </span>
      </div>
    </div>
  );
}

export default Navigation;
