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

export const menus = [
  {
    label: 'Puerto Princesa',
    href: '/#puerto-princesa',
    subMenu: [
      {
        label: 'Day Tour',
        href: '#',
        subMenu: [
          {
            label: 'package 1',
            href: '/puerto-princesa/id',
          },
          {
            label: 'package 2',
            href: '/puerto-princesa/id',
          },
          {
            label: 'package 3 and packagee 4',
            href: '/puerto-princesa/id',
          },
          {
            label: 'package 4',
            href: '/puerto-princesa/id',
          },
        ],
      },
      {
        label: 'Package Tour',
        href: '#',
        subMenu: [
          {
            label: 'package 1',
            href: '/puerto-princesa/id',
          },
          {
            label: 'package 2',
            href: '/puerto-princesa/id',
          },
          {
            label: 'package 3 and packagee 4',
            href: '/puerto-princesa/id',
          },
          {
            label: 'package 4',
            href: '/puerto-princesa/id',
          },
        ],
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
        subMenu: [
          {
            label: 'package1',
            href: '/',
          },
        ],
      },
      {
        label: 'Package Tour',
        href: '#',
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
        subMenu: [
          {
            label: 'package1',
            href: '/',
          },
        ],
      },
      {
        label: 'Package Tour',
        href: '#',
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
        subMenu: [
          {
            label: 'package1',
            href: '/',
          },
        ],
      },
      {
        label: 'Package Tour',
        href: '#',
      },
    ],
  },
  {
    label: 'Transfers',
    href: '/transfers',
  },
];

export const Navbar = () => {
  return (
    <header className='bg-white w-full fixed z-50 shadow-2xs'>
      <nav className='max-w-3xl mx-auto flex items-center justify-between '>
        <div className='relative h-12 w-12 shrink-0'>
          <Image src={'/optimal-logo.png'} fill alt='optimal logo' />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.href}>
                {menu.subMenu ? (
                  <>
                    <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className='grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
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
      </nav>
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
      <p className='text-base font-medium leading-none p-2 text-amber-600'>
        {title}
      </p>
      <div className='grid grid-cols-2'>
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
