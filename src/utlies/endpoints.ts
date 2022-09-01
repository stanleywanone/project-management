export const API_ENDPOINTS = (): string => {
  const origin = window.location.origin.toString()
  if (origin === "http://localhost:3000") return "http://0.0.0.0:8000"
  return "https://pm-django-backend.herokuapp.com"
}
