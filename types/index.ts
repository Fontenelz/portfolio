export interface Person {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface SocialLink {
  id: 'github' | 'instagram' | 'twitter' | 'linkedin' | 'email';
  href: string;
  delay: number;
  icon: string;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Article {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image?: string;
  slug: string;
}
