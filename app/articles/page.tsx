import Link from 'next/link';
import { ARTICLES } from '@/lib/constants';
import { ArrowLeft, Calendar, Clock } from '@phosphor-icons/react/dist/ssr';

export default function ArticlesPage() {
  const articlesByYear = ARTICLES.reduce(
    (acc, article) => {
      if (!acc[article.year]) {
        acc[article.year] = [];
      }
      acc[article.year].push(article);
      return acc;
    },
    {} as Record<string, typeof ARTICLES>,
  );

  const sortedYears = Object.keys(articlesByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <main className="lg:ml-[300px] min-h-screen px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#64ffda] font-mono text-sm mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#ccd6f6] mb-4 flex items-center">
            <span className="text-[#64ffda] mr-3 font-mono text-sm">04.</span>
            Articles
          </h1>
          <p className="text-[#8892b0] text-lg leading-relaxed">
            A collection of articles, tutorials, and thoughts on web development,
            design, and technology.
          </p>
        </div>

        <div className="space-y-12">
          {sortedYears.map((year) => (
            <div key={year}>
              <h2 className="text-2xl font-bold text-[#ccd6f6] mb-6 font-mono">
                {year}
              </h2>
              <div className="space-y-6">
                {articlesByYear[year].map((article) => (
                  <article
                    key={article.id}
                    className="group bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#64ffda] transition-all hover:translate-y-[-2px]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-[#64ffda] bg-[#0a192f] px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <div className="flex items-center gap-4 text-xs text-[#8892b0]">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {article.year}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-[#8892b0] leading-relaxed mb-4">
                          {article.description}
                        </p>
                        <Link
                          href={`/articles/${article.slug}`}
                          className="inline-flex items-center gap-2 text-[#64ffda] font-mono text-sm hover:gap-3 transition-all"
                        >
                          Read Article
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
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {ARTICLES.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#8892b0]">No articles found.</p>
          </div>
        )}
      </div>
    </main>
  );
}

