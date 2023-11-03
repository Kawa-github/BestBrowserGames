import { Link } from "react-router-dom"

const RegisterPage = () =>{
    return(
        <>
            <form>
                <label>
                    Nome:
                </label>
                <input type="text" name="nome" maxLength={40} required/>
                
                <label>
                    Email:
                </label>
                <input type="email" name="email" />
                
                <label>
                    Senha:
                </label>
                <input type="password" name="senha" maxLength={15}/>
                
                <label>
                    Data de Nascimento:
                </label>
                <input type="date" name="data-nascimento" />
                
                <label>
                    Estado:
                </label>
                <select>
                    <option value="SP" selected>São Paulo</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="ES">Espirito Santo</option>
                </select>
                
                <label>
                    País:
                </label>
                <select>
                    <option value="BR">Brasil</option>
                    <option value="ARG">Argentina</option>
                </select>

                <input type="submit" value="Enviar" />
            </form>
            <div className="area-login">
                <p>Já possui uma conta? 
                    <Link to={"/login"}>
                        <a>
                            Entre aqui
                        </a>
                    </Link>
                </p>
            </div>
        </>
    )
}


export default RegisterPage