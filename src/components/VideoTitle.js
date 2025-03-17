import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' absolute top-1/3 left-10 text-white w-2/3 md:w-1/2'>
      <h1 className='text-6xl font-bold drop-shadow-lg'>{title}</h1>
      <p className='py-6 text-xl drop-shadow-md'>{overview}</p>
      <div>
        <button className='bg-white text-black text-lg font-bold py-2 px-12 rounded-lg hover:bg-opacity-80 transition'>▶ Play</button>
        <button className='mx-5 bg-gray-700 text-white text-lg font-bold py-2 px-12 rounded-lg hover:bg-gray-600 transition'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle