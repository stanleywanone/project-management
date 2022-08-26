export const ADD_PROJECT = async (data: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
  const response = await fetch(
    "https://pm-one.herokuapp.com/projectsApp/add_project",
    requestOptions
  )
  const status = response.json()
  return status
}

export const UPDATED_PROJECT = async (data: any) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
  const response = await fetch(
    `https://pm-one.herokuapp.com/projectsApp/updated_project/${data.id}`,
    requestOptions
  )
  const status = response.json()
  return status
}

export const DELETE_PROJECT = async (id: any) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }
  const response = await fetch(
    `https://pm-one.herokuapp.com/projectsApp/delete_project/${id}`,
    requestOptions
  )
  const status = response.json()
  return status
}
