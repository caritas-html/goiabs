import React, { useState } from 'react';

export default function MiddleInfo() {
  const [isGrayscale, setIsGrayscale] = useState(false);

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center w-full bg-mid"></div>
  );
}
