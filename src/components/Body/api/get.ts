export const GET_PROJECTS = async () => {
  const response = await fetch("http://127.0.0.1:8000/projectsApp/get_projects")
  const projects = await response.json()
  return projects
}
