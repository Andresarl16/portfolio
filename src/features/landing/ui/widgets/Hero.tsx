'use client';

import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { useHeroTranslations } from '../../application/useHeroTranslations';
import Image from 'next/image';
import { HERO_BADGES } from '../../domain/landing.constants';
import { Badge } from '@/components/atoms/Badge';

function Hero() {
  const translate = useHeroTranslations();

  return (
    <section className="flex flex-col bg-secondary-500 px-12 md:px-24 pt-32">
      <div className="w-full flex flex-col items-center gap-2">
        <Text
          as={'h1'}
          className="w-fit txt-brand-tertiary-600 text-center"
          fontFamily={'display'}
          fontWeight={'bold'}
          responsiveVariants={{
            base: { fontSize: 'md' },
            sm: { fontSize: 'lg' },
            lg: { fontSize: 'xl' },
          }}
        >
          {translate('title')}
        </Text>
        <Text
          as={'h2'}
          className="w-fit txt-brand-tertiary-600 text-center"
          fontFamily={'display'}
          fontWeight={'medium'}
          fontSize={'sm'}
          responsiveVariants={{
            base: { fontSize: 'xs' },
            lg: { fontSize: 'sm' },
          }}
        >
          {translate('subtitle')}
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 lg:pt-0">
        <div className="order-1 flex justify-center lg:justify-start mt-auto mb-8 md:mb-0 lg:mb-20">
          <Text
            as={'p'}
            className="txt-secondary-700 text-center md:text-left"
            fontFamily={'text'}
            fontWeight={'medium'}
            fontSize={'lg'}
          >
            {translate('roleFirstLine')}
            <br />
            {translate('roleSecondLine')}
          </Text>
        </div>

        <div className="order-3 lg:order-2 col-span-1 md:col-span-2 lg:col-span-1 flex justify-center relative h-fit">
          <Image src={'/me.png'} width={450} height={450} alt={''} />

          <div className="w-full absolute bottom-16 flex justify-center gap-3">
            <Button
              responsiveVariants={{
                base: { size: 'default' },
                lg: { size: 'default' },
              }}
            >
              {translate('ctaWork')}
            </Button>
            <Button size={'default'} variant={'secondary-gray'}>
              {translate('ctaContact')}
            </Button>
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
              {row.map((badge) => (
                <Badge
                  color={'brand'}
                  key={badge}
                  size={'md'}
                  type={'pillColor'}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
