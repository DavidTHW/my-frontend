import React, { useState, useEffect } from 'react'


const Movies = ({movies}) => {


  
  return (
  <>
   {movies && movies.map((movie)=> {
    return (
    <div key={movie.id} className='movie-container'>
      <div>{movie.title}</div>
      <div>{movie.releaseDate}</div>
      </div>
  )
  })}
  </>
  )
}

export default Movies