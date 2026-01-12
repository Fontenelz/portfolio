import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import { MobileNav } from '@/components/MobileNav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matheus Oliveira - Portfolio',
  description:
    'Portfolio of Matheus Oliveira, a Front End Engineer who builds accessible, pixel-perfect digital experiences for the web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a192f] text-white`}>
        <MobileNav />
        {children}
      </body>
    </html>
  );
}

