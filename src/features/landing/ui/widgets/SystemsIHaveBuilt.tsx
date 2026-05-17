'use client';

import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import SystemsIHaveBuiltCard from '../components/SystemsIHaveBuiltCard';
import { useSystemsIHaveBuiltTranslations } from '../../application/useSystemsIHaveBuiltTranslations';

function SystemsIHaveBuilt() {
  const translate = useSystemsIHaveBuiltTranslations();
  const systems = translate('systems');

  return (
    <LandingSection
      className={{
        section: 'bg-brand-200',
      }}
    >
      <div className="flex flex-col gap-2 mb-10">
        <Text
          as="h1"
          className="txt-brand-primary-900"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          {translate('title')}
        </Text>
        <Text
          as="h2"
          className="txt-secondary-700"
          fontWeight={'regular'}
          fontSize={'xl'}
        >
          {translate('description')}
        </Text>
      </div>

      <div className="flex gap-3 ">
        {systems.map((system) => (
          <SystemsIHaveBuiltCard
            key={system.title}
            title={system.title}
            description={system.description}
            roleTitle={system.roleTitle}
            roleBadges={system.roleBadges}
            keyPointsTitle={system.keyPointsTitle}
            keyPoints={system.keyPoints}
          />
        ))}
      </div>
    </LandingSection>
  );
}

export default SystemsIHaveBuilt;
