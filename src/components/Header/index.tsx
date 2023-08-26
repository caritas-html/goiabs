import React from 'react';
import Hamburger from '../Menus/Hamburger';
import Image from 'next/image';
import { Nabla } from 'next/font/google';

const nabla = Nabla({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Header() {
  return (
    <>
      <header>
        <div
          id="mobile-header"
          className="flex justify-between items-center w-full h-16 bg-gray-700 opacity-95"
        >
          <div id="logo-header">
            <Image
              className="min-w-12 min-h-12 h-16 w-16 rounded-full mx-4 cursor-pointer"
              src="/images/logo.png"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
          <nav id="nav-header" className="flex justify-between items-center">
            <h1 className="text-center text-3xl tracking-widest flex-nowrap">
              <span className={nabla.className}>Eric Goiaba</span>
            </h1>
          </nav>
          <Hamburger />
        </div>
      </header>
    </>
  );
}
