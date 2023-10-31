
import React from 'react'
import Header from '../HeaderFile/Header'
import img from '../../Components/images/Aboutus.avif'

const HeaderProps = () => {


    const HeaderProp = {
    img,
        name: 'Buy Properties'
    }

    console.log("Iimage" ,HeaderProp.img)

    return (
        <div>
            <Header {...HeaderProp} />

        </div>
    )
}

export default HeaderProps
