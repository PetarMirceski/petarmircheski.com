import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

export const BlogArticlesGrid: FC = ({ children }) => {
  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
      {children}
    </SimpleGrid>
  );
};
