/**
 * All portfolio content is local — edit this file to personalize.
 * Replace placeholder text, links, and add your avatar to /public/avatar.svg
 */

export const site = {
  firstName: 'Qaisar',
  lastName: 'Qalib',
  role: 'React Native Developer',
  tagline:
    'I build performant, accessible mobile experiences with React Native — from greenfield apps to scaling production codebases.',
  yearsExperience: 4,
  location: 'Your City, Country',
  email: 'qaisarqalib123@gmail.com',
  phone: '+00 000 000 0000',
  availability: 'Open to remote roles & freelance',
  /** Optional: set to '/avatar.svg' after adding your photo (see public/avatar.svg placeholder) */
  avatarSrc: '/avatar.svg',
  /** Set to '/resume.pdf' after adding the file under public/ */
  resumePath: null,
  socials: [
    { label: 'GitHub', href: 'https://github.com/qaisar4', handle: '@qaisar4' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/qaisar-qalib-94b9671b4',
      handle: 'Qaisar Qalib',
    },
  ],
}

export const about = {
  intro:
    'React Native developer with 4+ years shipping mobile products end to end: architecture, UI implementation, native bridges, performance tuning, and release pipelines.',
  paragraphs: [
    'I care about clear component boundaries, predictable state, and maintainable navigation patterns. I enjoy collaborating with design and backend teams to deliver polished features on schedule.',
    'Outside of feature work, I contribute to code quality through reviews, documentation, and mentoring junior developers.',
  ],
  highlights: [
    { title: 'Mobile-first', detail: 'Reanimated, gesture handlers, optimized lists & images.' },
    { title: 'Production mindset', detail: 'Crash analytics, CI/CD, store releases, feature flags.' },
    { title: 'Cross-functional', detail: 'API contracts, design systems, QA handoffs.' },
  ],
}

export const skills = [
  {
    category: 'React Native core',
    items: ['React Native', 'React (Hooks)', 'TypeScript', 'JavaScript', 'Navigation (React Navigation)', 'State (Redux / Zustand / Context)', 'Hermes'],
  },
  {
    category: 'UI & UX',
    items: ['Reanimated', 'Gesture Handler', 'Styled Components', 'NativeWind', 'Responsive layouts', 'Dark mode', 'Accessibility (a11y)'],
  },
  {
    category: 'Native & tooling',
    items: ['iOS / Android configs', 'Xcode', 'Gradle', 'Fastlane', 'Flipper', 'Metro', 'Codegen / TurboModules basics'],
  },
  {
    category: 'Backend & integrations',
    items: ['REST & GraphQL', 'WebSockets', 'Firebase', 'Push notifications', 'Deep linking', 'OAuth'],
  },
  {
    category: 'Quality & delivery',
    items: ['Jest', 'React Native Testing Library', 'Detox / Maestro basics', 'Sentry', 'Analytics', 'GitHub Actions'],
  },
]

export const experience = [
  {
    id: '1',
    company: 'Current Company Ltd.',
    role: 'Senior React Native Developer',
    period: '2023 — Present',
    location: 'Remote',
    bullets: [
      'Lead feature pods for flagship consumer apps; define module boundaries and shared UI libraries.',
      'Reduced cold start time and list jank via profiling (Hermes, FlashList, image pipeline).',
      'Partner with platform teams on native modules where JS alone is not enough.',
    ],
  },
  {
    id: '2',
    company: 'Previous Startup Inc.',
    role: 'React Native Developer',
    period: '2021 — 2023',
    location: 'Hybrid',
    bullets: [
      'Shipped v1 product on tight deadlines; owned onboarding, payments, and settings flows.',
      'Introduced testing strategy and CI checks that cut regressions before release.',
    ],
  },
  {
    id: '3',
    company: 'Earlier Agency / Product Co.',
    role: 'Mobile Developer',
    period: '2020 — 2021',
    location: 'On-site',
    bullets: [
      'Built white-label apps for multiple clients; standardized navigation and theming.',
      'Collaborated with designers to implement motion and micro-interactions.',
    ],
  },
]

export const projects = [
  {
    id: 'p1',
    title: 'Commerce mobile app',
    description:
      'High-traffic shopping experience with cart, checkout, and loyalty. Focus on performance, offline-friendly catalog, and push-driven engagement.',
    tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'Stripe', 'Sentry'],
    links: { live: null, repo: null },
  },
  {
    id: 'p2',
    title: 'Health & wellness tracker',
    description:
      'Habit tracking, reminders, and wearable-inspired dashboards. Emphasis on accessibility and large dynamic lists.',
    tech: ['React Native', 'Reanimated', 'Zustand', 'HealthKit / Health Connect (via native)'],
    links: { live: null, repo: null },
  },
  {
    id: 'p3',
    title: 'Internal field operations app',
    description:
      'Offline-first flows for technicians: job queue, photo capture, signature capture, and sync when online.',
    tech: ['React Native', 'SQLite', 'Maps', 'Background tasks'],
    links: { live: null, repo: null },
  },
]

export const education = [
  {
    id: 'e1',
    institution: 'Your University',
    degree: 'B.Sc. Computer Science (or relevant field)',
    period: '2016 — 2020',
    detail: 'Coursework: software engineering, algorithms, mobile development electives.',
  },
]

export const certifications = [
  { id: 'c1', name: 'Meta React Native (example)', issuer: 'Coursera / Meta', year: '2022' },
  { id: 'c2', name: 'AWS / cloud fundamentals (optional)', issuer: 'AWS Training', year: '2023' },
]

export const seo = {
  title: `${site.firstName} ${site.lastName} — ${site.role}`,
  description: `${site.role} with ${site.yearsExperience}+ years. ${site.tagline.slice(0, 140)}…`,
}
