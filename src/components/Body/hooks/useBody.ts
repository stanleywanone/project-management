import { Dispatch, SetStateAction, useEffect, useState } from "react"
import {
  CardSectionOptions,
  PriorityOptions,
  TypeOptions,
} from "../../../boundary/Card"
import { GET_PROJECTS } from "../api/get"
import { ADD_PROJECT, UPDATED_PROJECT } from "../api/post"

export interface useBodyReturns {
  projects: any
  addProject: (data: any) => Promise<any>
  setAddProjectForm: Dispatch<SetStateAction<any>>
  editProjectform: (data: any) => Promise<any>
  setEditProjectForm: Dispatch<SetStateAction<any>>
  isOpenAddProject: boolean
  setIsOpenAddProject: Dispatch<SetStateAction<boolean>>
  editProject: (id: string) => void
  isOpenEditProject: boolean
  setIsOpenEditProject: Dispatch<SetStateAction<boolean>>
  setProjects: Dispatch<SetStateAction<any>>
}

export const useBody = () => {
  const [projects, setProjects] = useState([] as any)
  const [addProjectform, setAddProjectForm] = useState({
    project_priority: PriorityOptions[0].value,
    project_progress: CardSectionOptions[0].value,
    project_type: TypeOptions[0].value,
  })
  const [editProjectform, setEditProjectForm] = useState({} as any)
  const [isOpenAddProject, setIsOpenAddProject] = useState(false)
  const [isOpenEditProject, setIsOpenEditProject] = useState(false)

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

  const editProject = (e: any, id: string) => {
    if (e.detail === 2) {
      const project = projects.filter((p: any) => p.id === id)[0]
      setEditProjectForm(project)
      setIsOpenEditProject(true)
    }
  }

  const updatedProject = async (): Promise<any> => {
    UPDATED_PROJECT(editProjectform).then((s) => {
      if (s.status === "success") {
        setIsOpenEditProject(false)
        const newProjects = projects.map((p: any) => {
          if (p.id === editProjectform.id) {
            return { ...p, ...editProjectform }
          }
          return p
        })
        setProjects(newProjects)
      } else {
        setIsOpenEditProject(true)
      }
    })
  }

  return {
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
  }
}
