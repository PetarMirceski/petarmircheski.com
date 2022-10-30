import { Box, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const PostWrapper: FC<Props> = ({ children }) => {
  return (
    <Box
      bg={useColorModeValue("#e8d2b5", "black")}
      mx={{ lg: 8 }}
      p={6}
      display={{ lg: "flex" }}
      maxW={{ lg: "5xl" }}
      shadow={{ lg: "lg" }}
      rounded={{ lg: "lg" }}
    >
      {children}
    </Box>
  );
};
