import React from 'react'
import LowerComponent from './LowerAddress'
import UpperComp from '../Contacts/UpperComp'

const Address = () => {
    return (
        <div style={{ paddingInline: '3%' }} className=' lg:flex-row xl:flex-row items-center justify-center flex flex-col lg:justify-between xl:justify-between lg:flex lg:lg:flex-row gap-9 pt-20'>
            <div className=''>
                <div className='min-h-[266px] rounded-lg max-w-[709px] box-border border-[1px] border-[#0000001F]'>
                    <div className=' flex flex-col '>
                        <div className=' px-8 flex-wrap flex flex-row justify-between gap-5 p-3 font-bold text-lg text-black'>
                            <p>BN12359</p>
                            <p>House</p>
                            <p>For Sale</p>
                            <p>New</p>
                            <p>Old</p>
                        </div>
                        <div className='pt-3 px-8 p-3'>
                            <h1 className='text-lg font-bold text-[#736F6F]'>Address</h1>
                            <p className='font-Oldenburg pt-2 text-md'>laliguras shanti tole (house no. 74), Pokhara,
                                Nepal</p>
                            <p className='text-[#736F6F] font-bold pt-7'>Price</p>
                            <div className='sm:flex sm:flex-col md:flex -mt-2 md:flex-row gap-4'>
                                <p className='text-2xl font-Oldenburg pt-2'>Rs. 4,60,00,000</p>
                                <div className='pt-1'>
                                    <button className='max-w-[100px] p-2 rounded-lg h-[40px] text-white hover:bg-black bg-[#013698]'>Negotiable</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div>
                    <LowerComponent />
                </div>
            </div>

            <div>
                <UpperComp />
            </div>

        </div>
    )
}

export default Address
