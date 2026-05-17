import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import ArchitectureAndThinkingElement from '../components/ArchitectureAndThinkingElement';

function ArchitectureAndThinking() {
  return (
    <LandingSection>
      <div className="flex flex-col mb-10">
        <Text
          as="h1"
          className="txt-brand-tertiary-600"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          'title'
        </Text>
        <Text
          as="h2"
          className="txt-brand-tertiary-600"
          fontWeight={'regular'}
          fontSize={'xl'}
        >
          'description'
        </Text>
      </div>

      <div className="flex flex-col gap-8">
        <ArchitectureAndThinkingElement
          title={'tt'}
          descriptionLine1={'d1'}
          descriptionLine2={'d2'}
        />
      </div>
    </LandingSection>
  );
}

export default ArchitectureAndThinking;
