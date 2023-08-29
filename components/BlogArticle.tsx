import {
  Box,
  Flex,
  Image,
  Link,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
/* import Image from "next/image"; */
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
      width="full"
      shadow="lg"
      rounded="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mx="auto" rounded="lg">
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={headerImage}
          alt="Article"
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
