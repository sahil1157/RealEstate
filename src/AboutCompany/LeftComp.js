import React from 'react'
import RightComp from './RightComp'
import AboutUs from '../Components/logos/Abt.jpg'


const LeftComp = () => {
    return (

        <div style={{ paddingInline: '6%' }} className='pt-14 relative' >

            <div className='flex flex-col  lg:justify-start justify-center text-center lg:flex-row gap-9'>
                <div className=''>
                    <div className=''>
                        <div className='h-[550px] w-full relative rounded-xl'>
                            <img src={AboutUs} className='w-full h-[550px] rounded-xl object-cover' alt="" />
                            <div className=' lg:translate-x-40 -mb-6 lg:-translate-y-16 lg:right-0 absolute bottom-0'>
                                <div className='max-w-[355px] p-6 h-[110px] bg-[#013698]'>
                                    <span className='text-lg  text-white font-Oldenburg'>10</span>
                                    <p className='text-lg text-white text-center font-Oldenburg'>Years of Experience</p>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>


                <div>
                    <RightComp />
                </div>
            </div>


        </div>
    )
}

export default LeftComp
