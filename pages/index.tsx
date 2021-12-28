import type { NextPage } from 'next';
import { LorenzSpinner } from 'components/threeScene';
import { Layout } from 'components/layout';
import dynamic from 'next/dynamic';
import { IoHeart } from 'react-icons/io5';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Card } from 'components/card';
import { Bio } from 'components/bio';

const ClientScene = dynamic(() => import('components/threeScene'), {
  ssr: false,
  loading: () => <LorenzSpinner />,
});

const Home: NextPage = () => {
  return (
    <Layout>
      <ClientScene />
      <SimpleGrid columns={1} spacing={0}>
        <Box>
          <Card
            title="Work"
            text="I am currently residing in Tokyo since I am doing my masters degree here.
            I am majoring in the Department of
            Systems and Control Engineering, School of Engineering, Tokyo
            Institute of Technology, Japan (Advisor: Prof. Hiroya Nakao). I have
            a knack for problem solving."
            image="/computer_programming_man.png"
          />
        </Box>
        <Box>
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
                description: 'Worked as Front-End Lead at Aritmatrix, Skopje.',
              },
              {
                year: '2021~',
                description: `Master studies at Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology, Japan.`,
              },
            ]}
          />
        </Box>
        <Box>
          <Card
            title="I"
            icon={<IoHeart />}
            text="Art and Music. When I am not doing research or at the
            lab I tweak with my dot-files, program, tweak electronics or
            strolling through Akihabara to find dirt cheap electronics and garbage that I like tweaking with. "
            image="/neko_punch.png"
          />
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
