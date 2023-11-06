import React from 'react'
import Address from '../Address/Address'
import YtLink from '../Contacts/YtLink'
import Featured from '../../Components/Featured/Featured'
import PropSlider from '../PropertySlider/PropSlider'


const Header2 = () => {

  
  return (
    <div>
      {/* <Header {...HeaderProps}/> */}
      <PropSlider />
      <Address />
      <YtLink />
      <Featured />

    </div>
  )
}

export default Header2
