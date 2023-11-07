import React from 'react'
import PopularProps from '../Props/PopularProps'
import Buildings from '../Popular/Buildings'

const Featured = () => {
  const Featured = {
    naam: "Featured",
    Residences: 'Featured Residences',
    Explore: 'Explore All',
  }

  return (
    <div className=''>
      <div style={{paddingInline:'8%'}}>
        <PopularProps {...Featured}/>
      </div>

      <Buildings />
    </div>
  )
}

export default Featured
