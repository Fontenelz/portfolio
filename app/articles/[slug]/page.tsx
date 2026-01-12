import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/lib/constants';
import { ArrowLeft, Calendar, Clock } from '@phosphor-icons/react/dist/ssr';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="lg:ml-[300px] min-h-screen px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-[#64ffda] font-mono text-sm mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Articles
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#64ffda] bg-[#0a192f] px-3 py-1 rounded">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-[#8892b0]">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {article.year}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#ccd6f6] mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-[#8892b0] leading-relaxed">
              {article.description}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-[#112240] border border-[#233554] rounded-lg p-8">
              <div className="text-[#8892b0] leading-relaxed space-y-4">
                <p>
                  This is a placeholder article content. In a real application,
                  you would fetch the full article content from a CMS, markdown
                  files, or a database.
                </p>
                <p>
                  The article &quot;{article.title}&quot; would contain the full
                  content here, formatted with proper markdown or HTML.
                </p>
                <h2 className="text-2xl font-bold text-[#ccd6f6] mt-8 mb-4">
                  Introduction
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <h2 className="text-2xl font-bold text-[#ccd6f6] mt-8 mb-4">
                  Main Content
                </h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <h2 className="text-2xl font-bold text-[#ccd6f6] mt-8 mb-4">
                  Conclusion
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

