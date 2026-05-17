'use client';

import { useRef } from 'react';
import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/cn';
import { useWhatIBuildTranslations } from '../../application/useWhatIBuildTranslations';
import type { WhatIBuildCardKey } from '../../domain/landing.constants';
import LandingSection from '../components/LandingSection';
import WhatIBuildCard from '../components/WhatIBuildCard';
import { motion, Transition, Variants } from 'motion/react';
import useScrollReveal from '@/shared/hooks/useScrollReveal';

const cardsStylesByKey: Record<WhatIBuildCardKey, string> = {
  /* TODO: Change to enumObject */
  'multi-app-ecosystems': 'order-2 col-start-1',
  'architecture-first-thinking':
    'order-4 col-start-2 sm:col-start-3 lg:col-start-2 xl:col-start-2',
  'production-ready-systems': 'order-6 col-start-1',
  'reusable-components':
    'order-8 col-start-2 sm:col-start-3 lg:col-start-5 xl:col-start-4',
};

function getCardStyles(key: WhatIBuildCardKey): string {
  return cardsStylesByKey[key] ?? '';
}

const MotionText = motion(Text);
const WhatIBuildCardMotion = motion(WhatIBuildCard);

const transition: Transition = {
  duration: 0.9,
  delay: 0.1,
  ease: [0.25, 0.1, 0.25, 1],
};

const cardVariants: Variants = {
  hidden: { x: -500 },
  visible: { x: 0 },
};

const revealToY0 = { definition: { y: 0 } };

function WhatIBuild() {
  const translate = useWhatIBuildTranslations();
  const cards = translate('cards');

  const titleDescriptionRef = useRef<HTMLDivElement>(null);

  const { animationControls: titleControls } = useScrollReveal({
    ref: titleDescriptionRef,
    amount: 0.2,
    animationStart: revealToY0,
  });

  const { animationControls: descriptionControls } = useScrollReveal({
    ref: titleDescriptionRef,
    amount: 0.2,
    animationStart: revealToY0,
  });

  return (
    <LandingSection
      className={{
        div: 'grid grid-cols-7 xl:grid-cols-5 gap-4',
        section: 'bg-primary',
      }}
    >
      <div
        className="col-span-7 lg:col-span-3 xl:col-span-2 row-span-2 col-start-1 lg:col-start-5 xl:col-start-4 order-0 lg:order-3 flex flex-col gap-2"
        ref={titleDescriptionRef}
      >
        <MotionText
          className="txt-primary-900 text-right"
          fontFamily={'display'}
          fontWeight={'bold'}
          responsiveVariants={{
            base: { fontSize: 'lg' },
            xl: { fontSize: 'xl' },
          }}
          initial={{ y: '-110vh' }}
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
          initial={{ y: '-100vh' }}
          animate={descriptionControls}
          transition={transition}
        >
          {translate('description')}
        </MotionText>
      </div>

      {cards.map((card) => (
        <WhatIBuildCardMotion
          className={cn(
            'col-span-6 sm:col-span-5 lg:col-span-3 xl:col-span-2',
            getCardStyles(card.key as WhatIBuildCardKey)
          )}
          key={card.key}
          title={card.title}
          description={card.description}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={transition}
        />
      ))}
    </LandingSection>
  );
}

export default WhatIBuild;
