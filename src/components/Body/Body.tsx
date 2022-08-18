import { CardSectionOptions } from "../../boundary/Card"
import { Card } from "../../commons/Card"
import { CardSection } from "../../commons/CardSection"
import { EditCard } from "../../commons/EditCard"
import { NewCard } from "../../commons/NewCard"
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
  } = useBody()
  return (
    <>
      {CardSectionOptions.map((cardSection) => {
        return (
          <CardSection
            name={cardSection.label}
            setIsOpen={setIsOpenAddProject}
            key={`cardSection.label ${cardSection.label}`}
          >
            {projects
              .filter((p: any) => p.project_progress === cardSection.value)
              .map((p: any) => {
                return (
                  <Card
                    title={p.project_title}
                    key={`${p.project_title} title`}
                    onClick={(e) => editProject(e, p.id)}
                    priority={p.project_priority}
                    type={p.project_type}
                  />
                )
              })}
          </CardSection>
        )
      })}
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
