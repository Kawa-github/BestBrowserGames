import HeaderHome from "../components/HeaderHome"
import ApiUrl from "../axios/config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaLink } from "react-icons/fa";

const GameDetailsPage = () =>{
    const { id } = useParams()
    const [game, setGame] = useState([])
    const [stars, setStars] = useState("")
    
    useEffect(() => {
        async function fetchGameDetails() {
          try {
            const { data } = await ApiUrl.get(`/games/${id}`)
            setGame(data)
            // console.log(data)
          } catch (error) {
            console.log("Error ao game:", error)
          }
        }
    
        fetchGameDetails()
      }, [id])

      const StarRating = (props) => {
        const [chosenRating, setChosenRating] = useState(0)
    
        const handleStar = (index) => {
          console.log(index + 1)
          setChosenRating(index + 1)
        }
    
        return (
          <div className="area-assessment">
            <h3>Avalie o game</h3>
            <div className="area-star" onMouseLeave={resetStarRating}>
              {Array.from({ length: 5 }, (i, index) => (
                <div
                  key={index}
                  className={`star ${index < chosenRating ? 'full' : ''}`}
                  onMouseEnter={() => handleStar(index)}
                  onMouseLeave={resetStarRating}
                  onClick={handleStar}
                >
                  <img src="http://i.stack.imgur.com/AtiAi.png" alt="" />
                </div>
              ))}
              <button onClick={() => window.open(props.url, '_blank')}>Link para o jogo <FaLink /></button>
            </div>
          </div>
        )
      }
    
      const resetStarRating = () => {
        setStars(0)
      }
    
      return (
        <>
          <HeaderHome title="BestBrowserGames" />
          <div className="container-game">
            <div className="top-game">
              <img src={game.imageURL} alt={game.name} />
              <p>{game.name}</p>
            </div>
            <div className="main-game">
              <div className="area-video">
                <iframe
                  src={game.videoURL}
                  title={game.name}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <div className="aside-game">
                  <StarRating url={game.url} />
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