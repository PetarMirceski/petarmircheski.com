import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from 'components/header';
import { Footer } from 'components/footer';

export const Layout: FC = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container maxW="container.l" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
