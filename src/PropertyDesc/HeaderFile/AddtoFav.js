import React from 'react'
import PropSlider from '../PropertySlider/PropSlider'

const AddtoFav = ({dataArray}) => {
    console.log(dataArray,'this is a datArray')
  return (
    <div>
      {
        dataArray.map((i) =>{
            return(
                <PropSlider item = {i} />
            )
        })
      }
    </div>
  )
}

export default AddtoFav
