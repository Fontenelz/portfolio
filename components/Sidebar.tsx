'use client';

import { useState, useEffect } from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  Envelope,
} from '@phosphor-icons/react/dist/ssr';
import { PERSONAL_INFO, NAVIGATION, SOCIAL_LINKS } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';

const SOCIAL_ICONS = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
  twitter: XLogo,
  email: Envelope,
} as const;

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION.map((nav) => nav.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-800 dark:text-slate-200 sm:text-xl">{PERSONAL_INFO.title}</h2>
        </div>

        <p className="text-sm text-gray-600 dark:text-[#8892b0] mb-12 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        <nav className="space-y-2 hidden lg:block">
          {NAVIGATION.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block text-sm font-medium transition-colors ${isActive
                  ? 'text-[#64ffda]'
                  : 'text-gray-600 dark:text-[#8892b0] hover:text-[#64ffda]'
                  }`}
              >
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <span className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1 h-1 bg-[#64ffda] rounded-full" />
                  )}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((link) => {
          const Icon = SOCIAL_ICONS[link.icon as keyof typeof SOCIAL_ICONS];
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] dark:text-[#8892b0] text-gray-600 hover:text-[#64ffda] dark:hover:text-[#64ffda] hover:text-[#64ffda] transition-colors"
              aria-label={link.id}
            >
              <Icon size={20} />
            </a>
          );
        })}
        <div className="w-px h-5 bg-[#233554] dark:bg-[#233554] bg-gray-300" />
        <ThemeToggle />
      </div>
    </aside>
  );
}

