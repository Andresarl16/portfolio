'use client';

import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { useHeroTranslations } from '../../application/useHeroTranslations';
import Image from 'next/image';
import { HERO_BADGES } from '../../domain/landing.constants';
import { Badge } from '@/components/atoms/Badge';
import { motion, Transition } from 'motion/react';
import { useViewportOffsets } from '@/shared/hooks/useViewportOffsets';

const MotionButton = motion(Button);
const MotionBadge = motion(Badge);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const transition: Transition = {
  duration: 0.9,
  delay: 0.3,
  ease: [0.25, 0.1, 0.25, 1],
};

function Hero() {
  const translate = useHeroTranslations();
  const offsets = useViewportOffsets();

  if (!offsets) return null;

  return (
    <section className="flex flex-col bg-secondary-500 px-12 md:px-24 pt-32 overflow-hidden">
      <div className="w-full flex flex-col items-center gap-2">
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
          initial={{ y: -offsets.vh - 300 }}
          animate={{ y: 0 }}
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
          initial={{ y: -offsets.vh }}
          animate={{ y: 0 }}
          transition={transition}
        >
          {translate('subtitle')}
        </MotionText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 lg:pt-0">
        <div className="order-1 flex justify-center lg:justify-start mt-auto mb-8 md:mb-0 lg:mb-20">
          <MotionText
            as={'p'}
            className="txt-secondary-700 text-center md:text-left"
            fontFamily={'text'}
            fontWeight={'medium'}
            fontSize={'lg'}
            initial={{ x: -offsets.vw }}
            animate={{ x: 0 }}
            transition={transition}
          >
            {translate('roleFirstLine')}
            <br />
            {translate('roleSecondLine')}
          </MotionText>
        </div>

        <div className="order-3 lg:order-2 col-span-1 md:col-span-2 lg:col-span-1 flex justify-center relative h-fit">
          <MotionImage
            src={'/me.png'}
            width={450}
            height={450}
            alt={''}
            initial={{ y: offsets.vh }}
            animate={{ y: 0 }}
            transition={transition}
          />

          <div className="w-full absolute bottom-16 flex justify-center gap-3">
            <MotionButton
              size={'default'}
              initial={{ y: offsets.vh * 1.1 }}
              animate={{ y: 0 }}
              transition={transition}
            >
              {translate('ctaWork')}
            </MotionButton>

            <MotionButton
              size={'default'}
              variant={'secondary-gray'}
              initial={{ y: offsets.vh * 0.95 }}
              animate={{ y: 0 }}
              transition={transition}
            >
              {translate('ctaContact')}
            </MotionButton>
          </div>
        </div>

        <div className="order-2 lg:order-3 flex flex-col items-center md:items-end mx-0 md:mx-auto lg:mx-0 mt-auto gap-3 mb-0 lg:mb-20">
          {/* TODO: Move this to logic? */}
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
                      offsets.vw *
                        (rowIndex === 0 ? 0.6 : rowIndex === 1 ? 0.8 : 1.0) +
                      offsets.vw * 0.15 * badgeIndex,
                  }}
                  animate={{ x: 0 }}
                  transition={transition}
                >
                  {badge}
                </MotionBadge>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
