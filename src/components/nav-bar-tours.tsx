'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { Button, buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle } from './ui/sheet';
import { cn } from '@/lib/utils';
import { tours } from '@/data/tours';
import { transfers } from '@/data/transfers';
import { expeditions } from '@/data/expeditions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Abel } from 'next/font/google';

const splitJoin = (text: string) => {
  return text.toLowerCase().split(' ').join('-');
};

const generateMenu = (type: string, destination: string) => {
  return tours
    .filter(
      (tour) =>
        tour.type.toLowerCase() === type.toLowerCase() &&
        tour.destination.toLowerCase() === destination.toLowerCase()
    )
    .map((tour) => ({
      label: tour.title,
      href: `/${splitJoin(tour.destination)}/${tour.id}`,
    }));
};

const transferNav = () => {
  return transfers.map((transfer) => ({
    label: transfer.title,
    href: `/transfers/${transfer.id}`,
  }));
};

export const menus = [
  {
    label: 'Puerto Princesa',
    href: '/#puerto-princesa',
    subMenu: [
      {
        label: 'Day Tour',
        href: '#',
        subMenu: generateMenu('day tour', 'puerto princesa'),
      },
      {
        label: 'Package Tour',
        href: '#',
        subMenu: generateMenu('package tour', 'puerto princesa'),
      },
    ],
  },
  {
    label: 'El Nido',
    href: '/el-nido',
    subMenu: [
      {
        label: 'Day Tour',
        href: '#',
        subMenu: generateMenu('day tour', 'el nido'),
      },
      {
        label: 'Package Tour',
        href: '#',
        subMenu: generateMenu('package tour', 'el nido'),
      },
    ],
  },
  {
    label: 'Coron',
    href: '/coron',
    subMenu: [
      {
        label: 'Day Tour',
        href: '#',
        subMenu: generateMenu('day tour', 'coron'),
      },
      {
        label: 'Package Tour',
        href: '#',
        subMenu: generateMenu('package tour', 'coron'),
      },
    ],
  },
  {
    label: 'Port Barton',
    href: '/port-barton',
    subMenu: [
      {
        label: 'Day Tour',
        href: '#',
        subMenu: generateMenu('day tour', 'port barton'),
      },
      {
        label: 'Package Tour',
        href: '#',
        subMenu: generateMenu('package tour', 'port barton'),
      },
    ],
  },
  {
    label: 'Balabac',
    href: '/balabac',
    subMenu: [
      {
        label: 'Day Tour',
        href: '#',
        subMenu: generateMenu('day tour', 'balabac'),
      },
      {
        label: 'Package Tour',
        href: '#',
        subMenu: generateMenu('package tour', 'balabac'),
      },
    ],
  },
  {
    label: 'Transfers',
    href: '',
    subMenu: [
      {
        label: 'Transfer services',
        href: '/#transfers',
        subMenu: transferNav(),
      },
      {
        label: 'Expeditions',
        href: '#',
        subMenu: expeditions.map((expe) => ({
          label: expe.title,
          href: `/expeditions/${expe.id}`,
        })),
      },
    ],
  },
  {
    label: 'About us',
    href: '/#about-us',
    subMenu: [
      {
        label: 'Optimal Travel Services',
        href: '/#transfers',
        subMenu: [
          {
            label: 'About us',
            href: '/about-us',
          },
          {
            label: 'Contact us',
            href: '/contact-us',
          },
        ],
      },
      {
        label: 'Policy',
        href: '#',
        subMenu: [{ label: 'Refund Policy', href: '/refund-policy' }],
      },
    ],
  },
];

export const NavbarTours = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <header className='bg-white w-full fixed z-50 shadow-2xs'>
      <nav className='max-w-5xl mx-auto flex items-center justify-between px-2'>
        <Link href={'/'} className='relative h-12 w-12 shrink-0'>
          <Image src={'/optimal-logo.png'} fill alt='optimal logo' />
        </Link>

        <Button className='md:hidden' onClick={() => setIsOpen(true)}>
          <Menu />
        </Button>
        <NavigationMenu className='hidden md:block'>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.href}>
                {menu.subMenu ? (
                  <>
                    <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className='grid w-[400px] gap-3 py-2 px-4 md:w-[500px] md:grid-cols-2 lg:w-[790px] '>
                        {menu.subMenu.map((submenu) => (
                          <ListItem
                            key={submenu.label}
                            title={submenu.label}
                            submenu={submenu?.subMenu || []}
                          />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={menu.href}>{menu.label}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* mobile navigation */}
      </nav>
      <Sheet onOpenChange={onClose} open={isOpen}>
        <SheetContent className='p-4 overflow-y-auto'>
          <SheetTitle className='tracking-wide text-[#4FAFAF] uppercase'>
            Optimal Travel Services
          </SheetTitle>

          {menus.map((menu) => (
            <Accordion type='multiple' key={menu.label} className='space-y-0'>
              <AccordionItem value={menu.label}>
                <AccordionTrigger className='bg-[#4FAFAF]/50 px-2 '>
                  <p>{menu.label}</p>
                </AccordionTrigger>
                {menu.subMenu?.map((menu) => (
                  <AccordionContent className='' key={menu.label}>
                    {/* <p key={menu.href} className='font-medium'>
                    {menu.label}
                    </p> */}
                    <ul className='w-full'>
                      {menu.subMenu?.map((menu) => (
                        <li className='truncate' key={menu.label}>
                          <Link
                            className={cn(
                              buttonVariants({ variant: 'link' }),
                              'text-muted-foreground'
                            )}
                            onClick={onClose}
                            key={menu.href}
                            href={menu.href}
                          >
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  );
};

const ListItem = ({
  submenu,
  title,
}: {
  title: string;
  submenu: { label: string; href: string }[];
}) => {
  return (
    <div>
      <p className='text-base font-medium leading-none p-2 text-[#4FAFAF]'>
        {title}
      </p>
      <div className=''>
        {submenu.map((sub) => (
          <NavigationMenuLink key={sub.label} asChild>
            <ul className='flex gap-2'>
              <ul className='flex gap-2'>
                <Link href={sub.href} className='truncate'>
                  {sub.label}
                </Link>
              </ul>
            </ul>
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  );
};
