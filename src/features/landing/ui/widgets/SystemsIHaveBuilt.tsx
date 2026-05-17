'use client';

import React, { useRef } from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import SystemsIHaveBuiltCard from '../components/SystemsIHaveBuiltCard';
import { useSystemsIHaveBuiltTranslations } from '../../application/useSystemsIHaveBuiltTranslations';
import { useViewportOffsets } from '@/shared/hooks/useViewportOffsets';
import useScrollReveal from '@/shared/hooks/useScrollReveal';
import { motion, Transition } from 'motion/react';

const MotionText = motion(Text);
const MotionSystemsIHaveBuiltCard = motion(SystemsIHaveBuiltCard);

const revealToX0 = { definition: { x: 0 } };

const opacityTo1 = { definition: { opacity: 1 } };

const transition: Transition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1],
};

function SystemsIHaveBuilt() {
  const translate = useSystemsIHaveBuiltTranslations();
  const systems = translate('systems');

  const offset = useViewportOffsets();
  const titleRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLElement>(null);
  const systemsDivRef = useRef<HTMLDivElement>(null);

  const { animationControls: titleControls } = useScrollReveal({
    ref: titleRef,
    amount: 0.15,
    animationStart: revealToX0,
  });

  const { animationControls: descriptionControls } = useScrollReveal({
    ref: descriptionRef,
    amount: 0.15,
    animationStart: opacityTo1,
  });

  const { animationControls: systemsDivControls } = useScrollReveal({
    ref: systemsDivRef,
    amount: 0.15,
    animationStart: revealToX0,
  });

  return (
    <LandingSection
      className={{
        section: 'bg-brand-200',
      }}
      removePadding={{ left: true, right: true }}
    >
      <div className="flex flex-col gap-2 mb-10 px-12 sm:px-16 lg:px-24">
        <MotionText
          as="h1"
          ref={titleRef}
          className="txt-brand-primary-900"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
          initial={{ x: -offset.vw }}
          animate={titleControls}
          transition={transition}
        >
          {translate('title')}
        </MotionText>
        <MotionText
          as="h2"
          ref={descriptionRef}
          className="txt-secondary-700"
          fontWeight={'regular'}
          fontSize={'xl'}
          initial={{ opacity: 0 }}
          animate={descriptionControls}
          transition={transition}
        >
          {translate('description')}
        </MotionText>
      </div>

      <div
        className="flex gap-3 overflow-x-auto px-12 sm:px-16 lg:px-24"
        ref={systemsDivRef}
      >
        {systems.map((system, index) => (
          <MotionSystemsIHaveBuiltCard
            key={system.title}
            title={system.title}
            description={system.description}
            roleTitle={system.roleTitle}
            roleBadges={system.roleBadges}
            keyPointsTitle={system.keyPointsTitle}
            keyPoints={system.keyPoints}
            initial={{ x: offset.vw + index * 300 }} // Stagger the initial position based on index
            animate={systemsDivControls}
            transition={transition}
          />
        ))}
      </div>
    </LandingSection>
  );
}

export default SystemsIHaveBuilt;
