import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiUrl from "../axios/config"

const CategoryGamePage = () => {
    const { _id } = useParams()
  const [categoryDetails, setCategoryDetails] = useState(null)

  useEffect(() => {
    async function fetchCategoryDetails() {
      try {
        const { data } = await ApiUrl.get(`/categories/${_id}`)
        setCategoryDetails(data)
        console.log("dadosss", data)
      } catch (error) {
        console.log("Error ao buscar categoria:", error)
      }
    }

    fetchCategoryDetails()
  }, [_id]);

  return (
    <>
        <h1>oioiooi</h1>
    </>
  );
};

export default CategoryGamePage;
