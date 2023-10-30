import React from 'react'
import PopularProps from '../Props/PopularProps'

const OurBlogs = () => {
    
    const OurBlogs = {
        naam : "Our Blogs",
        Residences : 'Latest Housing Information',
        Explore : 'Read All',
    }
  return (
    <div style={{paddingInline:'8%'}} className=''>
      <PopularProps {...OurBlogs}/>
    </div>
  )
}

export default OurBlogs
