import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

const TypeOf = ({ handleChange }) => {
    return (
        <div className='pt-6'>
            <div className=''>
                <form className='' action="">
                    <p className=' text-xl font-bold text-[#736F6F]'>What type of property are you looking for?</p>
                    <div className='pt-3 relative '>

                        <AiOutlineArrowDown className='absolute right-2 m-3 w-12 h-8' />
                        <input
                            type='text'
                            onChange={handleChange}
                            name='purchaseORconstruction'
                            placeholder='purchase/construction'
                            className=' outline-none relative text-base w-full md:w-[38vw] rounded-lg p-4 min-h-[57px]  placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                    </div>
                </form>

            </div>



            {/* province */}
            <div className='pt-6'>
                <form className='' action="">
                    <p className=' text-xl font-bold text-[#736F6F]'>Name of the province you are seeking for?</p>
                    <div className='pt-3 relative '>
                        <input
                            onChange={handleChange}
                            type='text'
                            autoComplete='off'
                            name='Province'
                            placeholder='eg.Bagmati'
                            className=' outline-none relative text-base w-full md:w-[38vw] rounded-lg p-4 min-h-[57px]  placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                    </div>
                </form>

            </div>
            {/* province */}


            {/* city */}
            <div className='pt-6'>
                <form className='' action="">
                    <p className=' text-xl font-bold text-[#736F6F]'>Name of the city you are seeking for</p>
                    <div className='pt-3 relative '>

                        <AiOutlineArrowDown className='absolute right-2 m-3 w-12 h-8' />
                        <input
                            onChange={handleChange}
                            autoComplete='off'
                            type='text'
                            name='city'
                            placeholder='eg.Kathmandu'
                            className=' outline-none relative text-base w-full md:w-[38vw] rounded-lg p-4 min-h-[57px]  placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                    </div>
                </form>

            </div>
            {/* city */}

        </div>
    )
}

export default TypeOf
