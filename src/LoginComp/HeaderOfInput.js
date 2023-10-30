import React from 'react'
import Header from '../../src/BuyComponent/HeaderFile/Header'
import InpProps from './InpProps'
const HeaderOfInput = () => {

    const header = {
        name: 'Login',
        img: '/Headerimg/358800 1(1).png'
    }
    return (
        <div>
            <Header {...header} />
            <InpProps />
        </div>
    )
}

export default HeaderOfInput
