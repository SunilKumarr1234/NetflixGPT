import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
  
    useNowPlayingMovies();


  return (
    <div>
      <Header/>
        Browse
    </div>
  )
}

export default Browse
