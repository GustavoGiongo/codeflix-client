'use client';
import React from 'react';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';
import { useScroll } from '../hooks/useScroll';
import { Logo } from './Logo';

export default function Header() {
  const isScrolled = useScroll();
  return (
    <header
      className={`${isScrolled && 'bg-black'} py-4lg:px-10  fixed  top-0  z-50 flex w-full items-center justify-between px-4 transition-all lg:py-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
