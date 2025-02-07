import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video absolute pt-[22%] bg-gradient-to-r from-black px-6 text-white'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-xl w-2/4 '>{overview}</p>
      <div className='mt-5'>
        <button className='bg-white text-black font-bold p-3 px-12 rounded-lg hover:bg-opacity-80'> Play</button>
        <button  className='ml-3 bg-gray-500 text-white font-bold p-3 px-10 rounded-lg bg-opacity-50 hover:bg-white hover:text-black'>! More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
