import { PERSONAL_INFO } from '@/lib/constants';

export function AboutSection() {
  return (
    <section id="about" className="mb-32 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-[#ccd6f6] mb-6 flex items-center">
        <span className="text-[#64ffda] mr-3 font-mono text-sm">01.</span>
        About Me
      </h2>
      <div className="max-w-3xl">
        <p className="text-gray-600 dark:text-[#8892b0] mb-4 leading-relaxed">
          {PERSONAL_INFO.description}
        </p>
        <p className="text-gray-600 dark:text-[#8892b0] mb-4 leading-relaxed">
          {PERSONAL_INFO.about}
        </p>
        <div className="mt-6">
          <p className="text-gray-600 dark:text-[#8892b0] mb-4">Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-[#8892b0] text-sm font-mono">
            <li className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              TypeScript
            </li>
            <li className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              React
            </li>
            <li className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              Next.js
            </li>
            <li className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              Node.js
            </li>
            <li className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              Tailwind CSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
