import { FC } from 'react';
import { Flex, Box, chakra, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

interface BioEntry {
  year: string;
  description: string;
}

interface Props {
  bioEntries: BioEntry[];
}

export const Bio: FC<Props> = ({ bioEntries }) => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        mx={{ lg: 8 }}
        display={{ lg: 'flex' }}
        maxW={{ lg: '5xl' }}
        shadow={{ lg: 'lg' }}
        rounded={{ lg: 'lg' }}
        w={{ lg: '100%' }}
      >
        <Box
          pt={10}
          pb={20}
          px={6}
          maxW={{ base: 'xl', lg: '5xl' }}
          w={{ lg: '100%' }}
        >
          <chakra.h2
            fontSize={{ base: '2xl', md: '3xl' }}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
          >
            Bio
          </chakra.h2>
          {bioEntries.map((bioEntry, key) => {
            return (
              <BioSection key={key}>
                <BioYear>{bioEntry.year}</BioYear>
                {bioEntry.description}
              </BioSection>
            );
          })}
        </Box>
      </Box>
    </Flex>
  );
};
