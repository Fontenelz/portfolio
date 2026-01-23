export const PERSONAL_INFO = {
  name: 'Matheus Fontenele',
  title: 'Software Engineer',
  tagline: 'Designs, develops, tests, and maintains systems, applications, and software, applying engineering principles to ensure quality, organization, and efficiency, going beyond simple programming to focus on architecture, security, scalability, and continuous maintenance, working in collaboration with multidisciplinary teams to deliver complete digital solutions.',
  email: 'matheus.fontenele@icloud.com',
  description: `I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. Currently, I'm a Software Engineer specializing in accessibility and modern web technologies.`,
  about: `I've worked with advertising agencies and large corporations to start-ups and small digital product studios. When I'm not at the computer, I'm usually climbing, playing sports, hanging out with friends, or exploring new technologies.`,
} as const;

export const NAVIGATION = [
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'articles', label: 'ARTICLES', href: '/articles' },
] as const;

export const SOCIAL_LINKS = [
  {
    id: 'github',
    href: 'https://github.com/MatheusFontenele',
    icon: 'github',
    delay: 0.1,
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com',
    icon: 'linkedin',
    delay: 0.2,
  },
  {
    id: 'instagram',
    href: 'https://instagram.com',
    icon: 'instagram',
    delay: 0.3,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com',
    icon: 'twitter',
    delay: 0.4,
  },
  {
    id: 'email',
    href: 'mailto:matheus.fontenele@icloud.com',
    icon: 'email',
    delay: 0.5,
  },
] as const;

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  // {
  //   id: '1',
  //   period: '2024 — PRESENT',
  //   title: 'Senior Frontend Engineer, Accessibility',
  //   company: 'Klaviyo',
  //   description:
  //     'Focus on web accessibility and UI components. Building accessible, scalable front-end experiences.',
  //   technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  // },
  // {
  //   id: '2',
  //   period: '2018 — 2024',
  //   title: 'Lead Engineer',
  //   company: 'Upstatement',
  //   description:
  //     'Built websites, design systems, and mobile apps for various clients. Led development teams and mentored junior developers.',
  //   technologies: [
  //     'JavaScript',
  //     'TypeScript',
  //     'HTML & SCSS',
  //     'React',
  //     'Next.js',
  //     'React Native',
  //     'WordPress',
  //     'Contentful',
  //     'Node.js',
  //     'PHP',
  //   ],
  // },
  // {
  //   id: '3',
  //   period: 'JULY — DEC 2017',
  //   title: 'UI Engineer Co-op',
  //   company: 'Apple',
  //   description:
  //     'Developed interactive web apps for Apple Music. Worked with MusicKit.js and collaborated with design teams.',
  //   technologies: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
  // },
  // {
  //   id: '4',
  //   period: '2016 — 2017',
  //   title: 'Developer',
  //   company: 'Scout Studio',
  //   description:
  //     'Collaborated on pro-bono projects. Built responsive websites and web applications.',
  //   technologies: ['Jekyll', 'SCSS', 'JavaScript', 'WordPress'],
  // },
  // {
  //   id: '5',
  //   period: 'JULY — DEC 2016',
  //   title: 'Software Engineer Co-op',
  //   company: 'Starry',
  //   description:
  //     'Engineered features for Starrys Android app. Worked on mobile development and user experience.',
  //   technologies: ['Cordova', 'Backbone', 'JavaScript', 'CSS'],
  // },
  // {
  //   id: '6',
  //   period: 'JULY — DEC 2015',
  //   title: 'Creative Technologist Co-op',
  //   company: 'MullenLowe U.S.',
  //   description:
  //     'Developed production code for client websites. Created interactive experiences and responsive layouts.',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  // },
  {
    id: '1',
    period: 'Aug 2022 — Present',
    title: 'Systems Analyst',
    company: 'Televisão Mirante Ltda.',
    description:
      'Development of new features, bug fixing, refactoring, and testing of institutional applications (Imirante, Troféu Mirante, among others) using Laravel and Vue.js. Development and maintenance of mobile applications (Mirante FM, Mirante AM, and Imirante).',
    technologies: ['Laravel', 'Vue.js', 'JavaScript', 'PHP', 'Mobile', 'MySQL'],
  },
  {
    id: '2',
    period: 'May 2022 — May 2025',
    title: 'Full Stack Developer',
    company: 'Softnow',
    description:
      'Development and maintenance of institutional applications using Laravel. Implementation of new features, bug fixes, and tests following good development practices.',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Git'],
  },
  {
    id: '3',
    period: 'Jul 2019 — Sep 2020',
    title: 'Full Stack Developer',
    company: 'Faculdade Pitágoras',
    description:
      'Development of internal applications using ReactJS and Node.js. Technical support for staff and students, system installation and maintenance. Creation of systems for managing lists and querying students and classrooms. Monitoring multiple databases for institutional inventory management.',
    technologies: ['React', 'Node.js', 'JavaScript', 'MySQL', 'PostgreSQL'],
  },
  {
    id: '4',
    period: 'Aug 2017 — Jun 2019',
    title: 'IT Intern',
    company: 'Faculdade Pitágoras',
    description:
      'Operation and maintenance of computers and technical support for staff and students.',
    technologies: ['Technical Support', 'Computer Maintenance', 'Networking'],
  },
  {
    id: '5',
    period: 'Aug 2016 — Dec 2016',
    title: 'IT Intern',
    company: 'Detran/MA',
    description:
      'Computer updating, formatting, and maintenance, as well as technical support for the institution’s staff.',
    technologies: ['Technical Support', 'Computer Maintenance'],
  },
];

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

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Build a Spotify Connected App',
    description:
      'A comprehensive video course on building a web app with the Spotify API.',
    technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
    featured: true,
  },
  {
    id: '2',
    title: 'Spotify Profile',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, tracks, and more.',
    technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Halcyon Theme',
    description: 'A dark blue theme for code editors. Available for VS Code, Sublime Text, and more.',
    technologies: ['Theme', 'VS Code'],
    featured: true,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
];

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

export const ARTICLES: Article[] = [
  {
    id: '1',
    year: '2024',
    title: '5 Common Accessibility Pitfalls and How to Avoid Them',
    description:
      'Learn about the most common accessibility mistakes developers make and how to fix them to create more inclusive web experiences.',
    category: 'Accessibility',
    readTime: '8 min read',
    slug: '5-common-accessibility-pitfalls',
  },
  {
    id: '2',
    year: '2024',
    title: 'Building Scalable React Applications with TypeScript',
    description:
      'A comprehensive guide on how to structure and scale React applications using TypeScript, best practices, and modern patterns.',
    category: 'React',
    readTime: '12 min read',
    slug: 'building-scalable-react-applications',
  },
  {
    id: '3',
    year: '2023',
    title: 'Mastering Next.js 14: Server Components and Beyond',
    description:
      'Deep dive into Next.js 14 features, including Server Components, Server Actions, and the new App Router architecture.',
    category: 'Next.js',
    readTime: '15 min read',
    slug: 'mastering-nextjs-14',
  },
  {
    id: '4',
    year: '2023',
    title: 'CSS Grid vs Flexbox: When to Use What',
    description:
      'A practical guide to understanding when to use CSS Grid and when to use Flexbox, with real-world examples and use cases.',
    category: 'CSS',
    readTime: '10 min read',
    slug: 'css-grid-vs-flexbox',
  },
  {
    id: '5',
    year: '2022',
    title: 'Integrating Algolia Search with WordPress Multisite',
    description:
      'Step-by-step tutorial on how to integrate Algolia search functionality into a WordPress multisite installation.',
    category: 'WordPress',
    readTime: '14 min read',
    slug: 'integrating-algolia-wordpress',
  },
  {
    id: '6',
    year: '2022',
    title: 'The Complete Guide to Web Performance Optimization',
    description:
      'Learn how to optimize your web applications for better performance, including techniques for faster load times and improved user experience.',
    category: 'Performance',
    readTime: '18 min read',
    slug: 'web-performance-optimization',
  },
  {
    id: '7',
    year: '2021',
    title: 'Building a Headless Mobile App CMS From Scratch',
    description:
      'A detailed walkthrough of building a headless CMS specifically designed for mobile applications using modern technologies.',
    category: 'Mobile',
    readTime: '20 min read',
    slug: 'headless-mobile-app-cms',
  },
  {
    id: '8',
    year: '2021',
    title: 'Understanding React Hooks: A Deep Dive',
    description:
      'Comprehensive guide to React Hooks, covering useState, useEffect, useContext, and custom hooks with practical examples.',
    category: 'React',
    readTime: '16 min read',
    slug: 'understanding-react-hooks',
  },
  {
    id: '9',
    year: '2020',
    title: 'Modern JavaScript: ES6+ Features You Should Know',
    description:
      'An overview of essential ES6+ JavaScript features including arrow functions, destructuring, async/await, and more.',
    category: 'JavaScript',
    readTime: '12 min read',
    slug: 'modern-javascript-es6',
  },
  {
    id: '10',
    year: '2020',
    title: 'Design Systems: Building Consistent UI Components',
    description:
      'Learn how to create and maintain a design system that ensures consistency across your applications and improves developer experience.',
    category: 'Design',
    readTime: '14 min read',
    slug: 'design-systems-ui-components',
  },
];

export const CAROUSEL_ITEMS_COUNT = 10;

export const FOOTER_LINKS = [
  {
    id: 'github',
    href: 'https://github.com/MatheusFontenele',
    icon: 'github',
    delay: 0.1,
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com',
    icon: 'linkedin',
    delay: 0.2,
  },
  {
    id: 'instagram',
    href: 'https://instagram.com',
    icon: 'instagram',
    delay: 0.3,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com',
    icon: 'twitter',
    delay: 0.4,
  },
  {
    id: 'email',
    href: 'mailto:matheus.fontenele@icloud.com',
    icon: 'email',
    delay: 0.5,
  },
] as const;

export const FLIP_WORDS = [ 'Designs', 'Develops', 'Tests', 'Maintains', 'Systems', 'Applications', 'Software', 'Engineering', 'Principles', 'Quality', 'Organization', 'Efficiency' ];
// id: number; name: string; designation: string; image: string;
export const PEOPLE = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Doe',
    designation: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Designs, develops, tests, and maintains systems, applications, and software, applying engineering principles to ensure quality, organization, and efficiency, going beyond simple programming to focus on architecture, security, scalability, and continuous maintenance, working in collaboration with multidisciplinary teams to deliver complete digital solutions.',
    name: 'John Doe',
    title: 'Software Engineer',
  },
];