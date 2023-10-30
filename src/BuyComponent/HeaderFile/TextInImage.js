import React from 'react'


const TextInImage = (HeaderProp) => {

  // top-[570%] md:top-[500%] lg:top-[470%] text-white flex justify-center items-center
  // text-center justify-center items-center w-full
  return (
    <>
      <div className=''>
        <p className='font-normal font-Oldenburg lg:text-7xl text-5xl text-white'>{HeaderProp.name}</p>
      </div>
      
    </>
  )
}

export default TextInImage
