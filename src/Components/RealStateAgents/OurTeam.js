import React from 'react'
import PopularProps from '../Props/PopularProps'

const OurTeam = () => {
  // naam,Residences,Explore
  const Teams = {
    naam: 'Our Team',
    Residences: 'Our Real Estate Agents',
    Explore: 'Explore All',
  }
  return (
    <div style={{paddingInline:'8%'}} className=''>
      <PopularProps {...Teams} />
    </div>


  )
}

export default OurTeam
