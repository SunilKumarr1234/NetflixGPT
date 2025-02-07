import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return ;

    const mainMovie =movies[0];
    console.log("main movie",mainMovie);


  return (
    <div>
        < VideoBackground/>
        <VideoTitle/>
    </div>
  )
}

export default MainContainer
