export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const requestOptions = (method = RequestMethods.GET, body = {}) => {
  const jwt = localStorage.getItem("access")
  const requestOptions = {
    method: method,
    headers: {
      Authorization: "Bearer " + jwt,
      "Content-Type": "application/json",
    },
  }

  return method === RequestMethods.GET || method === RequestMethods.DELETE
    ? requestOptions
    : { ...requestOptions, body: JSON.stringify(body) }
}
