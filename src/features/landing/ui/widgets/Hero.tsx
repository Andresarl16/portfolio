import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col bg-secondary-500 px-24">
      <div className="w-full flex flex-col items-center gap-2">
        <Text
          as={'h1'}
          className="w-fit txt-brand-tertiary-600"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          Hey, I’m Andrés
        </Text>
        <Text
          as={'h2'}
          className="w-fit txt-brand-tertiary-600"
          fontFamily={'display'}
          fontWeight={'medium'}
          fontSize={'sm'}
        >
          I design and lead web systems built to scale.
        </Text>
      </div>

      <div className="grid grid-cols-3">
        <div className="mt-auto mb-20">
          <Text
            as={'p'}
            className="txt-secondary-700"
            fontFamily={'text'}
            fontWeight={'medium'}
            fontSize={'lg'}
          >
            Tech Lead · Full-Stack Engineer · Architecture-first thinking
          </Text>
        </div>

        <div className="relative h-fit">
          <Image src={'/me.png'} width={450} height={450} alt={''} />

          <div className="w-full absolute bottom-16 flex justify-center gap-3">
            <Button>Explore My Work</Button>
            <Button variant={'secondary-gray'}>Let’s Build Something</Button>
          </div>
        </div>

        <div className="mt-auto ml-auto mb-20">Badges</div>
      </div>
    </section>
  );
}

export default Hero;
