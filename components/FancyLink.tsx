import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

export const FancyLink: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink href={String(props.href)} passHref>
      <Link {...props} color="teal.500">
        {children}
      </Link>
    </NextLink>
  );
};
