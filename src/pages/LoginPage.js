import Header from "../components/Header"
import ApiUrl from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import authServices from "../services/authServices"

const LoginPage = () =>{
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
      
        try {
          const response = await authServices.fecthData({
            email: email, 
            password: password, 
          });
      
        //   console.log("dados", response.data);
        
        const apiToken = response.data.token;
        setToken(apiToken)

        if (apiToken) {
            authServices.setLoggedUser(response);
            navigate("/home");
        }
        } catch (error) {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login falhou! Verifique se o email ou a senha estão corretos.",
          });
        }
      };
      
    return(
        <>
            <Header />
            <div className="container-login">
                <div className="card">
                    <form onSubmit={handleLogin}>
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        
                        <label>
                            Senha:
                        </label>
                        <input type="password" name="password" maxLength={15} onChange={(e) => setPassword(e.target.value)}/>

                        <input type="submit" value={loading ? "Entrando..." : "Login"} />
                    </form>
                </div>
            </div>
        </>
    )
}


export default LoginPage