import { EditCard } from "../../commons/EditCard"
import { NewCard } from "../../commons/NewCard"
import { Projects } from "../Projects/components/Projects"
import { useBody } from "./hooks/useBody"

export const Body = () => {
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
  } = useBody()
  return (
    <>
      <Projects
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
      />
    </>
  )
}

export default Body
