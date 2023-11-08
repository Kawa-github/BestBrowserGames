import HeaderHome from "../components/HeaderHome"
import ApiFetch from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewGamePage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [url, setUrl] = useState()
    const [description, setDescription] = useState()
    const [img, setImg] = useState()

    const createGame = async (e) =>{
        e.preventDefault()
        
        try{
            const game = {name,category,description,url,img}
            const response = await ApiFetch.post("/games", game)

            if(response.status == 201){
                console.log("Game cadastrado com sucesso")
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
                <h2>Formulário de Cadastro de Jogo</h2>
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
                        <select name="category" onChange={(e) => setCategory(e.target.value)}>
                            <option value="estrategia">Estratégia</option>
                            <option value="tiro">Tiro</option>
                            <option value="arcade">Arcade</option>
                            <option value="esportes">esportes</option>
                            <option value="acao">Ação</option>
                            <option value="aventura">Aventura</option>  
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url" className="form-label">URL de Acesso ao Jogo:</label>
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
                        <label htmlFor="imageURL" className="form-label">Imagem Ilustrativa:</label>
                        <input 
                            type="file" 
                            id="imageURL" 
                            name="imageURL" 
                            className="form-input" 
                            accept="image/*" 
                            required 
                            onChange={(e) => setImg(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-button">Cadastrar Jogo</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default NewGamePage