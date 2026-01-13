export function Footer() {
  return (
    <footer className="mb-12 text-center">
      <p className="text-sm text-gray-600 dark:text-[#8892b0] leading-relaxed">
        Loosely designed in Figma and coded in Visual Studio Code by yours
        truly. Built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda] hover:underline"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda] hover:underline"
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda] hover:underline"
        >
          Vercel
        </a>
        . All text is set in the Inter typeface.
      </p>
    </footer>
  );
}

