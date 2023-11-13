import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ApiUrl from "../axios/config"
import HeaderHome from "../components/HeaderHome";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const CategoryGamePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [editedCategoryName, setEditedCategoryName] = useState("")
  
  let userData = localStorage.getItem("user")
  let user = JSON.parse(userData)


  useEffect(() => {
    async function fetchCategoryDetails() {
      try {
        const { data } = await ApiUrl.get(`/categories/${id}`)
        setEditedCategoryName(data.name)
      } catch (error) {
        console.log("Error ao buscar categoria:", error)
      }
    }

    fetchCategoryDetails()
  }, [id])

  const headers = { Authorization: `Bearer ${user.token}` }

  const handleEdit = async (e) => {
    e.preventDefault();
    
    try {
      await ApiUrl.put(
        `/categories/${id}`, 
        { name: editedCategoryName },
        {headers}
      )

      Swal.fire({
        icon: 'success',
        title: `Categoria ${editedCategoryName} editada com sucesso!`,
        showConfirmButton: true,
        timer: 3000
      })

      setTimeout(() => {
        navigate("/home")
      }, 1000)
    } catch (error) {
      console.log("Erro ao editar categoria:", error)
    }
  }

  const handleDelete = async () => {
    try {
      await ApiUrl.delete(`/categories/${id}`, {headers})

      Swal.fire({
        icon: 'success',
        title: `Categoria ${editedCategoryName} apagada com sucesso!`,
        showConfirmButton: true,
        timer: 3000
      })

      setTimeout(() => {
        navigate("/home");
      }, 2500);
    } catch (error) {
      console.log("Erro ao deletar categoria:", error);
    }
  }

  return (
    <>
      <HeaderHome title="BestBrowserGames"/>
      <div className="container-form-categoria">
        <div>
          <form className="category-form" onSubmit={handleEdit}>
            <label htmlFor="categoryName">Nome da Categoria:</label>
            <input
              type="text"
              id="categoryName"
              name="name"
              value={editedCategoryName}
              onChange={(e) => setEditedCategoryName(e.target.value)}
              required
            />
            <div className="area-buttons">
              <button type="submit" id="btn-edit">Editar <FaEdit/></button>
              <button type="button" id="btn-delete" onClick={handleDelete}>Deletar <FaTrashAlt/></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CategoryGamePage;
