import { API_ENDPOINTS } from "../../../utlies/endpoints"
import { RequestMethods, requestOptions } from "../../../utlies/requestOptions"

export const UPDATED_DRAG_PROJECT = async (id: string, newProgress: string) => {
  const response = await fetch(
    `${API_ENDPOINTS()}/projectsApp/updated_drag_project/${id}`,
    requestOptions(RequestMethods.PUT, newProgress)
  )
  const status = response.json()
  return status
}

export const ADD_PROJECT = async (data: any) => {
  const response = await fetch(
    `${API_ENDPOINTS()}/projectsApp/add_project`,
    requestOptions(RequestMethods.POST, data)
  )
  const status = response.json()
  return status
}

export const UPDATED_PROJECT = async (data: any) => {
  const response = await fetch(
    `${API_ENDPOINTS()}/projectsApp/updated_project/${data.id}`,
    requestOptions(RequestMethods.PUT, data)
  )
  const status = response.json()
  return status
}

export const DELETE_PROJECT = async (id: any) => {
  const response = await fetch(
    `${API_ENDPOINTS()}/projectsApp/delete_project/${id}`,
    requestOptions(RequestMethods.DELETE)
  )
  const status = response.json()
  return status
}
