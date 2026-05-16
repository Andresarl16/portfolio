import { Text } from '@/components/atoms/text';
import Link, { LinkProps } from 'next/link';

interface NavbarLinkProps extends Omit<LinkProps, 'children'> {
  text: string;
}

function NavbarLink({ text, ...props }: NavbarLinkProps) {
  return (
    <Link {...props}>
      <Text
        className="txt-brand-tertiary_alt"
        fontWeight={'medium'}
        fontSize={'md'}
      >
        {' '}
        {text}{' '}
      </Text>
    </Link>
  );
}

export default NavbarLink;
