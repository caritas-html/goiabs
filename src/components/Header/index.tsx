import React, { useState } from 'react';
import Image from 'next/image';
import { MuseoModerno } from 'next/font/google';
import Hamburger from '@/components/Hamburger';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`z-50 fixed ${museoModerno.className}`}>
        <div
          id="mobile-header"
          className="flex justify-between items-center w-full bg-header h-24 opacity-95 px-4 "
        >
          <div id="logo-header">
            <Image
              className="min-w-12 min-h-12 h-16 w-16 rounded-full mx-2 cursor-pointer"
              src="/images/logo.png"
              alt="logo"
              width={90}
              height={90}
            />
          </div>
          <div>
            <h1 className="text-center text-3xl tracking-widest flex-nowrap">
              Eric Goiaba
            </h1>
          </div>
          <div>
            <Hamburger />
          </div>
        </div>
      </header>
    </>
  );
}
