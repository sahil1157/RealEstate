import React from 'react'
import Header from '../BuyComponent/HeaderFile/Header'
import img from '../Components/images/Blog.avif'

const HeadDevelop = () => {
    const develop = {
        name: 'Development Projects',
        img: img
    }
    return (
        <div>
            <Header {...develop} />
        </div>
    )
}

export default HeadDevelop
