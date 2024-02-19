import React from 'react';
import Logo from './Logo';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='bg-zinc-800 py-4'>
      <div className=' container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div>
          <Logo />
        </div>
        {/* Search */}
        <div>
          <Input
            type='text'
            placeholder='Search'
            className='w-96 rounded-full xl:block hidden'
          />
        </div>
        {/* NavLinks */}
        <div>
          <NavLinks />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
