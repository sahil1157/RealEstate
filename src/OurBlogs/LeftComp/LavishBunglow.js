import React from 'react'
import TextOver from './TextOver'
import { CgProfile } from 'react-icons/cg'
import SearchComponent from '../Right/SearchComponent'

const LavishBunglow = () => {

    const BlogComp = [
        {
            name: 'Lavish bunglow on Sale at Budhanilkantha',
            location: 'This residential house is located at Buddha Colony in Budhanilkantha, Kathmandu, near Park Village Resort.',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 25,
            date2: 'Oct',
        },

        {
            name: 'Lavish bunglow on Sale at Basundhara',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 29,
            date2: 'Nov',
        }
    ]
    return (
        <div style={{ paddingInline: '5%' }} className='pt-12 justify-center lg:justify-between flex lg:block'>
            <div className=' flex lg:flex-row flex-col-reverse lg:justify-between gap-8 lg:gap-4'>
                <div className='flex flex-col gap-10'>
                    {
                        BlogComp.map((i) => {
                            return (
                                <div>
                                    <div className='relative max-w-[839px] min-h-[350px] md:min-h-[395px] rounded-t-2xl bg-[#D9D9D9]'>
                                        <TextOver {...i} />
                                    </div>
                                    <div className=''>
                                        <div className='flex flex-col gap-3'>
                                            <div className='max-w-[839px] flex items-center border-[1px] rounded-b-2xl shadow-lg min-h-[25vh]'>
                                                <div className='px-11 p-5 mt-14 sm:mt-8 md:mt-14 lg:mt-16 font-Oldenburg'>
                                                    <span className='text-2xl'>{i.name}</span>
                                                    <p className='text-lg text-[#00000080]'>{i.location}</p>

                                                    <div className='pt-6 flex flex-row gap-4 font-Oldenburg text-[#00000080]'>
                                                        <span>{i.icon}</span>
                                                        <span className='text-xl pt-1'>{i.CompName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <SearchComponent />
                </div>
            </div>

        </div>
    )
}

export default LavishBunglow
