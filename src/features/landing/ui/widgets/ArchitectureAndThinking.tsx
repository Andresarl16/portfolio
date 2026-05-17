'use client';

import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import ArchitectureAndThinkingElement from '../components/ArchitectureAndThinkingElement';
import { useArchitectureAndThinkingTranslations } from '../../application/useArchitectureAndThinkingTranslations';
import ArchitectureAndThinkingBackground from '../components/ArchitectureAndThinkingBackground';

function ArchitectureAndThinking() {
  const translate = useArchitectureAndThinkingTranslations();
  const elements = translate('elements');

  return (
    <LandingSection
      className={{ div: 'relative mb-32' }}
      removePadding={{ top: true, bottom: true, left: true, right: true }}
    >
      <ArchitectureAndThinkingBackground className="absolute inset-0 text-brand-200 -z-10" />
      <div className="flex flex-col mx-20 p-12 md:p-16 xl:p-24 rounded-b-[240px]">
        <div className="flex flex-col gap-2 mb-10">
          <Text
            as="h1"
            className="txt-brand-tertiary-600 text-center"
            fontFamily={'display'}
            fontWeight={'bold'}
            fontSize={'xl'}
          >
            {translate('title')}
          </Text>
          <Text
            as="h2"
            className="txt-brand-tertiary-600 text-center"
            fontWeight={'regular'}
            fontSize={'xl'}
          >
            {translate('description')}
          </Text>
        </div>

        <div className="flex flex-col gap-8">
          {elements.map((element) => (
            <ArchitectureAndThinkingElement
              key={element.key}
              title={element.title}
              descriptionLine1={element.descriptionLine1}
              descriptionLine2={element.descriptionLine2}
            />
          ))}
        </div>
      </div>
    </LandingSection>
  );
}

export default ArchitectureAndThinking;
