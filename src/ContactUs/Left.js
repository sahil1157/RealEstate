import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { CiMail } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import Right from './Right'


const Left = () => {

    const MappedIcons = [
        {
            icons: <SlLocationPin />,
            name1: 'Location',
            name2: 'Nayabazar, Kathmandu',

        },
        {
            icons: <CiMail />,
            name1: 'Email Address',
            name2: 'basnetsahil93@gmail.com',
        },
        {
            icons: <FiPhoneCall />,
            name1: 'Phone Number',
            name2: '+977-9800000000',
        },
    ]





    return (
        <div style={{ paddingInline: '8%' }} className='pt-8 gap-8 flex justify-between flex-col lg:flex-row'>
            <div className='items-center flex'>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-Oldenburg text-[#00000080] '>FEEL FREE TO CONTACT US</p>

                    <div className='flex-wrap flex xl:flex-col lg:flex-col gap-4 justify-between'>
                        {
                            MappedIcons.map((i) => {
                                return (
                                    <div className='flex sm:flex sm:flex-col md:flex-row gap-7 pt-7'>
                                        <div className="xl:w-24 xl:h-24 md::w-24 md:w-28 md:h-28 w-20 h-20 border-[1px] border-[#00000080] rounded-full inline-flex items-center justify-center bg-white text-gray-700 text-xl font-bold">
                                            <p className='text-3xl text-[#013698]'>{i.icons}</p>
                                        </div>

                                        <div className='flex pt-4 flex-col gap-2'>
                                            <p className='text-lg xs:text-md font-medium font-Oldenburg'>{i.name1}</p>
                                            <p className='text-md font-Oldenburg'>{i.name2}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>



                </div>
            </div>

            <div>
                <Right />
            </div>
        </div>
    )
}

export default Left
