import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SerialDramas from '../components/SerialDramas'
import axios from 'axios'

const Series = () => {

//to change to actual series api
const seriesUrl = "http://localhost:8080/api/v1/movies"

  const [series , setSeries] = useState()

  const getAllSeries = async () => {
    await axios.get(seriesUrl)
    .then((res) => setSeries(res.data))
    .catch((err) => console.log(err))
  }
  
  useEffect(()=> {
    getAllSeries()
  },[])
  console.log(series)

  return (
    <div>
      <Header/>
      <div className="body">
      <SerialDramas series={series}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Series