import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const PostWrapper: FC<Props> = ({ children }) => {
  return (
    <Box
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
