import styled from "styled-components"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"

export interface NewCardProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NewCard = ({ isOpen, setIsOpen }: NewCardProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent maxH={"full"} color="white">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>ssssssssssssssssssssssssssssssssssss</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewCard
