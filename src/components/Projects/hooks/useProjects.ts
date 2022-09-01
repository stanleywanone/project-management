import { Dispatch, SetStateAction, useEffect, useState } from "react"
import {
  CardSectionOptions,
  PriorityOptions,
  TypeOptions,
} from "../../../boundary/Card"
import { GET_PROJECTS } from "../api/get"
import { ADD_PROJECT, DELETE_PROJECT, UPDATED_PROJECT } from "../api/post"
import { v4 as uuidv4 } from "uuid"
import { useError } from "../../../utlies/useError"

export interface useProjectsReturns {
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
  openDeleteModal: boolean
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>
  deleteProject: (id: string) => Promise<any>
}

export const useProjects = () => {
  const [projects, setProjects] = useState([] as any)
  const [addProjectform, setAddProjectForm] = useState({
    project_priority: PriorityOptions[0].value,
    project_progress: CardSectionOptions[0].value,
    project_type: TypeOptions[0].value,
  })
  const [editProjectform, setEditProjectForm] = useState({} as any)
  const [isOpenAddProject, setIsOpenAddProject] = useState(false)
  const [isOpenEditProject, setIsOpenEditProject] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const { errorResult } = useError()

  useEffect(() => {
    GET_PROJECTS().then((res) => {
      if (res.status === "success") {
        setProjects(res.data)
        return
      }
      errorResult(res)
    })
  }, [errorResult])

  const addProject = async (): Promise<any> => {
    const prjectForm = { ...addProjectform, id: uuidv4() }
    ADD_PROJECT(prjectForm).then((s) => {
      if (s.status === "success") {
        setIsOpenAddProject(false)
        const newProjects = [...projects, { ...prjectForm }]
        setProjects(newProjects)
      } else {
        setIsOpenAddProject(true)
        errorResult(s)
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
        return
      }
      errorResult(s)
    })
  }

  const deleteProject = async (id: string): Promise<any> => {
    DELETE_PROJECT(id).then((s) => {
      if (s.status === "success") {
        setIsOpenEditProject(false)
        setOpenDeleteModal(false)
        const newProjects = projects.filter((p: any) => p.id !== id)
        setProjects(newProjects)
        return
      }
      errorResult(s)
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
    openDeleteModal,
    setOpenDeleteModal,
    deleteProject,
  }
}
