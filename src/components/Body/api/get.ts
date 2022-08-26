export const GET_PROJECTS = async () => {
  const response = await fetch(
    "https://pm-django-backend.herokuapp.com/projectsApp/get_projects"
  )
  const projects = await response.json()
  return projects
}
