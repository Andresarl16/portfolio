'use client';

import React from 'react';
import { useWhatIBuildTranslations } from '../../application/useWhatIBuildTranslations';
import WhatIBuildCard from '../components/WhatIBuildCard';
import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/cn';
import { WhatIBuildCardKey } from '../../domain/landing.constants';
import LandingSection from '../components/LandingSection';

const cardsStylesByKey: Record<WhatIBuildCardKey, string> = {
  /* TODO: Change to enumObject */
  'multi-app-ecosystems': 'order-2 col-start-1',
  'architecture-first-thinking':
    'order-4 col-start-2 sm:col-start-3 lg:col-start-2 xl:col-start-2',
  'production-ready-systems': 'order-6 col-start-1',
  'reusable-components':
    'order-8 col-start-2 sm:col-start-3 lg:col-start-5 xl:col-start-4',
};

function WhatIBuild() {
  const translate = useWhatIBuildTranslations();
  const cards = translate('cards');

  function getCardStyles(key: WhatIBuildCardKey): string {
    return cardsStylesByKey[key] ?? '';
  }

  return (
    <LandingSection
      className={{
        div: 'grid grid-cols-7 xl:grid-cols-5 gap-4',
        section: 'bg-primary',
      }}
    >
      <div className="col-span-7 lg:col-span-3 xl:col-span-2 row-span-2 col-start-1 lg:col-start-5 xl:col-start-4 order-0 lg:order-3 flex flex-col gap-2">
        <Text
          className="txt-primary-900 text-right"
          fontFamily={'display'}
          fontWeight={'bold'}
          responsiveVariants={{
            base: { fontSize: 'lg' },
            xl: { fontSize: 'xl' },
          }}
        >
          {translate('title')}
        </Text>
        <Text
          className="txt-secondary-700 text-right max-w-[44ch] lg:max-w-none ml-auto"
          fontWeight={'regular'}
          responsiveVariants={{
            base: { fontSize: 'lg' },
            xl: { fontSize: 'xl' },
          }}
        >
          {translate('description')}
        </Text>
      </div>

      {cards.map((card, index) => (
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
  );
}

export default WhatIBuild;
