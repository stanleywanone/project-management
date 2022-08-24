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
import { DeleteCard } from "../DeleteCard/DeleteCard"

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
  background-color: #a9a9a9;
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

const DeleteButton = styled.button`
  width: 80px;
  border-radius: 5px;
  background-color: #eb5252;
  color: white;
  padding: 10px 5px;
`
export interface EditCardProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onSubmit: () => void
  setForm: Dispatch<SetStateAction<any>>
  editForm: any
  openDeleteModal: boolean
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>
  deleteProject: (id: string) => Promise<any>
}

export const EditCard = ({
  isOpen,
  setIsOpen,
  onSubmit,
  setForm,
  editForm,
  openDeleteModal,
  setOpenDeleteModal,
  deleteProject,
}: EditCardProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent px={4} py={4}>
          <ModalHeader p={0} mb={4}>
            Project
          </ModalHeader>
          <h1>Title</h1>
          <TitleInput
            value={editForm.project_title}
            onChange={(e) =>
              setForm((pre: any) => ({ ...pre, project_title: e.target.value }))
            }
          />
          <ModalBody p={0}>
            <h1>Description</h1>
            <DescriptionTextArea
              value={editForm.project_description}
              onChange={(e) =>
                setForm((pre: any) => ({
                  ...pre,
                  project_description: e.target.value,
                }))
              }
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h1>Progress</h1>
                <Select
                  options={CardSectionOptions}
                  value={editForm.project_progress}
                  onChange={(e) =>
                    setForm((pre: any) => ({
                      ...pre,
                      project_progress: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <h1>Priority</h1>
                <Select
                  options={PriorityOptions}
                  value={editForm.project_priority}
                  onChange={(e) =>
                    setForm((pre: any) => ({
                      ...pre,
                      project_priority: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <h1>Type</h1>
            <Select
              options={TypeOptions}
              value={editForm.project_type}
              onChange={(e) =>
                setForm((pre: any) => ({
                  ...pre,
                  project_type: e.target.value,
                }))
              }
            />
          </ModalBody>

          <ModalFooter
            p={0}
            my={3}
            display="flex"
            justifyContent={"space-between"}
          >
            <DeleteButton onClick={() => setOpenDeleteModal(true)}>
              Delete
            </DeleteButton>
            <div>
              <CancelButton onClick={() => setIsOpen(false)}>
                Cancel
              </CancelButton>
              <SumbitButton onClick={() => onSubmit()}>Save</SumbitButton>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <DeleteCard
        id={editForm.id}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        title={editForm.project_title}
        deleteProject={deleteProject}
      />
    </>
  )
}

export default EditCard
