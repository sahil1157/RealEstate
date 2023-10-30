import React from 'react'
import Header from '../BuyComponent/HeaderFile/Header'
import LeftComp from './LeftComp'
import Testimonials from './Testimonials'
import SliderFirst from './Slider/SLider'
import AboutTeam from './OurTeam/Team'

const HeaderAbtCom = () => {
    const header = {
        name: 'About Company',
        img: '/Headerimg/white.avif'
    }
    return (
        <div className='overflow-x-hidden'>
            <Header {...header} />
            <LeftComp />
            <Testimonials/>
            <SliderFirst/>
            <AboutTeam/>
            {/* <Avatar1/> */}
            {/* <Slider/> */}
        </div>
    )
}

export default HeaderAbtCom
