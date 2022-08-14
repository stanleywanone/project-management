export const ADD_PROJECT = async (data: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
  const response = await fetch(
    "http://127.0.0.1:8000/projectsApp/add_project",
    requestOptions
  )
  const status = response.json()
  return status
}
