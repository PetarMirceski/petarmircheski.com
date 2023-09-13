import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Flex mt={6} w="full" alignItems="center" justifyContent="center">
      <Text>
        ©{new Date().getFullYear()} Petar Mircheski. All Rights Reserved.
      </Text>
    </Flex>
  );
};
