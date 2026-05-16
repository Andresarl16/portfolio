import type React from 'react';
import { cn } from '@/lib/cn';

interface LandingSectionProps {
  children: React.ReactNode;
  className: {
    div: string;
    section?: string;
  };
  removePadding?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
}

function LandingSection({
  children,
  className,
  removePadding,
}: LandingSectionProps) {
  return (
    <section className={cn('w-full', className?.section)}>
      <div
        className={cn(
          'max-w-screen-2xl 2xl:mx-auto overflow-hidden',
          removePadding?.top ? '' : 'pt-12 md:pt-16 xl:pt-24',
          removePadding?.bottom ? '' : 'pb-12 md:pb-16 xl:pb-24',
          removePadding?.left ? '' : 'px-4 sm:px-6 lg:px-8',
          removePadding?.right ? '' : 'px-4 sm:px-6 lg:px-8',
          className?.div
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default LandingSection;
