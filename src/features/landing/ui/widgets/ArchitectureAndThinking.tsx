'use client';

import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import ArchitectureAndThinkingElement from '../components/ArchitectureAndThinkingElement';
import { useArchitectureAndThinkingTranslations } from '../../application/useArchitectureAndThinkingTranslations';
import ArchitectureAndThinkingBackground from '../components/ArchitectureAndThinkingBackground';
import useScrollReveal from '@/shared/hooks/useScrollReveal';
import { useViewportOffsets } from '@/shared/hooks/useViewportOffsets';
import { motion, Transition } from 'motion/react';

const MotionText = motion(Text);

const opacityTo1 = { definition: { opacity: 1 } };

const transition: Transition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1],
};

function ArchitectureAndThinking() {
  const translate = useArchitectureAndThinkingTranslations();
  const elements = translate('elements');

  const offset = useViewportOffsets();

  const titleDescriptionRef = React.useRef<HTMLDivElement>(null);

  const { animationControls: titleControls } = useScrollReveal({
    ref: titleDescriptionRef,
    amount: 0.15,
    animationStart: opacityTo1,
  });

  const { animationControls: descriptionControls } = useScrollReveal({
    ref: titleDescriptionRef,
    amount: 0.15,
    animationStart: opacityTo1,
  });

  return (
    <LandingSection
      className={{ div: 'relative mb-32' }}
      removePadding={{ top: true, bottom: true, left: true, right: true }}
    >
      <ArchitectureAndThinkingBackground className="absolute inset-0 text-brand-200 -z-10" />
      <div className="flex flex-col mx-20 p-12 md:p-16 xl:p-24 rounded-b-[240px]">
        <div className="flex flex-col gap-2 mb-10" ref={titleDescriptionRef}>
          <MotionText
            as="h1"
            className="txt-brand-tertiary-600 text-center"
            fontFamily={'display'}
            fontWeight={'bold'}
            fontSize={'xl'}
            initial={{ opacity: 0 }}
            animate={titleControls}
            transition={transition}
          >
            {translate('title')}
          </MotionText>
          <MotionText
            as="h2"
            className="txt-brand-tertiary-600 text-center"
            fontWeight={'regular'}
            fontSize={'xl'}
            initial={{ opacity: 0 }}
            animate={descriptionControls}
            transition={transition}
          >
            {translate('description')}
          </MotionText>
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
