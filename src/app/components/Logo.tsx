'use client';
import React from 'react';
import Image from 'next/image';

export const Logo = () => (
  <Image
    src='/logo.png'
    alt='logo'
    width={98}
    height={98}
    className='cursor-pointer'
  />
);
