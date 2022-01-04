import { Box, SimpleGrid } from '@chakra-ui/react';
import { Bio } from 'components/Bio';
import { Card } from 'components/card';
import { FancyLink } from 'components/FancyLink';
import { ContainerLayout } from 'layouts/ContainerLayout';
import { Layout } from 'layouts/Layout';
import type { NextPage } from 'next';
import { IoHeart } from 'react-icons/io5';

const Home: NextPage = () => {
  return (
    <Layout>
      <ContainerLayout>
        <SimpleGrid columns={1} spacing={0} mt={-20}>
          <Box pb={10}>
            <Card title="Work" image="/computer_programming_man.png">
              I am currently residing in Tokyo since I am doing my masters
              degree here. I am majoring in the Department of Systems and
              Control Engineering, School of Engineering, Tokyo Institute of
              Technology, Japan (Advisor: Prof. Hiroya Nakao). I have a knack
              for problem solving.
            </Card>
          </Box>
          <Box py={10}>
            <Bio
              bioEntries={[
                { year: '1998', description: 'Born in Skopje, Macedonia.' },
                {
                  year: '2020',
                  description: `Completed undergraduate studies at Ss. Cyril and Methodius
                              University of Skopje, Faculty of Electrical Engineering and
                              Information Technology, Department of Systems and Control
                              Engineering.`,
                },
                {
                  year: '2019',
                  description:
                    'Worked as a Machine Learning engineer at Aritmatrix, Skopje.',
                },
                {
                  year: '2020',
                  description:
                    'Worked as Front-End Senior Developer at Aritmatrix, Skopje.',
                },
                {
                  year: '2021~',
                  description: `Master studies at Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology, Japan.`,
                },
              ]}
            />
          </Box>
          <Box py={10}>
            <Card title="I" icon={<IoHeart />} image="/neko_punch.png">
              Art and
              <FancyLink p={2} href="/music">
                Music.
              </FancyLink>
              When I am not doing research or at the lab I tweak with my
              <FancyLink p={2} href="https://gitlab.com/petar.mirceski1998">
                dot-files, program,
              </FancyLink>
              tweak electronics or stroll through Akihabara to find dirt cheap
              electronics and garbage that I like tweaking with.
            </Card>
          </Box>
        </SimpleGrid>
      </ContainerLayout>
    </Layout>
  );
};

export default Home;
