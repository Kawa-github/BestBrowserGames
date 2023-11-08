import HeaderHome from "../components/HeaderHome"

import Img1 from "../img/the_last_of_us_game_capa.jpg"
import Img2 from "../img/readead.jpg"

import bgEstrategia from "../img/categorias/estrategia.jpg"
import bgTiro from "../img/categorias/tiro.jpg"
import bgArcade from "../img/categorias/arcade.jpg"
import bgRpg from "../img/categorias/rpg.jpg"
import bgEsportes from "../img/categorias/esportes.jpg"
import bgAcao from "../img/categorias/acao.jpg"
import bgAventura from "../img/categorias/aventura.jpg"
import authServices from "../services/authServices"
import { useNavigate } from "react-router-dom"



const GamePage = () =>{
  const navigate = useNavigate()

  const user = authServices.getLoggedUser()
  
  if(!user) navigate("/login");
  
  return(
        <>
        <HeaderHome />
        <div className="container-categoria">
          <div className="cards-categoria">
            <div className="card-categoria">
              <div className="card-background" style={{ backgroundImage: `url(${bgEstrategia})` }}>
                <p>Estratégia</p>
              </div>
            </div>
            <div className="card-categoria">
              <div className="card-background" style={{ backgroundImage: `url(${bgTiro})` }}>
              <p>Tiro</p>
              </div>
            </div>
            <div className="card-categoria">
              <div className="card-background" style={{ backgroundImage: `url(${bgArcade})` }}>
                <p>Arcade</p>
              </div>
            </div>
            <div className="card-categoria">
              <div className="card-background" style={{ backgroundImage: `url(${bgRpg})` }}>
                <p>RPG</p>
              </div>
            </div>
            <div className="card-categoria">
              <div className="card-background" style={{ backgroundImage: `url(${bgEsportes})` }}>
                <p>Esportes</p>
              </div>
            </div>
            <div className="card-categoria">
              <div className="card-background" style={{ backgroundImage: `url(${bgAcao})` }}>
                <p>Ação</p>
              </div>
            </div>
            <div className="card-categoria">
              <div className="card-background" style={{ backgroundImage: `url(${bgAventura})` }}>
                <p>Aventura </p>
              </div>
            </div>
          </div>
          </div>
        <div className="container-games">
          <div className="txt-games">
            <h1>Os Melhores games do mercado.</h1>
            <h3>Avalie agora!</h3>
          </div>

          <div className="card-games">
            <div className="card">
              <div className="top-card">
                <img src={Img1} alt="" />
              </div>
              <p className="txt-card">The Last Of Us</p>
              <div className="bottom-card">
                <h3>User</h3>
                <h3>Estrelas: 5</h3>
              </div>
            </div>
            <div className="card">
              <div className="top-card">
                <img src={Img2} alt="" />
              </div>
              <p className="txt-card">Read Dead Redemption</p>
              <div className="bottom-card">
                  <h3>User</h3>
                  <h3>Estrelas: 5</h3>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}


export default GamePage