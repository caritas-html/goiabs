'use client';

import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
