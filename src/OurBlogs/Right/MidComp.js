import React from 'react'
import LowerComp from './LowerComp'

const MidComp = () => {

    const midCompMap = [
        {
            onSale: 'Lavish bunglow on sale at.....',
            date: 'October 29, 2022'
        },
        {
            onSale: 'Lavish bunglow on sale at.....',
            date: 'October 29, 2022'
        },
        {
            onSale: 'Lavish bunglow on sale at.....',
            date: 'October 29, 2022'
        },
        {
            onSale: 'Lavish bunglow on sale at.....',
            date: 'October 29, 2022'
        },
    ]
    return (
        <div className='pt-8  justify-center mx-auto flex flex-col lg:gap-10 gap-8'>
            <div className='lg:w-full rounded-xl bg-[#C6D2E866] w-full min-h-[600px] lg:min-h-[545px]'>
                <div className='p-8 flex -mt-4 flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <span className=' text-4xl font-Oldenburg font-normal text-[#000000]'>Recent Post</span>
                        <hr className='divide-y border-[1px] border-[#0000004D]' />
                    </div>
                    <div className='flex flex-col gap-6'>
                        {
                            midCompMap.map((i) => {
                                return (
                                    <div className='xs:flex xs:flex-col rounded-xl pt-4 sm:flex sm:flex-row gap-8 lg:gap-4'>
                                        <div className='w-[150px] h-[84px] lg:w-[100px] bg-[#D9D9D9]'>
                                        </div>
                                        <div className='items-center pt-3 sm:pt-0 text-[#00000080] text-xl font-Oldenburg flex'>
                                            <div>
                                                <p>{i.onSale}</p>
                                                <p>{i.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div>
                <LowerComp/>
            </div>
        </div>
    )
}

export default MidComp
