import { Link } from "react-router-dom"
import SideBar from "./SideBar"
import { useEffect, useState } from "react"
import authServices from "../services/authServices"

// import { FaSearch } from "react-icons/fa";
{/* <li><FaSearch />  </li> */}
const HeaderHome = () =>{

    const [userName, setUserName] = useState("")
    
    useEffect(() => {
        const userData = authServices.getLoggedUser()

        if (userData) {
            setUserName(userData.name)
        }
    }, [])

    const logout = () =>{
        localStorage.clear()
    }
    
    return(
        <>
            <div className="container-nav">
            <div className="title">BestBrowserGames</div>
                <div className="itens-nav">
                    <nav>
                        <ul>
                            <li>{userName}</li>
                            <li>
                                <Link to={"/"}>
                                    <button className="btn-logout" onClick={(e) => logout(e.target)}>Sair</button>
                                </Link>
                            </li>
                            <Link to={"/newGame"}>
                                <li><button>Criar Novo Game</button></li>
                            </Link>

                            {/* <li><input type="text" placeholder="Busque seu game favorito" maxLength={25}/></li> */}
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}


export default HeaderHome