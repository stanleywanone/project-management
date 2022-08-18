import styled from "styled-components"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import {
  CardSectionOptions,
  PriorityOptions,
  TypeOptions,
} from "../../boundary/Card"
import { Select } from "../Select"

const TitleInput = styled.input`
  border: 1px solid black;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 5px;
`

const DescriptionTextArea = styled.textarea`
  border: 1px solid black;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
`

const CancelButton = styled.button`
  width: 80px;
  border-radius: 5px;
  background-color: #eb5252;
  color: white;
  padding: 10px 5px;
`

const SumbitButton = styled.button`
  width: 80px;
  border-radius: 5px;
  background-color: var(--secondary-color);
  color: white;
  padding: 10px 5px;
  margin-left: 10px;
`
export interface NewCardProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onSubmit: () => void
  setForm: Dispatch<SetStateAction<any>>
}

export const NewCard = ({
  isOpen,
  setIsOpen,
  onSubmit,
  setForm,
}: NewCardProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent px={4} py={4}>
        <ModalHeader p={0} mb={4}>
          New Card
        </ModalHeader>
        <h1>Add Title</h1>
        <TitleInput
          onChange={(e) =>
            setForm((pre: any) => ({ ...pre, project_title: e.target.value }))
          }
        />
        <ModalBody p={0}>
          <h1>Description</h1>
          <DescriptionTextArea
            onChange={(e) =>
              setForm((pre: any) => ({
                ...pre,
                project_description: e.target.value,
              }))
            }
          />
          <h1>Progress</h1>
          <Select
            options={CardSectionOptions}
            onChange={(e) =>
              setForm((pre: any) => ({
                ...pre,
                project_progress: e.target.value,
              }))
            }
          />
          <h1>Priority</h1>
          <Select
            options={PriorityOptions}
            onChange={(e) =>
              setForm((pre: any) => ({
                ...pre,
                project_priority: e.target.value,
              }))
            }
          />
          <h1>Type</h1>
          <Select
            options={TypeOptions}
            onChange={(e) =>
              setForm((pre: any) => ({
                ...pre,
                project_type: e.target.value,
              }))
            }
          />
        </ModalBody>

        <ModalFooter p={0} my={3}>
          <CancelButton onClick={() => setIsOpen(false)}>Cancel</CancelButton>
          <SumbitButton onClick={() => onSubmit()}>Submit</SumbitButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewCard
