import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import { PostWrapper } from "layouts/PostWrapper";
import { FC, ReactNode } from "react";

interface Props {
  image: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const Card: FC<Props> = ({ image, title, icon, children }) => {
  return (
    <PostWrapper>
      <Box w={{ lg: "30%" }}>
        <Box
          h={{ base: 64, lg: "full" }}
          rounded={{ lg: "lg" }}
          bgSize="contain"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </Box>

      <Box py={20} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "70%" }}>
        <chakra.h2
          fontSize={{ base: "2xl", md: "3xl" }}
          color={useColorModeValue("black", "white")}
          fontWeight="bold"
          display="inline-flex"
          alignItems="center"
        >
          {title}
          <Box ml={2}>{icon && icon}</Box>
        </chakra.h2>
        {children}
      </Box>
    </PostWrapper>
  );
};

interface CardTextProps {
  children: ReactNode;
}
export const CardText: FC<CardTextProps> = ({ children }) => {
  return (
    <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
      {children}
    </chakra.p>
  );
};
