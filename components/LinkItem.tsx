import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

interface LinkItemProps {
  href: string;
}

export const LinkItem: FC<LinkItemProps> = ({ children, ...props }) => {
  return (
    <NextLink href={props.href}>
      <Link {...props} p={2} color={useColorModeValue('light', 'dark')}>
        {children}
      </Link>
    </NextLink>
  );
};
