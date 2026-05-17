'use client';

import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import ToolboxGroup from '../components/ToolboxGroup';
import { useToolboxTranslations } from '../../application/useToolboxTranslations';
import { ToolboxGroupKey } from '../../domain/landing.constants';

//TODO: Change to enumObject
const groupStylesByKey: Record<ToolboxGroupKey, string> = {
  quality: 'col-span-2',
  frontend: 'col-span-3',
  backend: 'col-span-3',
  tooling: 'col-span-2',
};

function Toolbox() {
  const translate = useToolboxTranslations();
  const groups = translate('groups');

  return (
    <LandingSection
      className={{ section: 'bg-brand-100', div: 'flex flex-col gap-10' }}
    >
      <div className="flex flex-col gap-2">
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

      <div className="grid grid-cols-5 gap-3">
        {groups.map((group) => (
          <ToolboxGroup
            key={group.title}
            className={groupStylesByKey[group.key as ToolboxGroupKey]}
            title={group.title}
            // TODO: Fix this warning
            itemKeys={group.elementKeys}
          />
        ))}
      </div>
    </LandingSection>
  );
}

export default Toolbox;
