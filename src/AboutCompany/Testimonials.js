import React from 'react'
import PopularProps from '../Components/Props/PopularProps'

const Testimonials = () => {

    const test = {
        naam : 'Testimonials',
        Residences:`Let's hear from our Team`
    }
  return (
    <div style={{ paddingInline: '6%' }} className='text-xl pt-6'>
     <div>
        <PopularProps {...test}/>
     </div>
    </div>
  )
}

export default Testimonials
