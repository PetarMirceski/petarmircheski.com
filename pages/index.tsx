import { CheckCircleIcon, SpinnerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FancyLink } from "components/FancyLink";
import { MotionWrapper } from "layouts/MotionWrapper";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  const imageSize = useBreakpointValue({ base: 300, md: 1500 }); // Adjust sizes as needed

  return (
    <>
      <MotionWrapper>
        <Container maxW="container.md" py={8}>
          <Flex flexDir={{ base: "column", md: "row" }} align="center">
            {/* Left side - Profile Image */}
            <Box p={4} textAlign={{ base: "center", md: "left" }}>
              <Image
                src="/static/images/beach_crop.jpeg"
                alt="Your Profile"
                width={imageSize}
                height={imageSize}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Right side - Description */}
            <Box p={4} textAlign={{ base: "left", md: "left" }}>
              <Heading as="h2" size="lg" mb={4}>
                About Me
              </Heading>
              <Text align="left">
                I am a Macedonian graduate student at Tokyo Institue of
                Technology majoring in the Department of Systems and Control
                Engineering, School of Engineering, Tokyo Institute of
                Technology, Japan. My academic advisor is Prof. Dr. Nakao
                Hiroya. I have a knack for problem solving. You can find my{" "}
                <FancyLink href="/cv.pdf">CV&nbsp;here</FancyLink>.
              </Text>
            </Box>
          </Flex>

          <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>
              Interests
            </Heading>
            <Text mb={2}>
              I have a deep-seated passion for delving into the topic of
              nonlinear dynamics and control engineering. I have been fortunate
              to immerse myself in a variety of captivating topics, including
              Reduction Methods, Syncronization, Nonlinear System Analysis,
              Chaos Theory and Networked Dynamics. These explorations have
              equipped me with a solid foundation in the realms of systems
              engineering while nurturing my fascination for intricate dynamics
              and their real-world applications.
            </Text>
            <Text mb={2}>
              I love learning languages, I am fluent in Macedonian and English,
              and I have some efficiency in Serbo-Croatian. I am currently
              engrossed in mastering Japanese. My linguistic journey has not
              only enabled me to bridge cultural gaps but has also kindled my
              curiosity for understanding diverse societies.
            </Text>

            <Text mb={2}>
              When I am not doing research or at the lab I tweak with my
              dot-files, program, tweak electronics or stroll through Akihabara
              to find dirt cheap electronics and garbage that I like tweaking
              with. I also sometimes write
              <FancyLink p={1} href="/blog">
                blog posts
              </FancyLink>
              on this website.
            </Text>

            <Text>
              I generally don&apos;t use social media so the only way to track
              what I do is to either look up this website or message me at
              <FancyLink p={1} href="mailto:petar.mircheski1998@gmail.com">
                petar.mircheski1998@gmail.com
              </FancyLink>
              .
            </Text>
          </Box>
          <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>
              Resume
            </Heading>
            <Heading as="h2" size="md" mb={4}>
              Education
            </Heading>
            <List spacing={2} mb={4}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                [2020] Undergraduate studies at Ss. Cyril and Methodius
                University of Skopje, Faculty of Electrical Engineering and
                Information Technology, Department of Systems and Control
                Engineering.
              </ListItem>
              <ListItem>
                <ListIcon as={SpinnerIcon} color="green.500" />
                [2021~] - Master studies at Department of Systems and Control
                Engineering, School of Engineering, Tokyo Institute of
                Technology, Japan.
              </ListItem>
            </List>

            <Heading as="h2" size="md" mb={4}>
              Professional Experience
            </Heading>
            <List spacing={2} mb={4}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                [2019] Worked as a Machine Learning engineer at Aritmatrix,
                Skopje.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                [2020] Worked as Front-End Senior Developer at Aritmatrix,
                Skopje.
              </ListItem>

              <ListItem>
                <ListIcon as={SpinnerIcon} color="green.500" />
                [2022~] - Research Assistant at Department of Systems and
                Control Engineering, School of Engineering, Tokyo Institute of
                Technology, Japan.{" "}
              </ListItem>
            </List>

            <Heading as="h2" size="md" mb={4}>
              Conferences Attended
            </Heading>
            <List spacing={2} mb={4}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                [2022] Conference on Complex Systems Spain, Palma de Majorka
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                [2023] IUTAM Japan, Tsukuba
              </ListItem>

              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                [2023] IFAC Japan, Yokohama
              </ListItem>

              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                [2023] Dyanamics Days Europe, Naples
              </ListItem>
            </List>
          </Box>
        </Container>
      </MotionWrapper>
    </>
  );
};

export default Home;
