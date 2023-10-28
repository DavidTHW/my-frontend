import React, { useState, useEffect } from 'react'
import axios from "axios"

const Movies = () => {
const moviesUrl = "http://localhost:8080/api/v1/movies"

  const [movies , setMovies] = useState()

  const getAllMovies = async () => {
    await axios.get(moviesUrl)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  
  useEffect(()=> {
    getAllMovies()
    console.log("useEffect")
  },[])

  return (
    <div></div>
  )
}

export default Movies