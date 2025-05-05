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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const menus = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Tours & Activities',
    href: '#',
    subMenu: [
      {
        label: 'Puerto Princesa',
        href: '/puerto-princesa',
        description: 'Explore Puerto Princesa',
      },
      {
        label: 'El Nido',
        href: '/el-nido',
        description: 'Explore El Nido',
      },
      {
        label: 'Coron Island',
        href: '/coron',
        description: 'Explore Coron Island',
      },
      {
        label: 'Port Barton',
        href: '/port-barton',
        description: 'Explore Port Barton',
      },
      {
        label: 'Balabac Island',
        href: '/balabac',
        description: 'Explore Balabac Island',
      },
      {
        label: 'Transfers',
        href: '/transfers',
        description: 'Book your transfer with us',
      },
    ],
  },
  {
    label: 'Expeditions',
    href: '/expeditions',
  },
  {
    label: 'About us',
    href: '/#',
    subMenu: [
      {
        label: 'Optimal Travel Services',
        href: '/about-us',
        description: 'Learn more about us',
      },
      {
        label: 'Refund Policy',
        href: '/refund-policy',
        description: 'Our refund policy',
      },
      {
        label: 'Contact us',
        href: '/contact-us',
        description: 'Reach us now',
      },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <header className='bg-white w-full fixed z-50 shadow-2xs'>
      <nav className='max-w-3xl mx-auto flex items-center justify-between px-2'>
        <div className='relative h-12 w-12 shrink-0'>
          <Link href={'/'}>
            <Image src={'/optimal-logo.png'} fill alt='optimal logo' />
          </Link>
        </div>
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
                      <ul className='grid w-[400px] gap-2 p-2 md:w-[300px] md:grid-cols-2 lg:w-[450px] '>
                        {menu.subMenu.map((submenu) => (
                          <ListItem
                            key={submenu.label}
                            title={submenu.label}
                            href={submenu.href}
                            description={submenu.description}
                          />
                        ))}
                      </ul>
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
            <Accordion
              type='multiple'
              key={menu.label}
              className='space-y-0 text-lg'
            >
              {menu.subMenu ? (
                <AccordionItem value={menu.label}>
                  <AccordionTrigger className='px-4'>
                    <p>{menu.label}</p>
                  </AccordionTrigger>

                  <AccordionContent className='pl-4' key={menu.label}>
                    <ul className='w-full'>
                      {menu.subMenu?.map((menu) => (
                        <li className='truncate' key={menu.label}>
                          <Button asChild variant={'link'}>
                            <Link
                              onClick={onClose}
                              key={menu.href}
                              href={menu.href}
                              className='text-slate-500'
                            >
                              {menu.label}
                            </Link>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <AccordionItem value={menu.label}>
                  <Link
                    onClick={onClose}
                    href={menu.href}
                    className={cn(buttonVariants({ variant: 'link' }))}
                  >
                    {menu.label}
                  </Link>
                </AccordionItem>
              )}
            </Accordion>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  );
};

const ListItem = ({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) => {
  return (
    <li className=''>
      <NavigationMenuLink key={href} asChild>
        <Link href={href} className='truncate leading-none'>
          {title}
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
