import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Movies from '../components/Movies'
import axios from 'axios'

const Landing = () => {

const moviesUrl = "http://localhost:8080/api/v1/movies"

  const [movies , setMovies] = useState()

  const getAllMovies = async () => {
    await axios.get(moviesUrl)
    .then((res) => setMovies(res.data))
    .catch((err) => console.log(err))
  }
  
  useEffect(()=> {
    getAllMovies()
  },[])
  console.log(movies)

  return (
    <div>
      <Header/>
      <div className="body">
      <Movies movies={movies}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Landing