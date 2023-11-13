import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderHome from "../components/HeaderHome";
import ApiUrl from "../axios/config";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate()
  const [categoryName, setCategoryName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()


    let userData = localStorage.getItem("user")
    let user = JSON.parse(userData)
    console.log(user.token)

    try {
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGMyYTgzNzQyOGFmZDJjMWYxODYwOSIsIm5hbWUiOiJrYXdhLWFkbSIsImVtYWlsIjoia2F3YXJAZ21haWwuY29tIiwiYmlydGhEYXRlIjoiMjAwMy0wMS0wMVQwMDowMDowMC4wMDBaIiwiY291bnRyeSI6IiIsInN0YXRlIjoiIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjk5NTU1NzYwLCJleHAiOjE2OTk2NDIxNjB9.7wZhHQawE74lrQ1ZcJyDpssYmiwzIzBwB7LcTygISeQ"
    //   const decoded = jwtDecode(token)
      const headers = { Authorization: `Bearer ${user.token}` }

      const response = await ApiUrl.post(
        "/categories",
        { name: categoryName },
        { headers }
      )

      console.log("Categoria cadastrada com sucesso:", response.data)

    } catch (error) {
      console.error("Erro ao cadastrar categoria:", error)
    }
  }

  return (
    <>
      <HeaderHome title="BestBrowserGames"/>
      <div className="container-form-categoria">
        <div>
          <form onSubmit={handleSubmit} className="category-form">
            <label htmlFor="categoryName">Nome da Categoria:</label>
            <input
              type="text"
              id="categoryName"
              name="name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CategoryPage
