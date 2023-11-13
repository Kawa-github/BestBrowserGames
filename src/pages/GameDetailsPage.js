import HeaderHome from "../components/HeaderHome"
import ApiUrl from "../axios/config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const GameDetailsPage = () =>{
    const { id } = useParams()
    const [game, setGame] = useState([])
    
    useEffect(() => {
        async function fetchGameDetails() {
          try {
            const { data } = await ApiUrl.get(`/games/${id}`)
            setGame(data)
            console.log(data)
          } catch (error) {
            console.log("Error ao game:", error)
          }
        }
    
        fetchGameDetails()
      }, [id])

      return (
        <>
          <HeaderHome title="BestBrowserGames" />
          <div className="container-game">
            <div className="top-game">
              <img src={game.imageURL} alt={game.name} />
              <p>{game.name}</p>
            </div>
            <div className="main-game">
              <div className="area-assessment">
                <iframe
                  src={game.videoURL}
                  title={game.name}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <div className="aside-game">
                    <div className="stars">
                        <h3>Avalie o game</h3>
                        <p>stars</p>
                    </div>
                </div>
              </div>
              <div className="about-game">
                <h3>Sobre o Jogo</h3>
                <p>{game.description}</p>
                <hr />
              </div>
            </div>
          </div>
        </>
      );
}

export default GameDetailsPage