'use client';

import { useState } from 'react';
import { List, X } from '@phosphor-icons/react/dist/ssr';
import { NAVIGATION } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="lg:hidden fixed h-14 px-4 z-50 flex items-center gap-2 backdrop-blur-sm w-full justify-end">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-900 dark:text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-white/80 dark:bg-[#0a192f]/80 z-40"
            onClick={() => setIsOpen(false)}
          />
          <nav className="lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-[#112240] border-l border-gray-200 dark:border-[#233554] z-50 p-8 transform transition-transform shadow-lg">
            <div className="flex flex-col gap-6 mt-12">
              {NAVIGATION.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-lg font-medium text-gray-900 dark:text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}

