import React from 'react'
import Ind from '../PropertyContainer/Ind'


const PropertyContainer = ({ dataArray }) => {

 
  return (
    <>
      <div className=' pt-6 flex items-center lg:gap-2 gap-8 md:grid md:grid-cols-2 md:justify-center lg:justify-between flex-col md:place-items-center flex-wrap lg:flex lg:flex-row'>
        {
          dataArray.slice(0, 4).map((i, index) => {
            return (
              <Ind key={index.id} item={i} />
            
            )
          })
        }
      </div>

    </>
  )
}

export default PropertyContainer
