import React from 'react'
import image from '../../Components/images/Handshake.jpg'
import Right from '../Right/Right'

const Left = () => {
    return (
        <div style={{ paddingInline: '4%' }} className='pt-10 md:justify-end flex justify-center place-items-center mx-auto' >

            <div className='flex-row flex gap-0 md:gap-14'>
                <div className='flex '>
                    <div className='md:h-[550px] pt-7 rounded-xl'>
                        <img src={image} className='md:block hidden w-full h-[350px] md:h-[550px] rounded-xl object-cover' alt="" />
                    </div>
                </div>
                <Right />
            </div>
        </div>
    )
}

export default Left
