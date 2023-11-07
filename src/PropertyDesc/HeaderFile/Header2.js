import React from 'react'
import Address from '../Address/Address'
import YtLink from '../Contacts/YtLink'
import PropSlider from '../PropertySlider/PropSlider'
import PopularProps from '../../Components/Props/PopularProps'
import Buildings from '../../Components/Popular/Buildings'


const Header2 = () => {

  const featured = {
    naam: "Similar",
    Residences: 'Related Residences',
    Explore: 'Explore All'
  }


  return (
    <div>
      <PropSlider />
      <Address />
      <YtLink />
      <div style={{ paddingInline: '8%' }}>
        <PopularProps {...featured} />
      </div>
      <Buildings />

    </div>
  )
}

export default Header2
