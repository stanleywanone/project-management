import styled from "styled-components"
import { EditCard } from "../../../commons/EditCard"
import { NewCard } from "../../../commons/NewCard"
import { Header } from "../../Header"
import { useProjects } from "../hooks/useProjects"
import { ProjectCards } from "./ProjectCards"

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: "header" "body";
  grid-template-rows: 10% 90%;
`

export const ProjectBody = styled.div`
  grid-area: body;
  background-color: var(--secondary-color);
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const Projects = () => {
  const {
    projects,
    addProject,
    setAddProjectForm,
    isOpenAddProject,
    setIsOpenAddProject,
    editProjectform,
    setEditProjectForm,
    editProject,
    isOpenEditProject,
    setIsOpenEditProject,
    updatedProject,
    setProjects,
    openDeleteModal,
    setOpenDeleteModal,
    deleteProject,
  } = useProjects()

  const title = "Project Management"
  return (
    <ProjectsContainer>
      <Header title={title} />
      <ProjectBody>
        <ProjectCards
          setProjects={setProjects}
          projects={projects}
          editProject={editProject}
          setIsOpenAddProject={setIsOpenAddProject}
        />
        <NewCard
          isOpen={isOpenAddProject}
          setIsOpen={setIsOpenAddProject}
          setForm={setAddProjectForm}
          onSubmit={addProject}
        />
        <EditCard
          isOpen={isOpenEditProject}
          setIsOpen={setIsOpenEditProject}
          setForm={setEditProjectForm}
          onSubmit={updatedProject}
          editForm={editProjectform}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          deleteProject={deleteProject}
        />
      </ProjectBody>
    </ProjectsContainer>
  )
}

export default Projects
