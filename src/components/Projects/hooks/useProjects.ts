import { Dispatch, SetStateAction, useState } from "react"
import { ProgressOptions } from "../../../boundary/Card"

export interface UseProjectsProps {
  dragEnter: (e: any, items: any) => void
  dropOver: (e: any) => void
  dragging: boolean
  setDragging: Dispatch<SetStateAction<boolean>>
  newProgress: string
}

export const useProjects = () => {
  const [dragging, setDragging] = useState(false)
  const [newProgress, setNewProgress] = useState("")

  const dragEnter = (e: any, items: any) => {
    setNewProgress(ProgressOptions[items.cardSectionIndex])
  }

  const dropOver = (e: any) => {
    e.preventDefault()
  }

  return {
    dragEnter,
    dropOver,
    dragging,
    setDragging,
    newProgress,
  }
}
