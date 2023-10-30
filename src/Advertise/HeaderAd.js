import React from 'react'
import Header from '../BuyComponent/HeaderFile/Header'
import AdLeft from './AdLeft'

const HeaderAd = () => {
    const headerAd = {
        img: '/Headerimg/realHeader.png',
        name: "Advertise"
    }
    return (
        <div>
            <Header {...headerAd} />
            <AdLeft />
        </div>
    )
}

export default HeaderAd
