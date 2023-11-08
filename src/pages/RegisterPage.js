import { Link} from "react-router-dom"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import ApiUrl from "../axios/config"
import { useState } from "react"
import authServices from "../services/authServices"

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [birthDate, setbirthDate] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  
  const navigate = useNavigate()  

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      try {
        const response = await authServices.insertData({
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          birthDate: birthDate,
          state: state,
          country: country,
        })
  
        if (response.status === 201) {
          console.log('Usuário registrado com sucesso')
          authServices.setLoggedUser(response)
          navigate("/home")
        } 
      } catch (error) {
        console.error('Erro ao registrar o usuário', error)
      }
    }


  return (
    <div className="container-register">
      <Header />
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
          </label>
          <input
            type="text"
            name="name"
            maxLength={40}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>
            Email:
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            Senha:
          </label>
          <input
            type="password"
            name="password"
            maxLength={15}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>
            Confirme a senha:
          </label>
          <input
            type="password"
            name="confirmPassword"
            maxLength={15}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label>
            Data de Nascimento:
          </label>
          <input
            type="date"
            name="birthDate"
            onChange={(e) => setbirthDate(e.target.value)}
          />

          <label>
            Estado:
          </label>
          <select
            name="state"
            onChange={(e) => setState(e.target.value)}
          >
            <option value="SP">São Paulo</option>
            <option value="MG">Minas Gerais</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="ES">Espirito Santo</option>  
          </select>

          <label>
            País:
          </label>
          <select
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="BR">Brasil</option>
            <option value="ARG">Argentina</option>
          </select>

          <input type="submit" value="Enviar" />
          <div className="card-footer">
            <p>
              Já possui uma conta?
              <Link to="/login">Entre aqui</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
