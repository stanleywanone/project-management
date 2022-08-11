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

const TitleInput = styled.input`
  border: 1px solid black;
  margin-bottom: 15px;
  border-radius: 5px;
`

const DescriptionTextArea = styled.textarea`
  border: 1px solid black;
  width: 100%;
  height: 200px;
  border-radius: 5px;
`

const CancelButton = styled.button`
  width: 80px;
  border-radius: 5px;
  background-color: #eb5252;
  color: white;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const SumbitButton = styled.button`
  width: 80px;
  border-radius: 5px;
  background-color: var(--secondary-color);
  color: white;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
`
export interface NewCardProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NewCard = ({ isOpen, setIsOpen }: NewCardProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent px={4} py={4}>
        <ModalHeader p={0} mb={4}>
          New Card
        </ModalHeader>
        <h1>Add Title</h1>
        <TitleInput />
        <ModalBody p={0}>
          <h1>Description</h1>
          <DescriptionTextArea />
        </ModalBody>

        <ModalFooter p={0} my={3}>
          <CancelButton onClick={() => setIsOpen(false)}>Cancel</CancelButton>
          <SumbitButton>Submit</SumbitButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewCard
