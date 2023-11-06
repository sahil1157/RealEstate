import React from 'react'
import Ind from '../PropertyContainer/Ind'


const PropertyContainer = ({dataArray}) => {
  return (
    <>
    <div className='pt-6 flex items-center gap-5 md:grid md:grid-cols-2 flex-col justify-center lg:justify-between flex-wrap lg:flex lg:flex-row'>
      {
        dataArray.slice(0,3).map((i)=>{
            return(
                <Ind item = {i}/>
            )
        })
      }
    </div>
    
    </>
  )
}

export default PropertyContainer
