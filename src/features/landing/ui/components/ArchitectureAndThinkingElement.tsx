import { Text } from '@/components/atoms/text';
import useScrollReveal from '@/shared/hooks/useScrollReveal';
import { useViewportOffsets } from '@/shared/hooks/useViewportOffsets';
import { motion, Transition } from 'motion/react';
import React, { useRef } from 'react';

const transition: Transition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1],
};

interface IArchitectureAndThinkingElementProps {
  title: string;
  descriptionLine1: string;
  descriptionLine2: string;
}

function ArchitectureAndThinkingElement({
  title,
  descriptionLine1,
  descriptionLine2,
}: IArchitectureAndThinkingElementProps) {
  const offset = useViewportOffsets();
  const elementRef = useRef<HTMLDivElement>(null);

  const { animationControls } = useScrollReveal({
    ref: elementRef,
    amount: 0.1,
    animationStart: { definition: { y: 0 } },
  });

  return (
    <motion.div
      className="flex flex-col items-center mx-auto gap-3"
      ref={elementRef}
      initial={{ y: offset.vh / 2 }}
      animate={animationControls}
      transition={transition}
    >
      <hr className="w-8 border border-brand-400" />

      <Text
        as="h3"
        className="w-fit txt-brand-tertiary-600"
        fontFamily={'display'}
        fontWeight={'bold'}
        fontSize={'xs'}
      >
        {title}
      </Text>

      <Text
        as="p"
        className="w-fit flex flex-col text-brand-500 gap-1"
        fontWeight={'regular'}
        fontSize={'md'}
      >
        <span className="text-center">{descriptionLine1}</span>
        <span className="text-center">{descriptionLine2}</span>
      </Text>
    </motion.div>
  );
}

export default ArchitectureAndThinkingElement;
