import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function MiddleInfo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <div className="h-full w-full">
        {isMobile ? (
          <div className="h-full w-full object-cover bg-mid grayscale bg-mid-sm"></div>
        ) : (
          <Image
            src="/bg-mid-lg.png"
            alt="abstract-image"
            width={1980}
            height={300}
            className="h-full w-full object-contain "
          />
        )}
      </div>
    </>
  );
}
