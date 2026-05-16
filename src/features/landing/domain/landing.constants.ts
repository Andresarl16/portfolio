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

export const WhatIBuildCardKeys = [
  'multi-app',
  'architecture',
  'production',
  'reusable',
];
