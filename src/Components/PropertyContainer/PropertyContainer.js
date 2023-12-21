import React from 'react'
import Ind from '../PropertyContainer/Ind'


const PropertyContainer = ({ dataArray, load,toShow }) => {

  return (
    <>
      <div className=' pt-6 transition-transform ease-in-out lg:justify-between flex items-center lg:gap-6 text-start place-items-start gap-8 md:grid md:grid-cols-2 md:justify-center lg:justify-betwee flex-col md:place-items-center flex-wrap lg:flex lg:flex-row'>
        {
          dataArray?.slice(0, load).map((i, index) => {
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
