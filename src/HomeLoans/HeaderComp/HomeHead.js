import React from 'react'
import Header from '../../BuyComponent/HeaderFile/Header'

const HomeHead = () => {
    const HeadrComp = {
        img:'/Headerimg/HeaderImg2.avif',
        name :'Home Loan'
    }
  return (
    <div>
      <Header {...HeadrComp}/> 
    </div>
  )
}

export default HomeHead
