type NavbarKey =
  | 'welcome'
  | 'whatIBuild'
  | 'systemsBuilt'
  | 'architecture'
  | 'experience'
  | 'toolbox'
  | 'contactMe';

export const NAV_LINKS: { href: string; labelKey: NavbarKey }[] = [
  { href: '#welcome', labelKey: 'welcome' },
  { href: '#what-i-build', labelKey: 'whatIBuild' },
  { href: '#systems-built', labelKey: 'systemsBuilt' },
  { href: '#architecture', labelKey: 'architecture' },
  { href: '#experience', labelKey: 'experience' },
  { href: '#toolbox', labelKey: 'toolbox' },
];

export const HERO_BADGES: Array<string> = [
  'Next.js',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'React',
  'TailwindCSS',
];

export type WhatIBuildCardKey =
  | 'multi-app-ecosystems'
  | 'architecture-first-thinking'
  | 'production-ready-systems'
  | 'reusable-components';

export type ToolboxGroupKey = 'quality' | 'frontend' | 'backend' | 'tooling';

export type ToolboxItemKey =
  | 'jest'
  | 'cypress'
  | 'typescript'
  | 'nextjs'
  | 'react'
  | 'tailwindcss'
  | 'mongodb'
  | 'postgresql'
  | 'nodejs'
  | 'supabase'
  | 'github'
  | 'ci-cd-pipelines';
