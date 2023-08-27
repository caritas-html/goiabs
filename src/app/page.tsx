'use client';

import Header from '@/components/Header';
import MiddleInfo from '@/components/MiddleInfo';

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex h-screen w-screen">
        <MiddleInfo />
      </main>
    </>
  );
}
