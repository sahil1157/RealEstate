import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { BiHome } from 'react-icons/bi'
import { MdOutlineCurrencyRupee } from 'react-icons/md'

const SeacrchThePrice = () => {
    // h-[300px] lg:h-[170px] md:h-[168px] md:w-[1930]
    // md: text - lg lg: pt - 6 lg: text - xl p - 2  px - 16
    return (
        <>
            <div>
                <div style={{ paddingInline: '18%' }} className=' md:-translate-y-20 -translate-y-48 lg:-translate-y-20'>
                    <div className='items-center justify-center mx-0'>
                        <div className='  box-border shadow-lg bg-white p-8 rounded-md min-h-[150px] '>
                            <div className=' flex flex-col font-Oldenburg  '>
                                <div className=''>
                                    <h3 className='lg:text-xl text-md md:text-lg lg:text-start  text-center flex-wrap font-Oldenburg font-meduim p-4 lg:px-14 '>Search The Property Your are Looking For</h3>
                                </div>
                                <div className=' flex md:flex-row flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-6 pt-3'>

                                    <div className='relative flex whitespace-nowrap items-center'>
                                        <IoLocationSharp size={25} className='text-[#00000080] absolute right-3' />
                                        <input placeholder='Location' type="text" className=' outline-none pr-10 rounded-md w-[40vw] p-3 md:w-[12vw]  lg:w-[10vw] h-10 border-[2px]' />
                                    </div>
                                    <div className='relative items-center flex'>
                                        <BiHome size={25} className='absolute text-[#00000080] right-3' />
                                        <input placeholder='Type' type="text" className=' outline-none p-3 pr-10 rounded-md w-[40vw] md:w-[12vw] lg:w-[10vw] h-10 border-[2px]' />
                                    </div>
                                    <div className='relative flex items-center'>
                                        <MdOutlineCurrencyRupee size={25} className='right-3 absolute text-[#00000080]' />
                                        <input placeholder='Budget' type="text" className=' outline-none pr-10 p-3 rounded-md w-[40vw] md:w-[12vw] lg:w-[10vw] h-10 border-[2px]' />
                                    </div>
                                    <div className=''>
                                        <button className=' outline-none bg-blue-700 text-white hover:bg-black hover:text-white h-10 text-center w-[40vw] md:w-[12vw] lg:w-[10vw] rounded-md'>SearchNow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeacrchThePrice
