import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imagePath: string;
}
export const ModalComponent: FC<Props> = ({ isOpen, onClose, imagePath }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Image
            padding={10}
            quality="100"
            src={imagePath}
            width="100vw"
            height="100vh"
            layout="responsive"
            objectFit="contain"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
