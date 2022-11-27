import { Box, Flex, Link, chakra, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import Image from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  headerImage: string;
  description: string;
  date: string;
  slug: string;
}

export const BlogArticle: FC<Props> = ({
  title,
  headerImage,
  description,
  date,
  slug,
}) => {
  const dateObject = moment(date);
  return (
    <Flex
      key={title}
      bg={useColorModeValue("#e8d2b5", "black")}
      width="full"
      shadow="md"
      rounded="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mx="auto" rounded="lg" shadow="md" maxW="2xl">
        <Image
          src={headerImage}
          alt={title}
          width={1000}
          height={128}
          quality={100}
          className="rounded-image"
        />

        <Box p={2}>
          <Link
            display="block"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: "gray.600", textDecor: "underline" }}
            href={`/blog/${slug}`}
          >
            {title}
          </Link>

          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {description}
          </chakra.p>

          <Flex alignItems="center" my={3}>
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {dateObject.format("MMMM Do YYYY")}
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
