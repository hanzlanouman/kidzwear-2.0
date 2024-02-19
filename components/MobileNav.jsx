import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className='md:hidden block text-white'>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={28} />
        </SheetTrigger>
        <SheetContent className='pt-20'>
          <SheetHeader>
            <SheetTitle>
              <h1 className='text-2xl font-bold'>KidzWear</h1>
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
