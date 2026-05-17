'use client';

import React from 'react';
import LandingSection from '../components/LandingSection';
import { Text } from '@/components/atoms/text';
import { useContactMeTranslations } from '../../application/useContactMeTranslations';
import Link from 'next/link';
import { GitHubIcon, GmailIcon, LinkedInIcon } from '@/components/atoms/icons';

function ContactMe() {
  const translate = useContactMeTranslations();

  return (
    <LandingSection className={{ section: 'bg-brand-solid' }}>
      <div className="flex flex-col w-3/4 gap-2">
        <Text
          as="h1"
          className="text-secondary-500"
          fontFamily={'display'}
          fontWeight={'bold'}
          fontSize={'xl'}
        >
          {translate('title')}
        </Text>
        <Text
          as="h2"
          className="text-secondary-500"
          fontWeight={'regular'}
          fontSize={'xl'}
        >
          {translate('subtitle')}
        </Text>
      </div>

      <div className="flex flex-col w-1/4 gap-4 ml-auto">
        <Text
          as="h1"
          className="text-secondary-500"
          fontFamily={'display'}
          fontWeight={'semiBold'}
          fontSize={'xs'}
        >
          {translate('contact')}
        </Text>

        <div className="flex gap-8">
          <Link href="https://www.linkedin.com/in/andres-arl/" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/andres-arl/" target="_blank">
            <GitHubIcon className="text-[#6879D9]" />
          </Link>
          <Link href="https://www.linkedin.com/in/andres-arl/" target="_blank">
            <GmailIcon />
          </Link>
        </div>
      </div>
    </LandingSection>
  );
}

export default ContactMe;
