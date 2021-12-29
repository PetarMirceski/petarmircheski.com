import { FC } from 'react';
import dynamic from 'next/dynamic';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from 'components/header';
import { LorenzSpinner } from 'components/threeScene';
import { Footer } from 'components/footer';

const ClientScene = dynamic(() => import('components/threeScene'), {
  ssr: false,
  loading: () => <LorenzSpinner />,
});

export const Layout: FC = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container maxW="container.l" pt={14}>
        <ClientScene />
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
