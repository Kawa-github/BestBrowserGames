import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiUrl from "../axios/config";
import HeaderHome from "../components/HeaderHome";
import Category from "../components/Category";

const GamePage = () => {
  const [games, setGames] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await ApiUrl.get("/games")
        setGames(data)
      } catch (error) {
        console.log("Erro ao buscar game!", error)
      }
    }

    fetchData()
  }, [])


  const searchGame = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  )

  // const user = authServices.getLoggedUser()
  // if (!user) navigate("/login");

  return (
    <>
      <HeaderHome title="BestBrowserGames" onSearch={setSearch}/>
      <Category />

      <div className="container-games">
        <div className="txt-games">
          <h1>Os Melhores games do mercado.</h1>
          <h3>Avalie agora!</h3>
        </div>

        <div className="card-games">
          {searchGame.length === 0 ? (
            <div className="alert">
              <p>Nenhum jogo encontrado.</p>
            </div>
          ) : (
            searchGame.map((game) => (
              <div className="card" key={game._id}>
                <Link to={`/game/${game._id}`}>
                  <div className="top-card">
                    <img src={game.imageURL} title={game.description} alt={game.name} />
                    <p className="txt-card">{game.name}</p>
                  </div>
                  <div className="bottom-card">
                    <h3>User</h3>
                    <h3>Estrelas: 5</h3>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default GamePage;
