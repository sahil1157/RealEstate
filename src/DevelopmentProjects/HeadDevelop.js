import React from 'react'
import Header from '../BuyComponent/HeaderFile/Header'

const HeadDevelop = () => {
    const develop = {
        name: 'Development Projects',
        img: '/Headerimg/Blog.avif'
    }
    return (
        <div>
            <Header {...develop} />
        </div>
    )
}

export default HeadDevelop
