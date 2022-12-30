import { Box, VStack } from "@chakra-ui/react";
import { Bio } from "components/Bio";
import { Card, CardText } from "components/Card";
import { FancyLink } from "components/FancyLink";
import { LorenzSpinner } from "components/ThreeScene";
import { BlogHead } from "layouts/BlogHead";
import { MotionWrapper } from "layouts/MotionWrapper";
import { PaddedWrapper } from "layouts/PaddedWrapper";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { IoHeart } from "react-icons/io5";

const ClientScene = dynamic(() => import("components/ThreeScene"), {
  ssr: false,
  loading: () => <LorenzSpinner />,
});

const Home: NextPage = () => {
  return (
    <>
      <BlogHead />
      <ClientScene />
      <MotionWrapper>
        <PaddedWrapper>
          <VStack>
            <Box>
              <Card title="Work" image="static/images/newer_profile.jpg">
                <CardText>
                  I am currently residing in Tokyo since I am doing my masters
                  studies here. I am majoring in the Department of Systems and
                  Control Engineering, School of Engineering, Tokyo Institute of
                  Technology, Japan. My academic advisor is Prof. Dr. Nakao
                  Hiroya. I have a knack for problem solving. You can find my{" "}
                  <FancyLink href="/cv.pdf">CV here</FancyLink>.
                </CardText>
              </Card>
            </Box>
            <Box>
              <Bio
                bioEntries={[
                  { year: "1998", description: "Born in Skopje, Macedonia." },
                  {
                    year: "2019",
                    description:
                      "Worked as a Machine Learning engineer at Aritmatrix, Skopje.",
                  },
                  {
                    year: "2020",
                    description: `Completed undergraduate studies at Ss. Cyril and Methodius
                              University of Skopje, Faculty of Electrical Engineering and
                              Information Technology, Department of Systems and Control
                              Engineering.`,
                  },
                  {
                    year: "2020",
                    description:
                      "Worked as Front-End Senior Developer at Aritmatrix, Skopje.",
                  },
                  {
                    year: "2021~",
                    description: `Master studies at Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology, Japan.`,
                  },
                ]}
              />
            </Box>
            <Box>
              <Card
                title="I"
                icon={<IoHeart />}
                image="static/images/neko_punch.png"
              >
                <CardText>
                  Art and
                  <FancyLink p={1} href="/music">
                    Music.
                  </FancyLink>
                  When I am not doing research or at the lab I tweak with my
                  dot-files, program, tweak electronics or stroll through
                  Akihabara to find dirt cheap electronics and garbage that I
                  like tweaking with. I also sometimes write
                  <FancyLink p={1} href="/blog">
                    blog posts
                  </FancyLink>
                  on this website.
                </CardText>
                <CardText>
                  I generally don&apos;t use social media so the only way to
                  track what I do is to either look up this website or message
                  me at petar.mircheski1998@gmail.com.
                </CardText>
              </Card>
            </Box>
          </VStack>
        </PaddedWrapper>
      </MotionWrapper>
    </>
  );
};

export default Home;
