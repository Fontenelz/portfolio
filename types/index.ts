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
  id: 'github' | 'instagram' | 'twitter' | 'linkedin' | 'discord';
  href: string;
  delay: number;
}

