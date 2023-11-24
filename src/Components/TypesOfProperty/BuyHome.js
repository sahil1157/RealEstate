import React from 'react'
import { BsFillHouseUpFill, BsHouseLockFill } from 'react-icons/bs'
import { MdImageSearch } from 'react-icons/md'
import { RiAdvertisementFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const BuyHome = () => {

    const BuyyHomeMap = [
        {
            icons: <BsHouseLockFill />,
            name: 'Buy Property',
            paragraph: 'Get the best Property listed on the basis of price,location',
            className: '',
            button: 'Find Property',
            onclick: './buy'
        },
        {
            icons: <BsFillHouseUpFill />,
            name: 'Rental Property',
            paragraph: 'Get Flats on rent available on your Location with best Price',
            className: '',
            button: 'Rent Property',
            onclick: './property'
        },
        {
            icons: <MdImageSearch />,
            name: 'Get Home Loans',
            paragraph: 'want HomeLoans? fill the form as illustrated',
            className: '',
            button: 'Get Loans',
            onclick: './homeloan'
        },
        {
            icons: <RiAdvertisementFill />,
            name: 'Advertise your Proprty',
            paragraph: 'want to Sell property online? fill the form as illustrated ',
            className: '',
            button: 'Advertise',
            onclick: './advertise'
        },
    ]

    return (
        <div style={{ paddingInline: '8%' }} className='-mt-28 md:mt-0'>

            <div className='flex flex-col mx-0 items-center justify-center  lg:flex md:grid md:grid-cols-2  lg:flex-row gap-9'>
                {
                    BuyyHomeMap.map((i) => {
                        return (
                            <div className='text-center box-border gap-6 group hover:border-blue-950 md:cursor-pointer border-[2px] rounded-md w-full min-h-[300px] md:h-52 flex flex-col justify-center items-center'>
                                <div className='gap-1 flex flex-col'>
                                    <span className='flex justify-center text-[85px] text-blue-600'>{i.icons}</span>
                                    <p className='text-xl'>{i.name}</p>
                                    <h1 className='text-center mx-auto text-gray-600 w-[80%]'>{i.paragraph}</h1>
                                </div>
                                <Link to={i.onclick}>
                                    <div className='relative md:cursor-pointer text-white rounded-lg bg-blue-700 lg:bg-transparent group-hover:text-white lg:text-black'>
                                        <button onclick={i.onclick} className='rounded-lg lg:w-[15vw] w-[70vw] md:w-[30vw] border-neutral-300 h-[50px] border-[1px] justify-center  items-center gap-4 flex flex-row lg:group-hover:bg-blue-700' >

                                            {i.button}
                                            <BsArrowRight />

                                        </button>

                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default BuyHome
