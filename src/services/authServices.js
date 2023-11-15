import ApiUrl from "../axios/config"

const insertData = (data) => {
  return ApiUrl.post("/users", data)
}

const fecthData = (data) => {
  return ApiUrl.post("/users/login", data)
}

const updateUserData = (userId, data) => {
  return ApiUrl.put(`/users/${userId}`, data);
}

const setRegisterUser = (response) => {
  const { data } = response
  const { message } = data 

  if (message.trim() === "Membro registrado com sucesso!") {
    const userData = JSON.parse(response.config.data)
    const { name, email, token } = userData
    localStorage.setItem('user', JSON.stringify({ name, email, token }))
  } else {
    console.error('Erro no registro do usuário. Mensagem do servidor:', message)
  }
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
    console.log(parsedData.token)
    return parsedData
  } catch (error) {
    console.log(error)
    return null
  }
}

export default { insertData, fecthData, updateUserData, setRegisterUser, setLoggedUser, getLoggedUser }
