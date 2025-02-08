import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey=useSelector(store=>store.config.lang);

  return (
    <div className='py-[10%]  flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12 rounded-md'>
        <input className='p-3 m-2 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceHolder}/>
        <button className='bg-red-700 p-3 m-2 col-span-3 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
