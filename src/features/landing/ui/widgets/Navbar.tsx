import { Text } from '@/components/atoms/text';
import Link from 'next/link';
import React from 'react';
import NavbarLink from '../components/NavbarLink';

function Navbar() {
  return (
    <nav className="fixed top-6 w-full flex justify-center gap-4 z-20">
      <div className="flex bg-white/40 backdrop-blur-xs px-14 py-5 rounded-full gap-10">
        <NavbarLink href={''} text={'Welcome'} />
        <NavbarLink href={''} text={'What I Build'} />
        <NavbarLink href={''} text={'Systems I’ve Built'} />
        <NavbarLink href={''} text={'Architecture & Thinking'} />
        <NavbarLink href={''} text={'My experience'} />
        <NavbarLink href={''} text={'Toolbox'} />
      </div>
      <div className="bg-brand-400/40 backdrop-blur-xs px-14 py-5 rounded-full">
        <Text
          className="txt-primary_on-brand"
          fontWeight={'medium'}
          fontSize={'md'}
        >
          Contact Me
        </Text>
      </div>
    </nav>
  );
}

export default Navbar;
