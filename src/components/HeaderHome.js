import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import authServices from "../services/authServices"
import PropTypes from "prop-types";


const HeaderHome = ( {onLogout} ) =>{
    const [userName, setUserName] = useState("")

    useEffect(() => {
        const userData = authServices.getLoggedUser()

        if (userData) {
            setUserName(userData.name)
        }
    }, [])

    const handleLogout = () =>{
        localStorage.clear()
        onLogout()
    }
    
    return(
        <>
            <div className="container-nav">
                <div className="menu-nav">
                    <div className="title">BestBrowserGames</div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/home"}>Home</Link>
                            </li>
                            <li className="dropdown">
                                <span>Ações</span>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to={"/category"}>Categoria</Link>
                                    </li>
                                    <li>
                                        <Link to={"/newGame"}>Cadastrar Jogo</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="container-user">
                    <li id="username">{userName}</li>
                    <li>
                        <Link to={"/"}>
                            <button
                                className="btn-logout"
                                onClick={handleLogout}
                            >
                                Sair
                            </button>
                        </Link>
                    </li>
                </div>
            </div>
        </>
    )
}


HeaderHome.propTypes = {
    onLogout: PropTypes.func.isRequired,
}


export default HeaderHome