import { Box, SimpleGrid } from '@chakra-ui/react';
import { Bio } from 'components/Bio';
import { Card, CardText } from 'components/Card';
import { FancyLink } from 'components/FancyLink';
import { Layout } from 'layouts/Layout';
import type { NextPage } from 'next';
import { IoHeart } from 'react-icons/io5';

const Home: NextPage = () => {
  return (
    <Layout>
      <SimpleGrid columns={1} spacing={0} mt={-10}>
        <Box pb={10}>
          <Card title="Work" image="/newer_profile.jpg">
            <CardText>
              I am currently residing in Tokyo since I am doing my masters
              studies here. I am majoring in the Department of Systems and
              Control Engineering, School of Engineering, Tokyo Institute of
              Technology, Japan. My academic advisor is Prof. Dr. Nakao Hiroya.
              I have a knack for problem solving. You can find my CV{' '}
              <FancyLink href="/cv.pdf">here</FancyLink>.
            </CardText>
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
            <CardText>
              Art and
              <FancyLink p={1} href="/music">
                Music.
              </FancyLink>
              When I am not doing research or at the lab I tweak with my
              <FancyLink p={1} href="https://gitlab.com/petar.mirceski1998">
                dot-files, program,
              </FancyLink>
              tweak electronics or stroll through Akihabara to find dirt cheap
              electronics and garbage that I like tweaking with. I also
              sometimes write
              <FancyLink p={1} href="/blog">
                blog posts
              </FancyLink>
              on this website.
            </CardText>
            <CardText>
              I generally don&apos;t use social media so the only way to track
              what I do is to either look up this website or message me at
              petar.mircheski1998@gmail.com.
            </CardText>
          </Card>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
