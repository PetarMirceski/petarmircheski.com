import { Box, Container } from '@chakra-ui/react';
import { Footer } from 'components/footer';
import { Navbar } from 'components/header';
import { LorenzSpinner } from 'components/threeScene';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

const ClientScene = dynamic(() => import('components/threeScene'), {
  ssr: false,
  loading: () => <LorenzSpinner />,
});

export const Layout: FC<PropsWithChildren<{ showScene?: boolean }>> = ({
  children,
  showScene = true,
}) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container maxW="container.l" pt={14}>
        {showScene && <ClientScene />}
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
