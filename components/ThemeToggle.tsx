'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from '@phosphor-icons/react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-600 dark:text-[#8892b0] hover:text-[#64ffda] transition-colors p-2 rounded-lg hover:bg-white/[0.05] dark:hover:bg-white/[0.05]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={20} weight="fill" />
      ) : (
        <Moon size={20} weight="fill" />
      )}
    </button>
  );
}