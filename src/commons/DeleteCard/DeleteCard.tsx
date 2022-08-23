import { Dispatch, SetStateAction } from "react"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import styled from "styled-components"

const DeleteButton = styled.button`
  width: 80px;
  border-radius: 5px;
  background-color: #eb5252;
  color: white;
  padding: 10px 5px;
`

const CancelButton = styled.button`
  width: 80px;
  border-radius: 5px;
  background-color: #a9a9a9;
  color: white;
  padding: 10px 5px;
  margin-right: 5px;
`

export interface DeleteCardProps {
  id: string
  openDeleteModal: boolean
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>
  title: string
  deleteProject: (id: string) => Promise<any>
}

export const DeleteCard = ({
  id,
  openDeleteModal,
  setOpenDeleteModal,
  title,
  deleteProject,
}: DeleteCardProps) => {
  return (
    <>
      <Modal
        isOpen={openDeleteModal}
        isCentered
        onClose={() => setOpenDeleteModal(false)}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent minW={"xl"}>
          <ModalHeader>Delete Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Do you really want to delete{" "}
            <span style={{ fontWeight: "bold" }}>{title}</span> ?
          </ModalBody>
          <ModalFooter>
            <CancelButton onClick={() => setOpenDeleteModal(false)}>
              Cancel
            </CancelButton>
            <DeleteButton onClick={() => deleteProject(id)}>
              Confirm
            </DeleteButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
