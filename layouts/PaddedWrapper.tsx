import { Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const PaddedWrapper: FC<Props> = ({ children }) => {
  return (
    <Container maxW="container.xxl" pt="20">
      {children}
    </Container>
  );
};
