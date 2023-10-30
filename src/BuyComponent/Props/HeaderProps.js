
import React from 'react'
import Header from '../HeaderFile/Header'

const HeaderProps = () => {


    const HeaderProp = {
        img: '/Headerimg/Buy.png',
        name: 'Buy Properties'
    }

    return (
        <div>
            <Header {...HeaderProp} />

        </div>
    )
}

export default HeaderProps
