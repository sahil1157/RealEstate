import React from 'react'
import Header from '../../BuyComponent/HeaderFile/Header'
import LavishBunglow from '../LeftComp/LavishBunglow'
import img from '../../Components/images/Blog.avif'

const Blogs = () => {

  const bloges = {
    name: 'Blogs',
    img : img
  }
  return (
    <div className=''>
      <Header {...bloges} />
      <LavishBunglow/>

    </div>
  )
}

export default Blogs
