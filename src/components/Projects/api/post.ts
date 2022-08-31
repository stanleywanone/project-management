export const UPDATED_DRAG_PROJECT = async (id: string, newProgress: string) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProgress),
  }
  const response = await fetch(
    `https://pm-django-backend.herokuapp.com/projectsApp/updated_drag_project/${id}`,
    requestOptions
  )
  const status = response.json()
  return status
}

export const ADD_PROJECT = async (data: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
  const response = await fetch(
    "https://pm-django-backend.herokuapp.com/projectsApp/add_project",
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
    `https://pm-django-backend.herokuapp.com/projectsApp/updated_project/${data.id}`,
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
    `https://pm-django-backend.herokuapp.com/projectsApp/delete_project/${id}`,
    requestOptions
  )
  const status = response.json()
  return status
}
