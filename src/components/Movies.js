import React, { useState, useEffect } from 'react'


const Movies = ({movies}) => {


  
  return (
  <>
   {movies && movies.map((movie)=> {
    return (
    <div key={movie.imdbId} className='movie-container'>
      <div>{movie.title}</div>
      <div>{movie.releaseDate}</div>
      <div><img src={movie.poster}/></div>
      </div>
  )
  })}
  </>
  )
}

export default Movies