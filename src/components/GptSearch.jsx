import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGIN_PAGE_BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={LOGIN_PAGE_BG_IMG}/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
