import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MobileNav } from '@/components/MobileNav';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PERSONAL_INFO, SITE_URL, SEO_KEYWORDS, SOCIAL_LINKS } from '@/lib/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSONAL_INFO.name} — Software Engineer`,
    template: `%s — ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: PERSONAL_INFO.name, url: SITE_URL }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: `${PERSONAL_INFO.name} — Portfolio`,
    title: `${PERSONAL_INFO.name} — Software Engineer`,
    description: PERSONAL_INFO.description,
    images: [
      {
        url: '/profile.png',
        width: 1616,
        height: 2327,
        alt: `${PERSONAL_INFO.name} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} — Software Engineer`,
    description: PERSONAL_INFO.description,
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/icon/site.webmanifest',
  icons: {
    icon: [
      { url: '/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/icon/apple-touch-icon.png',
    other: [
      { rel: 'mask-icon', url: '/favicon.ico' },
    ],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL_INFO.name,
  url: SITE_URL,
  jobTitle: PERSONAL_INFO.title,
  email: PERSONAL_INFO.email,
  sameAs: SOCIAL_LINKS.filter((l) => l.id !== 'email').map((l) => l.href),
  knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Laravel', 'PHP', 'Vue.js'],
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
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <MobileNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
