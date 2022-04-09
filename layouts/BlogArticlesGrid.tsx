import { SimpleGrid, Wrap } from "@chakra-ui/react";
import { FC } from "react";

export const BlogArticlesGrid: FC = ({ children }) => {
  return (
    <Wrap px="1rem">
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {children}
      </SimpleGrid>
    </Wrap>
  );
};
