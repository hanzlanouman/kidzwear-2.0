import { PersonIcon } from '@radix-ui/react-icons';
import { Rainbow } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  RiAccountCircleLine,
  RiHeart3Line,
  RiShoppingBag2Line,
} from 'react-icons/ri';
const NavLinks = () => {
  const links = [
    {
      name: 'Cart',
      icon: RiShoppingBag2Line,
    },
    {
      name: 'Wish List',
      icon: RiHeart3Line,
    },
    {
      name: 'Accounts',
      icon: RiAccountCircleLine,
    },
  ];

  return (
    <nav className=' gap-x-6 items-center bg-black rounded-full p-2 w-48 justify-center md:flex hidden'>
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <Link key={index} href='/' className='text-primary'>
            <Icon size={26} />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
