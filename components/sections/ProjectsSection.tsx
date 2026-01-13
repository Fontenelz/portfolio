import { PROJECTS, ARTICLES } from '@/lib/constants';
import Link from 'next/link';
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react/dist/ssr';

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-[#ccd6f6] mb-12 flex items-center">
        <span className="text-[#64ffda] mr-3 font-mono text-sm">03.</span>
        Some Things I&apos;ve Built
      </h2>
      <div className="space-y-12 mb-16">
        {PROJECTS.filter((p) => p.featured).map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="relative h-64 bg-gray-100 dark:bg-[#112240] rounded-lg overflow-hidden group border border-gray-300 dark:border-[#233554]">
                <div className="absolute inset-0 bg-[#64ffda]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-[#8892b0] p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <p className="text-sm">{project.title}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-right lg:text-left">
                <p className="text-[#64ffda] text-sm font-mono mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-[#ccd6f6] mb-4">
                  {project.title}
                </h3>
                <div className="bg-gray-100 dark:bg-[#112240] p-6 rounded-lg mb-4 shadow-lg">
                  <p className="text-gray-600 dark:text-[#8892b0] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mb-4 justify-end lg:justify-start">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-600 dark:text-[#8892b0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-end lg:justify-start">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-[#8892b0] hover:text-[#64ffda] transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubLogo size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-[#8892b0] hover:text-[#64ffda] transition-colors"
                      aria-label="Live site"
                    >
                      <ArrowSquareOut size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-900 dark:text-[#ccd6f6] mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.filter((p) => !p.featured).map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-[#112240] p-6 rounded-lg hover:translate-y-[-4px] transition-transform border border-gray-200 dark:border-transparent"
            >
              <div className="flex justify-between items-start mb-4">
                <ArrowSquareOut
                  size={20}
                  className="text-[#64ffda] flex-shrink-0"
                />
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-[#8892b0] hover:text-[#64ffda] transition-colors"
                  >
                    <GithubLogo size={18} />
                  </a>
                )}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-[#ccd6f6] mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-[#8892b0] mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-gray-600 dark:text-[#8892b0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-900 dark:text-[#ccd6f6] mb-8">Latest Articles</h3>
        <div className="space-y-6 mb-8">
          {ARTICLES.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="flex gap-6 items-start group cursor-pointer"
            >
              <div className="text-[#64ffda] font-mono text-sm min-w-[60px]">
                {article.year}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors mb-1">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-[#8892b0]">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[#64ffda] font-mono text-sm hover:gap-3 transition-all"
          >
            View All Articles
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
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/archive"
          className="inline-flex items-center gap-2 text-[#64ffda] font-mono text-sm hover:gap-3 transition-all"
        >
          View Full Project Archive
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
    </section>
  );
}

