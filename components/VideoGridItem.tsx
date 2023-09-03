import { Box, GridItem, Link } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
  videoId: string;
  link: string;
}
export const VideoGridItem: FC<Props> = ({ title, videoId, link }) => {
  return (
    <GridItem shadow="dark-lg" rounded="lg">
      <Box mx="auto" maxW="2xl">
        <Link display="block" fontWeight="bold" fontSize="2xl" href={link}>
          <Img
            roundedTop="lg"
            w="full"
            h={64}
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Article"
          />
        </Link>
        <Box p={6} display="flex">
          <Link
            display="block"
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            href={link}
          >
            {title}
          </Link>
        </Box>
      </Box>
    </GridItem>
  );
};
