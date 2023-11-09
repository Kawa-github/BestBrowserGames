import { useEffect, useState } from "react"
import ApiUrl from "../axios/config"
import bgEstrategia from "../img/categorias/estrategia.jpg"
import bgTiro from "../img/categorias/tiro.jpg"
import bgArcade from "../img/categorias/arcade.jpg"
import bgRpg from "../img/categorias/rpg.jpg"
import bgEsportes from "../img/categorias/esportes.jpg"
import bgAcao from "../img/categorias/acao.jpg"
import bgAventura from "../img/categorias/aventura.jpg"


const Category = () =>{
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchData() {
          try {
            const { data } = await ApiUrl.get("/categories");
            setCategories(data)
          } catch (error) {
            console.log("Erro ao buscar categorias!", error)
          }
        }
        
        fetchData()
      }, [])
      
      const getImageByCategory = (categoryName) => {
        switch (categoryName.toLowerCase()) {
          case "estratégia":
            return bgEstrategia;
          case "tiro":
            return bgTiro;
          case "arcade":
            return bgArcade;
          case "rpg":
            return bgRpg;
          case "esportes":
            return bgEsportes;
          case "ação":
            return bgAcao;
          case "aventura":
            return bgAventura;
          default:
            return ""
        }
      }

  return (
    <>
         <div className="container-categoria">
          <div className="cards-categoria">
            {categories.map((category) => (
              <div className="card-categoria" key={category.id}>
                 <div className="card-background" style={{ backgroundImage: `url(${getImageByCategory(category.name)})` }}>
                  <p>{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )


}


export default Category