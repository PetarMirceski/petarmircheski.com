import { SimpleGrid, Wrap } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const BlogArticlesGrid: FC<Props> = ({ children }) => {
  return (
    <Wrap>
      <SimpleGrid width="full" spacing={6} columns={[1, 1, 1, 2, 3, 4]} mx={10}>
        {children}
      </SimpleGrid>
    </Wrap>
  );
};
