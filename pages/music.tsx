import { Heading, Stack, chakra } from '@chakra-ui/react';
import { VideoGridItem } from 'components/VideoGridItem';
import { BlogArticlesGrid } from 'layouts/BlogArticlesGrid';
import { ContainerLayout } from 'layouts/ContainerLayout';
import { Layout } from 'layouts/Layout';
import type { NextPage } from 'next';

const Music: NextPage = () => {
  return (
    <Layout>
      <ContainerLayout>
        <Stack>
          <Stack mt={-20}>
            <Heading textAlign="center">Music That I Enjoy</Heading>
            <chakra.h1 textAlign="center">
              Handpicked songs that I think are worth sharing with the internet
            </chakra.h1>
          </Stack>
          <BlogArticlesGrid>
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
      </ContainerLayout>
    </Layout>
  );
};

export default Music;
