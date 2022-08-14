import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CardSectionOptions, PriorityOptions } from "../../../boundary/Card"
import { GET_PROJECTS } from "../api/get"
import { ADD_PROJECT } from "../api/post"

export interface useBodyReturns {
  projects: any
  addProject: (data: any) => Promise<any>
  setAddProjectForm: Dispatch<SetStateAction<any>>
  isOpenAddProject: boolean
  setIsOpenAddProject: Dispatch<SetStateAction<boolean>>
}

export const useBody = () => {
  const [projects, setProjects] = useState([] as any)
  const [addProjectform, setAddProjectForm] = useState({
    project_priority: PriorityOptions[0].value,
    project_progress: CardSectionOptions[0].value,
  })
  const [isOpenAddProject, setIsOpenAddProject] = useState(false)

  useEffect(() => {
    GET_PROJECTS().then((p) => setProjects(p))
  }, [])

  const addProject = async (): Promise<any> => {
    ADD_PROJECT(addProjectform).then((s) => {
      if (s.status === "success") {
        setIsOpenAddProject(false)
        const newProjects = [...projects, { ...addProjectform }]
        setProjects(newProjects)
      } else {
        setIsOpenAddProject(true)
      }
    })
  }

  return {
    projects,
    addProject,
    setAddProjectForm,
    isOpenAddProject,
    setIsOpenAddProject,
  }
}
