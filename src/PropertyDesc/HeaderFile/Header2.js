import React from 'react'
import Header from '../../BuyComponent/HeaderFile/Header'
import Address from '../Address/Address'
import YtLink from '../Contacts/YtLink'
import Featured from '../../Components/Featured/Featured'

const Header2 = () => {

    const HeaderProps = {
        img: '/Headerimg/358800 1(1).png',
        name : 'House Photos'
    }
  return (
    <div>
      <Header {...HeaderProps}/>
      <Address/>
      <YtLink/>
      <Featured/>
      
    </div>
  )
}

export default Header2
