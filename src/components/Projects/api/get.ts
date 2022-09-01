import { API_ENDPOINTS } from "../../../utlies/endpoints"
import { RequestMethods, requestOptions } from "../../../utlies/requestOptions"

export const GET_PROJECTS = async () => {
  const response = await fetch(
    `${API_ENDPOINTS()}/projectsApp/get_projects`,
    requestOptions(RequestMethods.GET)
  )
  const projects = await response.json()
  return projects
}
