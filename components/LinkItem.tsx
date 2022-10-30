import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, ReactNode } from "react";

interface LinkItemProps {
  href: string;
  children: ReactNode;
}

export const LinkItem: FC<LinkItemProps> = ({ children, ...props }) => {
  return (
    <NextLink href={props.href} passHref legacyBehavior>
      <Link {...props} p={2} color={useColorModeValue("light", "dark")}>
        {children}
      </Link>
    </NextLink>
  );
};
