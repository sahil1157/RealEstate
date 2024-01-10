
import React from 'react'
import Header from '../HeaderFile/Header'
// import img from '../../Components/images/Aboutus.avif'
import img from '../../Components/images/amenties-4.avif'

const HeaderProps = () => {


    const HeaderProp = {
        img,
        name: 'Buy Properties'
    }

    return (
        <div>
            <Header {...HeaderProp} />

        </div>
    )
}

export default HeaderProps
