import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import ToolboxGroup from '../components/ToolboxGroup';

function Toolbox() {
  return (
    <LandingSection
      className={{ section: 'bg-brand-100', div: 'flex flex-col gap-10' }}
    >
      <div className="flex flex-col gap-2">
        <Text
          as="h1"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          Toolbox
        </Text>
        <Text as="h2" fontWeight={'regular'} fontSize={'xl'}>
          My career has evolved from building interfaces to leading teams and
          designing systems.
        </Text>
      </div>

      <div className="grid grid-cols-5 gap-3">
        <ToolboxGroup
          title="Skills"
          itemKeys={['JavaScript', 'TypeScript', 'React']}
        />
      </div>
    </LandingSection>
  );
}

export default Toolbox;
