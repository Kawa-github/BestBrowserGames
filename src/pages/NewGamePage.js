import HeaderHome from "../components/HeaderHome"
import ApiFetch from "../axios/config"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const NewGamePage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [category, setCategory] = useState([])
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImg] = useState("")
    const [categories, setCategories] = useState([])


    useEffect(() => {
        async function fetchCategories() {
          try {
            const response = await ApiFetch.get("/categories")
            setCategories(response.data)
          } catch (error) {
            console.error("Error ao buscar categorias:", error)
          }
        }
    
        fetchCategories();
      }, []);

    const createGame = async (e) =>{
        e.preventDefault()
        
        let userData = localStorage.getItem("user")
        let user = JSON.parse(userData)
        console.log(user.token)
        
        try{
            const game = {
                name,
                category: { _id: category },
                description,
                url,
                imageURL
            }

            console.log(game)
            const response = await ApiFetch.post("/games", game, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            if(response.status == 201){
                alert("Game cadastrado com sucesso")
                navigate("/home")
            }else{
                console.log("Erro ao cadastrar")
            }
        }catch(error){
            console.error('Erro:', error)
        }
    }

    return (
        <>
        <HeaderHome/>
        <div className="container-cadastro">
            <div className="form-cadastro-game">
                <h2>Cadastre seu BrowserGame</h2>
                <form onSubmit={(e) => createGame(e)}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nome:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-input" 
                            placeholder="Nome do Jogo" 
                            required 
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category" className="form-label">Categoria:</label>
                        <select
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url" className="form-label">Link do jogo:</label>
                        <input 
                            type="url" 
                            id="url" 
                            name="url" 
                            className="form-input" 
                            placeholder="URL de Acesso" 
                            required 
                            onChange={(e) => setUrl(e.target.value)}
                            />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="url-video" className="form-label">URL do Vídeo de Demonstração:</label>
                        <input type="text" id="url-video" name="url-video" className="form-input" placeholder="URL do Vídeo (Opcional)" />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Descrição:</label>
                        <textarea 
                            id="description" 
                            name="description" 
                            className="form-input" 
                            placeholder="Descrição do Jogo" 
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            >    
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageURL" className="form-label">Imagem Ilustrativa (url):</label>
                        <input 
                            type="url" 
                            id="imageURL" 
                            name="imageURL" 
                            className="form-input" 
                            accept="image/*" 
                            required 
                            onChange={(e) => setImg(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-cadastro">Cadastrar Jogo</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default NewGamePage