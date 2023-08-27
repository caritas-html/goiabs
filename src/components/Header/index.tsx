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

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={museoModerno.className}>
        <div
          id="mobile-header"
          className="flex justify-between items-center w-full h-24 bg-gray-700 opacity-95"
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
          <div>
            <h1 className="text-center text-3xl tracking-widest flex-nowrap">
              Eric Goiaba
            </h1>
          </div>
          <div className="h-full align-middle">
            <Hamburger />
          </div>
        </div>
      </header>
    </>
  );
}