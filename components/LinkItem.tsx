import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

interface LinkItemProps {
  href: string;
  children: string;
}

export const LinkItem: FC<LinkItemProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link p={2} color={useColorModeValue('light', 'dark')}>
        {children}
      </Link>
    </NextLink>
  );
};
