import { Container, Heading, Stack, Text, chakra } from "@chakra-ui/react";
import { VideoGridItem } from "components/VideoGridItem";
import { BlogArticlesGrid } from "layouts/BlogArticlesGrid";
import { BlogHead } from "layouts/BlogHead";
import { MotionWrapper } from "layouts/MotionWrapper";
import type { NextPage } from "next";

const Music: NextPage = () => {
  return (
    <MotionWrapper>
      <BlogHead />
      <Container maxW="container.xl" py={8}>
        <Stack p={10}>
          <Stack mt={-20}>
            <Heading textAlign="center">Music That I Enjoy</Heading>
            <Text mb={6} textAlign="center">
              Handpicked songs that I think are worth sharing with the internet
            </Text>
          </Stack>
          <BlogArticlesGrid>
            <VideoGridItem
              title="Alexandra Savior - Can't Help Myself"
              videoId="2faK7a4NdMg"
              link="https://www.youtube.com/watch?v=2faK7a4NdMg"
            />
            <VideoGridItem
              title="Puma Blue - Hounds"
              videoId="IuVFMVX2eY0"
              link="https://www.youtube.com/watch?v=IuVFMVX2eY0"
            />
            <VideoGridItem
              title="Magdalena Bay - Dreamcatching"
              videoId="8QfQeYaS-7A"
              link="https://www.youtube.com/watch?v=8QfQeYaS-7A"
            />
            <VideoGridItem
              title="Radiohead - Let Down"
              videoId="ZVgHPSyEIqk"
              link="https://www.youtube.com/watch?v=ZVgHPSyEIqk"
            />
            <VideoGridItem
              title="Arcade Fire - Reflektor"
              videoId="7E0fVfectDo"
              link="https://www.youtube.com/watch?v=7E0fVfectDo"
            />
            <VideoGridItem
              title="CHVRCHES - Violent Delights"
              videoId="Emi3HNK_tiI"
              link="https://www.youtube.com/watch?v=Emi3HNK_tiI"
            />
            <VideoGridItem
              title="Radiohead - Knives Out"
              videoId="2Lpw3yMCWro"
              link="https://www.youtube.com/watch?v=2Lpw3yMCWro"
            />
            <VideoGridItem
              title="Tigran Hamasyan - Road Song"
              videoId="XzYi73A7g7E"
              link="https://www.youtube.com/watch?v=XzYi73A7g7E"
            />
            <VideoGridItem
              title="toe - グッドバイ / Goodbye"
              videoId="e1pZIfretEs"
              link="https://www.youtube.com/watch?v=e1pZIfretEs"
            />
            <VideoGridItem
              title="Chick Corea - Spain"
              videoId="sEhQTjgoTdU"
              link="https://www.youtube.com/watch?v=sEhQTjgoTdU"
            />

            <VideoGridItem
              title="Angel Olsen - Lark"
              videoId="6uaN60k0-zY"
              link="https://www.youtube.com/watch?v=6uaN60k0-zY"
            />
            <VideoGridItem
              title="Tom Jobim - Chega De Saudade"
              videoId="tlp8iY4g--4"
              link="https://www.youtube.com/watch?v=tlp8iY4g--4"
            />
            <VideoGridItem
              title="Talking Heads - Once In A Lifetime"
              videoId="fR0jgT9UX0Q"
              link="https://www.youtube.com/watch?v=fR0jgT9UX0Q"
            />

            <VideoGridItem
              title="Emma Ruth Rundle - The Distance"
              videoId="w9LgIOx6WJ8"
              link="https://www.youtube.com/watch?v=w9LgIOx6WJ8"
            />
            <VideoGridItem
              title="M83 - My Tears Are Becoming A Sea"
              videoId="uE8EhJ9gS28"
              link="https://www.youtube.com/watch?v=uE8EhJ9gS28"
            />
          </BlogArticlesGrid>
        </Stack>
      </Container>
    </MotionWrapper>
  );
};

export default Music;
