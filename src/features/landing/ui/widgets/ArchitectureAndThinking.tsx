'use client';

import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import ArchitectureAndThinkingElement from '../components/ArchitectureAndThinkingElement';
import { useArchitectureAndThinkingTranslations } from '../../application/useArchitectureAndThinkingTranslations';

function ArchitectureAndThinking() {
  const translate = useArchitectureAndThinkingTranslations();
  const elements = translate('elements');

  return (
    <LandingSection
      className={{
        section: 'bg-brand-200',
      }}
    >
      <div className="flex flex-col mb-10">
        <Text
          as="h1"
          className="txt-brand-tertiary-600"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          {translate('title')}
        </Text>
        <Text
          as="h2"
          className="txt-brand-tertiary-600"
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
    </LandingSection>
  );
}

export default ArchitectureAndThinking;
