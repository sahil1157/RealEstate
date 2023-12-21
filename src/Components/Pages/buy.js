import React from 'react'
import HeaderProps from '../../BuyComponent/Props/HeaderProps'
import SearchItem from '../../BuyComponent/SearchListing/SearchItem'


const Buy = ({items}) => {

  return (
    <div>
       <HeaderProps/>
            <SearchItem items = {items} />
    </div>
  )
}

export default Buy
