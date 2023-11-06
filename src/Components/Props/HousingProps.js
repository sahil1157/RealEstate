import React from 'react'
import { Link } from 'react-router-dom'

const HousingProps = ({ items }) => {

    return (
        <>
            <div className=''>
                <Link to={`/development/ ${items.RouteName}`}>
                    <div className='bg-white box-border w-[280px] h-[280px] md:w-[450px] md:h-[350px] lg:w-[390px] lg:h-[350px]'>
                        <div className=''>
                            <div className='lg:text-start text-center'>
                                <div>
                                    <img className='w-full object-cover cursor-pointer' src={items.img} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-2xl pt-2 font-Oldenberg text-[#00000080]'>{items.Date}</h1>
                                </div>
                                <div className='pt-2'>
                                    <hr className=' lg:flex hidden w-[100px] border-[1px]' />
                                </div>
                                <div className=''>
                                    <p className=' flex-wrap '>{items.name}</p>
                                </div>
                            </div>


                        </div>
                    </div></Link>
            </div>
        </>
    )
}

export default HousingProps
