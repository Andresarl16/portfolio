import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import SystemsIHaveBuiltCard from '../components/SystemsIHaveBuiltCard';

function SystemsIHaveBuilt() {
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
          Systems I’ve Built
        </Text>
        <Text
          as="h2"
          className="txt-secondary-700"
          fontWeight={'regular'}
          fontSize={'xl'}
        >
          Systems I’ve designed and led from concept to production, focusing on
          scalability, maintainability and real-world impact.
        </Text>
      </div>

      <SystemsIHaveBuiltCard
        title={'Socado - Multi-App Commerce Ecosystem'}
        description={
          'A production ecosystem supporting web, mobile, self-checkout and admin experiences for real businesses.'
        }
        roleBadges={['Tech Lead', 'Architecture', 'Delivery']}
        keyPoints={[
          'Multi-app architecture (Web, Mobile, Kiosk, Admin)',
          'Shared UI components and typed domain models',
          'Scalable product and variant system',
          'Production deployments and long-term maintenance',
        ]}
      />
    </LandingSection>
  );
}

export default SystemsIHaveBuilt;
