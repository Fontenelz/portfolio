import { ReactNode } from 'react';

interface SocialButtonProps {
  children: ReactNode;
  href: string;
  delay: number;
}

export function SocialButton({ children, href, delay }: SocialButtonProps) {
  return (
    <a
      className="rounded-md w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Social media link`}
    >
      {children}
    </a>
  );
}

