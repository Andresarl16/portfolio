'use client';

import { useRef } from 'react';
import { motion, type Transition } from 'motion/react';
import Image from 'next/image';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { useViewportOffsets } from '@/shared/hooks/useViewportOffsets';
import useScrollReveal from '@/shared/hooks/useScrollReveal';
import { useHeroTranslations } from '../../application/useHeroTranslations';
import { HERO_BADGES } from '../../domain/landing.constants';
import LandingSection from '../components/LandingSection';

const MotionButton = motion(Button);
const MotionBadge = motion(Badge);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const transition: Transition = {
  duration: 0.9,
  delay: 0,
  ease: [0.25, 0.1, 0.25, 1],
};

const revealToY0 = { definition: { y: 0 } };
const revealToX0 = { definition: { x: 0 } };

function Hero() {
  const translate = useHeroTranslations();
  const { vh, vw } = useViewportOffsets();

  const titleSubtitleRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  const { animationControls: titleControls } = useScrollReveal({
    ref: titleSubtitleRef,
    amount: 0.15,
    animationStart: revealToY0,
  });
  const { animationControls: subtitleControls } = useScrollReveal({
    ref: titleSubtitleRef,
    amount: 0.15,
    animationStart: revealToY0,
  });
  const { animationControls: roleControls } = useScrollReveal({
    ref: roleRef,
    amount: 0.15,
    animationStart: revealToX0,
  });
  const { animationControls: imageControls } = useScrollReveal({
    ref: imageRef,
    amount: 0.15,
    animationStart: revealToY0,
  });
  const { animationControls: button1Controls } = useScrollReveal({
    ref: buttonsRef,
    amount: 0.1,
    animationStart: revealToY0,
  });
  const { animationControls: button2Controls } = useScrollReveal({
    ref: buttonsRef,
    amount: 0.1,
    animationStart: revealToY0,
  });
  const { animationControls: badgesControls } = useScrollReveal({
    ref: badgesRef,
    amount: 0.15,
    animationStart: revealToX0,
  });

  return (
    <LandingSection
      className={{
        div: 'flex flex-col pt-32 pb-0 overflow-hidden',
        section: 'bg-secondary-500',
      }}
      removePadding={{
        top: true,
        bottom: true,
      }}
    >
      <div
        className="w-full flex flex-col items-center gap-2"
        ref={titleSubtitleRef}
      >
        <MotionText
          as={'h1'}
          className="w-fit txt-brand-tertiary-600 text-center"
          fontFamily={'display'}
          fontWeight={'bold'}
          responsiveVariants={{
            base: { fontSize: 'md' },
            sm: { fontSize: 'lg' },
            lg: { fontSize: 'xl' },
          }}
          initial={{ y: -vh - 300 }}
          animate={titleControls}
          transition={transition}
        >
          {translate('title')}
        </MotionText>
        <MotionText
          as={'h2'}
          className="w-fit txt-brand-tertiary-600 text-center"
          fontFamily={'display'}
          fontWeight={'medium'}
          fontSize={'sm'}
          responsiveVariants={{
            base: { fontSize: 'xs' },
            lg: { fontSize: 'sm' },
          }}
          initial={{ y: -vh }}
          animate={subtitleControls}
          transition={transition}
        >
          {translate('subtitle')}
        </MotionText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 lg:pt-0">
        <div className="order-1 flex justify-center lg:justify-start mt-auto mb-8 md:mb-0 lg:mb-20">
          <MotionText
            ref={roleRef}
            as={'p'}
            className="txt-secondary-700 text-center md:text-left"
            fontFamily={'text'}
            fontWeight={'medium'}
            fontSize={'lg'}
            initial={{ x: -vw }}
            animate={roleControls}
            transition={transition}
          >
            {translate('roleFirstLine')}
            <br />
            {translate('roleSecondLine')}
          </MotionText>
        </div>

        <div className="order-3 lg:order-2 col-span-1 md:col-span-2 lg:col-span-1 flex justify-center relative h-fit">
          <MotionImage
            src={'/me.webp'}
            ref={imageRef}
            width={450}
            height={450}
            alt={''}
            initial={{ y: vh }}
            animate={imageControls}
            transition={transition}
          />

          <div
            className="w-full absolute bottom-16 flex justify-center gap-3"
            ref={buttonsRef}
          >
            <MotionButton
              size={'default'}
              initial={{ y: vh * 1.1 }}
              animate={button1Controls}
              transition={transition}
            >
              {translate('ctaWork')}
            </MotionButton>

            <MotionButton
              size={'default'}
              variant={'secondary-gray'}
              initial={{ y: vh * 0.95 }}
              animate={button2Controls}
              transition={transition}
            >
              {translate('ctaContact')}
            </MotionButton>
          </div>
        </div>

        <div
          className="order-2 lg:order-3 flex flex-col items-center md:items-end mx-0 md:mx-auto lg:mx-0 mt-auto gap-3 mb-0 lg:mb-20"
          ref={badgesRef}
        >
          {[
            HERO_BADGES.slice(0, 3),
            HERO_BADGES.slice(3, 5),
            HERO_BADGES.slice(5),
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-3">
              {row.map((badge, badgeIndex) => (
                <MotionBadge
                  key={badge}
                  color={'brand'}
                  size={'md'}
                  type={'pillColor'}
                  initial={{
                    x:
                      vw * (rowIndex === 0 ? 0.6 : rowIndex === 1 ? 0.8 : 1.0) +
                      vw * 0.15 * badgeIndex,
                  }}
                  animate={badgesControls}
                  transition={transition}
                >
                  {badge}
                </MotionBadge>
              ))}
            </div>
          ))}
        </div>
      </div>
    </LandingSection>
  );
}

export default Hero;
