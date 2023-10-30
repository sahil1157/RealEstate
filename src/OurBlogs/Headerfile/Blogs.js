import React from 'react'
import Header from '../../BuyComponent/HeaderFile/Header'
import LavishBunglow from '../LeftComp/LavishBunglow'

const Blogs = () => {

  const bloges = {
    name: 'Blogs',
    img: '/Headerimg/Blog.avif'
  }
  return (
    <div className=''>
      <Header {...bloges} />
      <LavishBunglow/>

    </div>
  )
}

export default Blogs
