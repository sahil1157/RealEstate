import React from 'react'
import card1 from '../NavBar/CardTye/CARD 1 - TYPE.png'
import card2 from '../NavBar/CardTye/CARD 2 - TYPE.png'
import card3 from '../NavBar/CardTye/CARD 3- TYPE.png'
import card4 from '../NavBar/CardTye/CARD 4- TYPE.png'


const Property = () => {
  return (
    
      <div style={{ paddingInline: '8%' }} className='-mt-24 md:-mt-0'>
        <div>
          <div className=' '>
            <div className='mx-auto justify-center items-center flex '>
              <div className='  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 '>
                <img className=' cursor-pointer hover:scale-110 duration-1000' src={card1} alt="" />
                <img src={card2} className='cursor-pointer hover:scale-110 duration-1000' alt="" />
                <img src={card3} className='cursor-pointer hover:scale-110 duration-1000' alt="" />
                <img src={card4} className='cursor-pointer hover:scale-110 duration-1000' alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
   
    
  )
}

export default Property
