import React from 'react'
import { PiBedThin } from 'react-icons/pi'
import { GiBathtub } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { PiBuildingsDuotone } from 'react-icons/pi'
import DidntFindProperty from './DidntFindProperty'

const Icons = [
    {
        name: 'Bedroom',
        icon: <PiBedThin />,
        num: '5'

    },
    {
        name: 'Bathroom',
        icon: <GiBathtub />,
        num: '7'
    },
    {
        name: 'Parking',
        icon: <AiFillCar />,
        num: '4'
    },
    {
        name: 'Floor',
        icon: <PiBuildingsDuotone />,
        num: '12'
    },
]


const lowerComp = [
    {
        name: 'Property Face',
        desc: 'South'
    },
    {
        name: 'Area Covered',
        desc: '7 Aana'
    },
    {
        name: 'Carpet Area',
        desc: '5000 Sq. Feet'
    },
    {
        name: 'Access Road',
        desc: '12 Feet'
    },
    {
        name: 'Road Type',
        desc: 'Accessroad'
    },

]


const LowerComponent = () => {
    return (
        <div className=''>

            <div className='pt-12'>
                <div className=' box-border max-w-[704px] min-h-[454px] lg:justify-start xl:justify-start justify-center rounded-lg border-[1px] border-[#0000001F]'>
                    <div className='pt-14 px-10 flex-wrap grid grid-cols-2 gap-3 p-6 '>
                        {
                            Icons.map((i,ind) => {
                                return (
                                    <div key={ind.id} className='  flex flex-wrap flex-row gap-4'>
                                        <div className=' flex flex-row gap-3'>
                                            <span className='text-[#736F6F] text-3xl'>{i.icon}</span>
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-[#736F6F] text-xl'>{i.name}</p>
                                                <p className=' text-black text-lg font-Oldenburg -mt-1 px-3'>{i.num}</p>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* end component */}
                    <div className='pt-3'>
                        <div className='px-8 '>
                            <hr className=' text-[#00000033] border-[1px]' />
                        </div>


                        <div className=' px-10 justify-between flex flex-wrap md:grid-cols-3 gap-7 md:grid p-8'>
                            {
                                lowerComp.map((i) => {
                                    return (
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-2xl font-bold text-[#736F6F]'>{i.name}</p>
                                            <p className='text-lg text-black font-Oldenburg'>{i.desc}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default LowerComponent
