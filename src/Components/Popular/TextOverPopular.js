import React from 'react'
import { PiQuotesThin } from 'react-icons/pi'

const TextOverPopular = () => {
    return (
        <>
            <div>
                <div className='relative'>
                    <div className=' lg:-mt-44 md:-mt-36 -mt-24   w-full h-[452px] bg-[#01369833]'>
                        <div style={{ paddingInline: '8%' }} className='gap-6 md:gap-0 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between left-0 right-0 absolute lg:bottom-20 bottom-10 '>
                            <div className='text-center md:text-start'>
                                <h1 className=' md:text-2xl text-xl lg:text-3xl '>Sahil Bohora</h1>
                                <h1 className=' font-Oldenburg text-md text-[#00000080]'>Founder,Shabdajal</h1>
                            </div>
                            <div className='flex'>
                                <span><PiQuotesThin className='hidden md:flex text-[#00000080] md:w-[44px] w-[52px] h-[52px]' /></span>
                                <p className='text-[#00000080] text-center lg:w-[711px] md:w-[360px]  font-Oldenburg text-[23px]'>Our Business is one of close relationships and we are very fortunate to be able to share so many positive real estate experiences with our clients.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/*  */}
        </>
    )
}

export default TextOverPopular
