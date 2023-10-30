import React from 'react'
import { GoArrowRight } from 'react-icons/go'


const PropertyByLocation = () => {
    return (
       
        <div style={{paddingInline:'8%'}} className=' pt-12 '>
            <div className=' flex flex-row gap-3 '>
                <div className='pt-4 '>
                    <hr className='w-[60px]  border-black border-[1px]' />
                </div>
                <h1 className=' text-[#00000080] text-2xl font-Oldenburg'>Location</h1>
            </div>

            <div className=' pt-12 md:pt-4 flex flex-col mx-0 justify-center items-center md:flex-row md:justify-between'>
                <h1 className=' font-[open sans] text-xl flex-wrap lg:text-3xl'>Property By Locations</h1>
                <div className=' cursor-pointer flex flex-row gap-2 pt-8 md:pt-0'>
                    <h1 className=' font-[Oldenburg] font-medium'>Explore All</h1>
                    <span><GoArrowRight size={28} /></span>
                </div>
            </div>
            
        </div>

    )
}

export default PropertyByLocation
