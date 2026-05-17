'use client';

import React, { useEffect, useRef } from 'react';
import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/cn';
import { useWhatIBuildTranslations } from '../../application/useWhatIBuildTranslations';
import type { WhatIBuildCardKey } from '../../domain/landing.constants';
import LandingSection from '../components/LandingSection';
import WhatIBuildCard from '../components/WhatIBuildCard';
import {
  motion,
  Transition,
  useInView,
  useAnimationControls,
} from 'motion/react';
import { useViewportOffsets } from '@/shared/hooks/useViewportOffsets';

const cardsStylesByKey: Record<WhatIBuildCardKey, string> = {
  /* TODO: Change to enumObject */
  'multi-app-ecosystems': 'order-2 col-start-1',
  'architecture-first-thinking':
    'order-4 col-start-2 sm:col-start-3 lg:col-start-2 xl:col-start-2',
  'production-ready-systems': 'order-6 col-start-1',
  'reusable-components':
    'order-8 col-start-2 sm:col-start-3 lg:col-start-5 xl:col-start-4',
};

const MotionText = motion(Text);

const transition: Transition = {
  duration: 0.9,
  delay: 0.1,
  ease: [0.25, 0.1, 0.25, 1],
};

function WhatIBuild() {
  const translate = useWhatIBuildTranslations();
  const cards = translate('cards');

  const offsets = useViewportOffsets();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const titleControls = useAnimationControls();
  const descControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      titleControls.start({ y: 0 });
      descControls.start({ y: 0 });
    }
  }, [isInView, titleControls, descControls]);

  function getCardStyles(key: WhatIBuildCardKey): string {
    return cardsStylesByKey[key] ?? '';
  }

  return (
    <div ref={ref}>
      <LandingSection
        className={{
          div: 'grid grid-cols-7 xl:grid-cols-5 gap-4',
          section: 'bg-primary',
        }}
      >
        <div className="col-span-7 lg:col-span-3 xl:col-span-2 row-span-2 col-start-1 lg:col-start-5 xl:col-start-4 order-0 lg:order-3 flex flex-col gap-2">
          <MotionText
            className="txt-primary-900 text-right"
            fontFamily={'display'}
            fontWeight={'bold'}
            responsiveVariants={{
              base: { fontSize: 'lg' },
              xl: { fontSize: 'xl' },
            }}
            initial={{ y: -offsets.vh - 100 }}
            animate={titleControls}
            transition={transition}
          >
            {translate('title')}
          </MotionText>
          <MotionText
            className="txt-secondary-700 text-right max-w-[44ch] lg:max-w-none ml-auto"
            fontWeight={'regular'}
            responsiveVariants={{
              base: { fontSize: 'lg' },
              xl: { fontSize: 'xl' },
            }}
            initial={{ y: -offsets.vh }}
            animate={descControls}
            transition={transition}
          >
            {translate('description')}
          </MotionText>
        </div>

        {cards.map((card) => (
          <WhatIBuildCard
            className={cn(
              'col-span-6 sm:col-span-5 lg:col-span-3 xl:col-span-2',
              getCardStyles(card.key as WhatIBuildCardKey)
            )}
            key={card.key}
            title={card.title}
            description={card.description}
          />
        ))}
      </LandingSection>
    </div>
  );
}

export default WhatIBuild;
