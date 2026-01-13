import { EXPERIENCES } from '@/lib/constants';

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-[#ccd6f6] mb-12 flex items-center">
        <span className="text-[#64ffda] mr-3 font-mono text-sm">02.</span>
        Where I&apos;ve Worked
      </h2>
      <div className="max-w-4xl">
        <div className="relative pl-4">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-[#233554]" />
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative pl-8">
                <div className="absolute left-[-20px] top-1 w-3 h-3 bg-[#64ffda] rounded-full border-4 border-white dark:border-[#0a192f]" />
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-[#ccd6f6]">
                      {exp.title}
                    </h3>
                    <span className="text-[#64ffda] text-sm font-mono">
                      @ {exp.company}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-[#8892b0] font-mono mb-3">
                    {exp.period}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-[#8892b0] mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-[#64ffda] bg-gray-100 dark:bg-[#112240] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#64ffda] font-mono text-sm hover:gap-3 transition-all"
          >
            View Full Résumé
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

