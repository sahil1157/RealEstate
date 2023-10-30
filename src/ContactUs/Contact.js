import React from 'react'
import Header from '../BuyComponent/HeaderFile/Header'
import Left from './Left'

const Contact = () => {

    const datas = {
        name :'Contact Us',
        img : '/Headerimg/358800 1(1).png'
    }
  return (
    <div>
      <Header {...datas}/>
      <Left/>
    </div>
  )
}

export default Contact
