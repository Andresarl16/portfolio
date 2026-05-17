import { Text } from '@/components/atoms/text';
import { cn } from '@/lib/cn';
import useScrollReveal from '@/shared/hooks/useScrollReveal';
import { useViewportOffsets } from '@/shared/hooks/useViewportOffsets';
import { useRef } from 'react';
import { motion, Transition, Variants } from 'motion/react';

interface WhatIBuildCardProps {
  animationDirection?: 'leftToRight' | 'rightToLeft';
  className?: string;
  title: string;
  description: string;
}

const transition: Transition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1],
};

function WhatIBuildCard({
  animationDirection = 'leftToRight',
  className,
  title,
  description,
  ...props
}: WhatIBuildCardProps) {
  const offset = useViewportOffsets();
  const cardRef = useRef<HTMLDivElement>(null);

  const { animationControls } = useScrollReveal({
    ref: cardRef,
    amount: 0.1,
    animationStart: { definition: { x: 0 } },
  });

  return (
    <motion.div
      className={cn('bg-brand-500 px-6 py-5 gap-3 rounded-xl', className)}
      ref={cardRef}
      initial={{
        x:
          animationDirection === 'leftToRight'
            ? -(offset.vw / 2)
            : offset.vw / 2,
      }}
      animate={animationControls}
      transition={transition}
      {...props}
    >
      <Text
        className="txt-secondary_on-brand"
        fontFamily={'display'}
        fontWeight={'semiBold'}
        fontSize={'xs'}
      >
        {title}
      </Text>
      <Text
        className="txt-primary_on-brand"
        fontWeight={'regular'}
        fontSize={'md'}
      >
        {description}
      </Text>
    </motion.div>
  );
}

export default WhatIBuildCard;
