import ApiUrl from "../axios/config"

const insertData = (data) => {
  return ApiUrl.post("/users", data)
}

const fecthData = (data) => {
  return ApiUrl.post("/users/login", data)
}

const setLoggedUser = (response) => {
  let userData = JSON.stringify(response.data)
  localStorage.setItem("user", userData)
}

const getLoggedUser = () => {
  let userData = localStorage.getItem("user")
  if (!userData) return null
  try {
    let parsedData = JSON.parse(userData)
    return parsedData
  } catch (error) {
    console.log(error)
    return null
  }
}

export default { insertData, fecthData, setLoggedUser, getLoggedUser }
