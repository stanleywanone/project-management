export const GET_PROJECTS = async () => {
  const response = await fetch("http://0.0.0.0:8000/projectsApp/get_projects")
  const projects = await response.json()
  return projects
}
