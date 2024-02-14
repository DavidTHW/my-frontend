import React, { useState, useEffect } from 'react'


//can change this to a general use component to render each item as cards
const Movies = ({movies , banner}) => {
  
  return (
  <>
  {banner}
   {movies && movies.map((movie)=> {
    return (
    <>
    {/* <div key={movie.imdbId} className='movie-container'>
      <div>{movie.title}</div>
      <div>{movie.releaseDate}</div>
      <div><img src={movie.poster}/></div>
    </div> */}
    </>
  )
  })}
  </>
  )
}

export default Movies