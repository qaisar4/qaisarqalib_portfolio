/**
 * All portfolio content is local — edit this file to personalize.
 * Replace placeholder text, links, and add your avatar to /public/avatar.svg
 */

export const site = {
  firstName: 'Qaisar',
  lastName: 'Qalib',
  role: 'Senior React Native Developer',
  tagline:
    'I build high-performance, user-centric mobile apps — scalable features, solid API integration, and clean, maintainable code for complex products.',
  yearsExperience: 4,
  location: 'Lahore, Pakistan',
  email: 'qaisarqalib123@gmail.com',
  phone: '+92 302 4595017',
  availability: 'Open to remote roles & freelance',
  /** Optional: set to '/avatar.svg' after adding your photo (see public/avatar.svg placeholder) */
  avatarSrc: '/avatar.svg',
  /** Set to '/resume.pdf' after adding the file under public/ */
  resumePath: null,
  socials: [
    { label: 'GitHub', href: 'https://github.com/qaisar4', handle: '@qaisar4' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/qaisar-qalib-94b9671b4/',
      handle: 'Qaisar Qalib',
    },
  ],
}

export const about = {
  intro:
    'Senior React Native Developer with 4+ years building high-performance mobile applications. I focus on scalable features, performance optimization, and smooth collaboration with cross-functional teams.',
  paragraphs: [
    'Strong in API integration, state management, and maintainable architecture for complex apps — including navigation, animations, and production releases.',
    'I work well in Agile delivery, code reviews, and mentoring; I keep learning and applying modern mobile best practices.',
  ],
  highlights: [
    { title: 'Mobile delivery', detail: 'React Native, TypeScript, hooks, navigation, REST APIs, Firebase & Supabase.' },
    { title: 'Quality & release', detail: 'Jest, React Native Testing Library, TestFlight, Google Play Console.' },
    { title: 'Team player', detail: 'Clear communication, problem solving, and proactive collaboration.' },
  ],
}

export const skills = [
  {
    category: 'React Native core',
    items: [
      'React Native',
      'TypeScript',
      'JavaScript',
      'Hooks',
      'Navigation',
      'API integration',
      'Mobile app development',
    ],
  },
  {
    category: 'UI & product',
    items: ['Animations', 'In-app purchases', 'Responsive layouts', 'Performance tuning'],
  },
  {
    category: 'Backend & services',
    items: ['Firebase', 'Supabase', 'REST APIs'],
  },
  {
    category: 'Deployment',
    items: ['App Store (TestFlight)', 'Google Play Console'],
  },
  {
    category: 'Testing & collaboration',
    items: ['React Native Testing Library', 'Agile', 'Code reviews', 'Communication & teamwork'],
  },
]

export const experience = [
  {
    id: '1',
    company: 'Cynosoft Technologies',
    role: 'Senior React Native Developer',
    period: '2024 — Present',
    location: 'Lahore, Pakistan',
    bullets: [
      'Led frontend development for high-traffic gaming mobile applications.',
      'Delivered 5+ key UI features to improve engagement and user experience.',
      'Modernized legacy apps toward a scalable React-based architecture; improved performance and load times.',
      'Designed and maintained complex navigation flows for smooth user journeys.',
      'Ran code reviews to uphold quality and consistency across the team.',
    ],
  },
  {
    id: '2',
    company: 'TECHBUCKS',
    role: 'React Native Developer',
    period: '2024',
    location: 'Lahore, Pakistan',
    bullets: [
      'Designed and implemented production-ready React Native applications.',
      'Worked in Agile to ship features aligned with business goals.',
      'Built service-based solutions and resolved critical stability issues.',
    ],
  },
  {
    id: '3',
    company: 'MarkiTech.AI',
    role: 'Mid-Level React Native Developer',
    period: '2022 — 2024',
    location: 'Ontario, Canada (Remote)',
    bullets: [
      'Contributed to the SenSights health monitoring platform.',
      'Built scalable UI components and integrated RESTful APIs.',
      'Improved performance, stability, and data-handling in large-scale apps.',
    ],
  },
  {
    id: '4',
    company: 'TechWrath',
    role: 'Junior Mobile App Developer',
    period: '2021 — 2022',
    location: 'Lahore, Pakistan',
    bullets: [
      "Developed the company's first news/feed-based mobile application.",
      'Integrated WordPress REST APIs for dynamic content delivery.',
      'Supported maintenance, documentation, and engineering best practices.',
    ],
  },
]

export const projects = [
  {
    id: 'p1',
    title: 'NHL Fantasy Stars',
    description:
      'Fantasy hockey app for building and managing NHL teams. Implemented drag-and-drop lineup management to improve usability and gameplay.',
    tech: ['React Native', 'TypeScript', 'Gestures', 'API integration'],
    links: { live: null, repo: null },
  },
  {
    id: 'p2',
    title: 'Fantasy Football Hub',
    description:
      'Fantasy football experience using real-world player data. Delivered a flexible, responsive team setup flow for lineup configuration.',
    tech: ['React Native', 'TypeScript', 'REST APIs'],
    links: { live: null, repo: null },
  },
  {
    id: 'p3',
    title: 'Betsson',
    description:
      'Large-scale sports and gaming entertainment app. Contributed to performance optimization, stability, and responsive mobile features.',
    tech: ['React Native', 'Performance', 'Mobile UX'],
    links: { live: null, repo: null },
  },
  {
    id: 'p4',
    title: 'Good Gaming',
    description:
      'Gaming platform in the same space as Betsson. Built reliable mobile features to improve performance and user engagement.',
    tech: ['React Native', 'TypeScript'],
    links: { live: null, repo: null },
  },
  {
    id: 'p5',
    title: 'TwoPercent AI',
    description:
      'AI-powered social media trend tracker. Implemented video trend analysis using the LLaMA AI model.',
    tech: ['React Native', 'AI integration', 'Video'],
    links: { live: null, repo: null },
  },
]

export const education = [
  {
    id: 'e1',
    institution: 'Lahore Garrison University — Lahore, Pakistan',
    degree: 'Bachelor of Software Engineering',
    period: '2016 — 2020',
    detail: null,
  },
  {
    id: 'e2',
    institution: 'GBHS & IC — Lahore, Pakistan',
    degree: 'FSc Pre-Engineering',
    period: '2014 — 2016',
    detail: null,
  },
]

export const certifications = [
  {
    id: 'c1',
    name: 'Advanced React & Redux',
    issuer: 'W3 Schools',
  },
  {
    id: 'c2',
    name: 'React Native Crash Course — fundamentals through advanced concepts',
    issuer: 'Coursera',
  },
]

export const seo = {
  title: `${site.firstName} ${site.lastName} — ${site.role}`,
  description: `${site.role} with ${site.yearsExperience}+ years. ${site.tagline.slice(0, 140)}…`,
}
