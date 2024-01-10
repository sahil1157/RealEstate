import React from 'react'

const TextInImage = (HeaderProp) => {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <p className='font-normal font-Oldenburg lg:text-7xl text-5xl text-white'>{HeaderProp.name}</p>
        <p className='font-normal font-Oldenburg lg:text-4xl text-2xl text-white'>{HeaderProp.date}</p>
      </div>
      
    </>
  )
}

export default TextInImage
