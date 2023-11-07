import { Link} from "react-router-dom"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import ApiUrl from "../axios/config"

const RegisterPage = () => {
    const navigate = useNavigate()  
    const handleSubmit = async (event) => {
      event.preventDefault()
  
      const nome = event.target.name.value
      const email = event.target.email.value
      const senha = event.target.password.value
      const senhaConfirma = event.target.confirmPassword.value
      const dataNascimento = event.target.birthDate.value
      const estado = event.target.state.value
      const pais = event.target.country.value
  
      const userData = {
        name: nome,
        email: email,
        password: senha,
        confirmPassword: senhaConfirma,
        birthDate: dataNascimento,
        country: pais,
        state: estado,
      }
  
      try {
        const response = await ApiUrl.post('/users', userData)
  
        if (response.status === 201) {
          console.log('Usuário registrado com sucesso')
          navigate("/home")
        } else {
          console.error('Erro ao registrar o usuário')
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
          />

          <label>
            Email:
          </label>
          <input
            type="email"
            name="email"
          />

          <label>
            Senha:
          </label>
          <input
            type="password"
            name="password"
            maxLength={15}
          />

          <label>
            Confirme a senha:
          </label>
          <input
            type="password"
            name="confirmPassword"
            maxLength={15}
          />

          <label>
            Data de Nascimento:
          </label>
          <input
            type="date"
            name="birthDate"
          />

          <label>
            Estado:
          </label>
          <select
            name="state"
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
