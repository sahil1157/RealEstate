import React from 'react'
import PropertyContainer from '../PropertyContainer/PropertyContainer'

const Buildings = () => {
    const  dataAarray =  [
        
        
        {
       
            
           name: "Bunglow",
           img: '/Bunglow2.jpg',
           loation : 'Kathmandu, Nepal',
           bed: 3,
           Shower : 3,
           floor : '4',
       
    },
        {
       
            
           name: "Bunglow",
           img: '/Bunglow3.jpg',
           loation : 'LalitPur, Nepal',
           bed: 3,
           Shower : 2,
           floor : '4',
       
    },
        {
       
            
           name: "Bunglow",
           img: '/Bunglow.webp',
           loation : 'Pokhara, Nepal',
           bed: 3,
           Shower : 4,
           floor : '3',
       
    },
    
]

    return (
        <div style={{paddingInline:'8%'}} className=''>
         <PropertyContainer dataArray = {dataAarray}/>
      
        </div>
    )
}

export default Buildings
