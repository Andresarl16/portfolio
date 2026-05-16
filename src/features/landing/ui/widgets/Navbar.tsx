'use client';

import { Text } from '@/components/atoms/text';
import { useNavbarTranslations } from '../../application/useNavbarTranslations';
import { NAV_LINKS } from '../../domain/landing.constants';
import NavbarLink from '../components/NavbarLink';

function Navbar() {
  const translate = useNavbarTranslations();

  return (
    <nav className="fixed top-6 w-full max-w-screen-2xl flex justify-center gap-4 z-20">
      <div className="flex bg-white/40 backdrop-blur-xs px-14 py-5 rounded-full gap-10">
        {NAV_LINKS.map(({ href, labelKey }) => (
          // TODO: Missing Highlight current Section
          <NavbarLink key={href} href={href} text={translate(labelKey)} />
        ))}
      </div>
      {/* TODO: Change this div for a Button */}
      <div className="bg-brand-400 backdrop-blur-xs px-14 py-5 rounded-full">
        <Text
          className="txt-primary_on-brand"
          fontWeight={'medium'}
          fontSize={'md'}
        >
          {translate('contactMe')}
        </Text>
      </div>
    </nav>
  );
}

export default Navbar;
