import { Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

interface Props {
  doFlex?: boolean;
  children: ReactNode;
}

export const MotionWrapper: FC<Props> = ({ children, doFlex = true }) => {
  const flexWrapperWithChildren = (
    <Flex
      bg={useColorModeValue("white", "black")}
      w="full"
      alignItems="center"
      justifyContent="center"
      borderRadius="20px"
    >
      {children}
    </Flex>
  );
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {doFlex ? flexWrapperWithChildren : children}
    </motion.article>
  );
};
