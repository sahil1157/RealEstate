import React from 'react'
import Header from '../../BuyComponent/HeaderFile/Header'

const Header3 = () => {

    const SellProps = {
        // img: '/Headerimg/Sell.png',
        img:'/Headerimg/realHeader.png',
        name: 'Sell Property'
    }
    return (
        <div>
        <Header {...SellProps}/>
        </div>
    )
}

export default Header3
