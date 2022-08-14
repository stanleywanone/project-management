import { CardSectionOptions } from "../../boundary/Card"
import { Card } from "../../commons/Card"
import { CardSection } from "../../commons/CardSection"
import { NewCard } from "../../commons/NewCard"
import { useBody } from "./hooks/useBody"

export const Body = () => {
  const {
    projects,
    addProject,
    setAddProjectForm,
    isOpenAddProject,
    setIsOpenAddProject,
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
    </>
  )
}

export default Body
