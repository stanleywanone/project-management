export const UPDATED_DRAG_PROJECT = async (id: string, newProgress: string) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProgress),
  }
  const response = await fetch(
    `http://127.0.0.1:8000/projectsApp/updated_drag_project/${id}`,
    requestOptions
  )
  const status = response.json()
  return status
}
