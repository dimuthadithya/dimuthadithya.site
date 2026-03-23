'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavigationMenuDemo() {
  const words = ['web developer', 'problem solver', 'designer', 'creator'];

  return (
    <div className='flex items-center'>
      <NavigationMenu className='bg-black text-white px-6 py-4'>
        <NavigationMenuList className='gap-6'>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href='/'>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href='/about'>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href='/projects'>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href='/contact'>Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex-1 justify-end flex items-end me-20 text-sm text-neutral-300 hover:text-neutral-100 transition-colors duration-75'>
        Web Devloper
      </div>
    </div>
  );
}
