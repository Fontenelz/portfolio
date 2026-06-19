import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MobileNav } from '@/components/MobileNav';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PERSONAL_INFO } from '@/lib/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} - Portfolio`,
  description: PERSONAL_INFO.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#0a192f] text-gray-900 dark:text-[#ccd6f6] transition-colors`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <MobileNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

