import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies)
  return (

   movies.nowPlayingMovies && (
   <div className='bg-black pb-10'>
      <div className='-mt-52 pl-4 relative z-20'>
        <MovieList title={"now Playing Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>
        <MovieList title={"Up Coming "} movies={movies.UpComingMovies}/>
      </div>
    </div>
   )
  )
}

export default SecondaryContainer
