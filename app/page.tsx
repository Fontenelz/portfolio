import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen px-6 lg:px-12 max-w-7xl mx-auto">
      <Sidebar />
      <div className="ml-16 mt-12">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}

