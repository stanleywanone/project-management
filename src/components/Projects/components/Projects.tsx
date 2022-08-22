import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { CardSectionOptions } from "../../../boundary/Card"
import { Card } from "../../../commons/Card"
import { CardSection } from "../../../commons/CardSection"
import { Loading } from "../../../commons/Loading"
import { UPDATED_DRAG_PROJECT } from "../api/post"
import { useProjects } from "../hooks/useProjects"

export interface ProjectsProps {
  projects: any
  setIsOpenAddProject: Dispatch<SetStateAction<boolean>>
  editProject: (e: any, id: string) => void
}

export const Projects = ({
  projects,
  setIsOpenAddProject,
  editProject,
}: ProjectsProps) => {
  const [cards, setCards] = useState(projects)
  const [updateLoading, setUpdateLoading] = useState(false)

  const { dragEnter, dropOver, dragging, setDragging, newProgress } =
    useProjects()

  const dragItem = useRef(null)

  useEffect(() => {
    setCards(projects)
  }, [projects])

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
          const newCards = cards.map((card: any) => {
            if (card.id === (currentItem as any).id) {
              return { ...card, project_progress: newProgress }
            }
            return card
          })
          setCards(newCards)
          dragItem.current = null
          setUpdateLoading(false)
        }
    })

    setDragging(false)
  }

  if (cards.length === 0 || updateLoading)
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
            {cards
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
