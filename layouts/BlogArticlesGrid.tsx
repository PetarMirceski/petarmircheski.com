import { SimpleGrid, Wrap } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const BlogArticlesGrid: FC<Props> = ({ children }) => {
  return (
    <Wrap px="1rem">
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {children}
      </SimpleGrid>
    </Wrap>
  );
};
