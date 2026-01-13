'use client';

import {
  DiscordLogo,
  GithubLogo,
  Heart,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr';
import { SocialButton } from '@/components/SocialButton';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Envelope } from '@phosphor-icons/react';

const SOCIAL_ICONS = {
  github: GithubLogo,
  instagram: InstagramLogo,
  twitter: XLogo,
  linkedin: LinkedinLogo,
  discord: DiscordLogo,
  email: Envelope,
} as const;

export function Footer() {
  return (
    <footer className="flex flex-col h-[60vh]">
      <div className="flex justify-between h-full items-center flex-col mx-auto gap-3">
        <div className="text-white md:fixed right-10 bottom-0 md:flex items-center flex-col after:content-[''] after:md:w-[1px] after:md:h-24 after:mx-auto after:bg-white md:gap-8 hidden">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="font-bold text-base md:visible [writing-mode:vertical-lr]"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="text-center items-center max-w-md flex flex-col px-6">
          <span className="text-zinc-500 font-normal">Thanks for scrolling.</span>
          <h2 className="text-4xl font-semibold my-3 text-zinc-100">
            Get In Touch
          </h2>
          <span className="text-zinc-500 text-lg">
            I&apos;m looking for new opportunities at the moment, my inbox is
            always open. If you have a question or just want to say hi, I will
            try my best to answer it for you!
          </span>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="h-12 w-40 border mt-12 font-semibold text-[#a8b2d1] border-[#a8b2d1] rounded-lg flex items-center justify-center"
          >
            Say hi
          </a>
        </div>

        <div>
          <div className="justify-center items-center flex md:flex-col flex-row md:bottom-0 md:left-10 md:fixed">
            <div className="flex md:flex-col w-full justify-between items-center after:md:content-[''] after:md:w-[1px] after:h-24 after:md:mx-auto after:bg-[#a8b2d1] md:gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.id];
                return (
                  <SocialButton
                    key={link.id}
                    href={link.href}
                    delay={link.delay}
                  >
                    <Icon size={24} />
                  </SocialButton>
                );
              })}
            </div>
          </div>
          <span className="flex items-center gap-1 justify-center text-[#8892b0] mb-8">
            Build with <Heart fill="red" size={20} /> by Matheus
          </span>
        </div>
      </div>
    </footer>
  );
}

