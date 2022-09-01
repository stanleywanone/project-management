import { API_ENDPOINTS } from "../../../utlies/endpoints"

export const SignUp = async (user: any): Promise<any> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }
  const response = await fetch(
    `${API_ENDPOINTS()}/user/create_user`,
    requestOptions
  )
  const data = await response.json()

  return data
}

export const SignIn = async (user: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }
  const response = await fetch(`${API_ENDPOINTS()}/api/token/`, requestOptions)
  const data = await response.json()

  return data
}

export const RefreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh")
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  }
  const response = await fetch(
    `${API_ENDPOINTS()}/api/token/refresh/`,
    requestOption
  )
  const data = await response.json()

  localStorage.setItem("access", data.access)

  return data
}
