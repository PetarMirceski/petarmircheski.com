import { Box, chakra, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { PostWrapper } from 'layouts/PostWrapper';
import { FC } from 'react';

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  color: ${(props) => props.color};
`;

const BioYear = styled.span`
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
    <PostWrapper>
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
            <BioSection
              key={key}
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              <BioYear>{bioEntry.year}</BioYear>
              {bioEntry.description}
            </BioSection>
          );
        })}
      </Box>
    </PostWrapper>
  );
};
