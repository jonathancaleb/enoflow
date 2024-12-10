'use client';

import { forwardRef, useState } from 'react';
import Link from 'next/link';

import { ChevronRightIcon, MenuIcon } from 'lucide-react';

import { constants, features } from '@/constants';
import { cn } from '@/utils/cn';
import { Button } from '@/primitives/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/primitives/navigation-menu';

const ListItem = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            'flex select-none items-start gap-2 rounded-md border border-transparent px-4 py-2 leading-none no-underline outline-none transition-colors hover:border-gray-300 hover:bg-gray-200 focus:border-gray-300 focus:bg-gray-200',
            className,
          )}
          {...props}
        >
          <div className="size-[20px]">{icon}</div>
          <div className="space-y-1">
            <div className="text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm">{children}</p>
          </div>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={cn('w-full py-6')}>
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-medium text-black">enoflow</span>
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-3">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px]">
                  {features(18).map((feature) => (
                    <ListItem
                      key={feature.title}
                      title={feature.title}
                      icon={feature.icon}
                    >
                      {feature.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'text-base')}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={constants.github_repo}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(navigationMenuTriggerStyle(), 'text-base')}
              >
                Contribute
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={constants.discord}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(navigationMenuTriggerStyle(), 'text-base')}
              >
                Discord
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" asChild>
            <Link href="/sign-in">
              Get started <ChevronRightIcon size={18} />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="block md:hidden"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        >
          <MenuIcon size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className="block w-full bg-gray-100 p-4 md:hidden">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/early-access">Early access</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a
                href={constants.github_repo}
                target="_blank"
                rel="noreferrer noopener"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href={constants.discord}
                target="_blank"
                rel="noreferrer noopener"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
