'use client';

import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import { useExperienceTranslations } from '../../application/useExperienceTranslations';

function Experience() {
  const translate = useExperienceTranslations();

  return (
    <LandingSection>
      <div className="flex flex-col gap-2">
        <Text
          as="h1"
          className="txt-brand-primary-900 text-center"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          {translate('title')}
        </Text>
        <Text
          as="h2"
          className="txt-secondary-700 text-center"
          fontWeight={'regular'}
          fontSize={'xl'}
        >
          {translate('subtitle')}
        </Text>
      </div>
    </LandingSection>
  );
}

export default Experience;
