import { Container } from "@chakra-ui/react";
import { FC } from "react";

export const PaddedWrapper: FC = ({ children }) => {
  return <Container maxW="container.xl">{children}</Container>;
};
