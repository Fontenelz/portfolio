import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen px-6 lg:px-12 py-24 lg:py-0 max-w-7xl mx-auto">
      <Sidebar />
      <div className="lg:ml-16 lg:mt-12 mt-12">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}

