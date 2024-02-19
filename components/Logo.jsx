import React from 'react';
import { Ubuntu } from 'next/font/google';
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['700'] });
const Logo = () => {
  return (
    <div>
      <h1 className={`text-3xl text-primary font-bold ${ubuntu.className}`}>
        KidzWear
      </h1>
    </div>
  );
};

export default Logo;
