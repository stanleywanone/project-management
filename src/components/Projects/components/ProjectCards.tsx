import { Dispatch, SetStateAction, useRef, useState } from "react"
import { CardSectionOptions } from "../../../boundary/Card"
import { Card } from "../../../commons/Card"
import { CardSection } from "../../../commons/CardSection"
import { Loading } from "../../../commons/Loading"
import { UPDATED_DRAG_PROJECT } from "../api/post"
import { useDrag } from "../hooks/useDrag"

export interface ProjectCardsProps {
  projects: any
  setIsOpenAddProject: Dispatch<SetStateAction<boolean>>
  editProject: (e: any, id: string) => void
  setProjects: Dispatch<SetStateAction<any>>
}

export const ProjectCards = ({
  projects,
  setProjects,
  setIsOpenAddProject,
  editProject,
}: ProjectCardsProps) => {
  const [updateLoading, setUpdateLoading] = useState(false)

  const { dragEnter, dropOver, dragging, setDragging, newProgress } = useDrag()

  const dragItem = useRef(null)

  const dragStart = (e: any, items: any) => {
    dragItem.current = items
    setTimeout(() => {
      setDragging(true)
    }, 0)
  }

  const drop = (e: any) => {
    const currentItem = dragItem.current
    setUpdateLoading(true)
    UPDATED_DRAG_PROJECT((currentItem as any).id, newProgress).then((s) => {
      if (s.status === "success")
        if (currentItem) {
          const newProjects = projects.map((project: any) => {
            if (project.id === (currentItem as any).id) {
              return { ...project, project_progress: newProgress }
            }
            return project
          })
          setProjects(newProjects)
          dragItem.current = null
          setUpdateLoading(false)
        }
    })

    setDragging(false)
  }

  if (projects.length === 0 || updateLoading)
    return <Loading updateLoading={updateLoading} />

  return (
    <>
      {CardSectionOptions.map((cardSection, cardSectionIndex) => {
        return (
          <CardSection
            name={cardSection.label}
            setIsOpen={setIsOpenAddProject}
            key={`cardSection.label ${cardSection.label}`}
            onDragEnter={
              dragging ? (e) => dragEnter(e, { cardSectionIndex }) : undefined
            }
            onDragOver={dropOver}
            onDrop={drop}
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
                    draggable
                    onDragStart={(e) =>
                      dragStart(e, { cardSectionIndex, id: p.id })
                    }
                    isDragging={
                      dragging && p.id === (dragItem.current as any).id
                    }
                  />
                )
              })}
          </CardSection>
        )
      })}
    </>
  )
}
