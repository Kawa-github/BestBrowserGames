import HeaderHome from "../components/HeaderHome"
import Category from "../components/Category"
import ApiUrl from "../axios/config"

import Img1 from "../img/the_last_of_us_game_capa.jpg"
import Img2 from "../img/readead.jpg"


import authServices from "../services/authServices"
import { useNavigate } from "react-router-dom"

const GamePage = () =>{
  const navigate = useNavigate()
  const user = authServices.getLoggedUser()
    

  if(!user) navigate("/login");
  return(
        <>
        <HeaderHome />
        <Category />
        
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