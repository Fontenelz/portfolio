'use client';

import { FlipWords } from '@/components/ui/flip-words';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { FLIP_WORDS, PEOPLE } from '@/lib/constants';

export function HeroSection() {
  return (
    <div className="md:h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]" />

      <div className="h-[40rem] flex flex-col justify-center px-4">
        <h1 className="text-[44px] md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
          Build
          <FlipWords words={FLIP_WORDS} /> <br />
          websites with Aceternity UI
        </h1>
        <h2 className="relative text-sm sm:text-xl text-zinc-500 dark:text-zinc-300 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose">
          Copy paste the most trending components and use them in your websites
          without having to worry about styling and animations.
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
          <button
            type="button"
            className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-xl p-px text-[10px] sm:text-xs font-semibold leading-6 text-neutral-700 dark:text-neutral-200 inline-block w-fit mb-4"
          >
            <div className="relative flex space-x-2 items-center z-10 rounded-md bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-green-400">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-base font-normal">
                Available
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>

          <div className="flex flex-row mb-10 w-full items-center">
            <AnimatedTooltip items={PEOPLE} />
            <div className="ml-8">
              <span>
                <strong>100+ </strong> <br /> Satisfied clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

