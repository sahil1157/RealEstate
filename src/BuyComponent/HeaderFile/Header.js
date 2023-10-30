import React, { useState } from 'react'
import logo from '../../Components/logos/estate-removebg-preview.png'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink, useNavigate } from 'react-router-dom'
import TextInImage from './TextInImage';
const Header = (HeaderProp) => {

    const [state, setState] = useState(false)

    const onShowBtn = () => {
        setState(true)
    }
    const onHideBtn = () => {
        setState(false)
    }

    const navigate = useNavigate()

    const Homepage = () => {
        navigate('/')
    }

    const [slider, setSlider] = useState(false);
    const openSlider = () => {
        setSlider(!slider);
    };


    return (
        <div className=''>
            <div className=' justify-center flex items-center mx-auto'>
                <img src={HeaderProp.img} alt="" className='relative h-[800px] w-full object-cover' />
                <div className='absolute text-center justify-center'>
                    <TextInImage {...HeaderProp} />
                </div>
            </div>
            {/*  */}
            <div className=' absolute left-0 right-0 top-0 pt-4 ' >
                <div className=' flex flex-row lg:justify-evenly justify-between px-10 lg:px-0 '>
                    <div className='flex'>
                        <div className='pt-3'>
                            <img onClick={Homepage} src={logo} alt="" className=' cursor-pointer lg:w-[150px] md:w-[150px] lg:h-[65.54px] md:h-[55px] w-26 h-12' />
                        </div>
                    </div>
                    <div className='pt-4 hidden lg:flex text-white'>
                        <nav>
                            <ul className=' flex gap-10 '>
                                {/*  */}
                                <NavLink to='/property' className='' >properties</NavLink>
                                <NavLink to='/buy' className='cursor-pointer' >Buy</NavLink>
                                <NavLink to='/sell' className='cursor-pointer' >Sell</NavLink>
                                <NavLink to='/homeloan' className='cursor-pointer' >HomeLoan</NavLink>
                                <NavLink to='/advertise' className='cursor-pointer' >Advertise</NavLink>
                                <NavLink to='/development' className='cursor-pointer' >DevelopmentProjects</NavLink>
                            </ul>
                        </nav>
                    </div>
                    {/*  */}
                    <div className=' pt-4 '>
                        <>
                            <div className=' text-white hidden lg:flex space-x-16'>
                                <div onMouseEnter={onShowBtn} onMouseLeave={onHideBtn} className='relative'>
                                    <p className='cursor-pointer'>More</p>
                                    {
                                        state ? (
                                            <div className='flex flex-col gap-3 absolute pt-4' onMouseEnter={onShowBtn}>
                                                <NavLink className='cursor-pointer hover:text-rose-600' to='/about'>AboutUs</NavLink>
                                                <NavLink className='cursor-pointer hover:text-rose-600' to='/blog'>Blogs</NavLink>
                                            </div>
                                        ) : null
                                    }
                                </div>

                                <NavLink className='cursor-pointer' to='/login'>LogIn</NavLink>
                            </div>
                        </>
                    </div>
                    <div id="btn" className='pt-4 cursor-pointer text-white lg:hidden'>
                        <RxHamburgerMenu className='' onClick={openSlider} size={30} />
                    </div>
                    {/*  */}
                </div>
                <div className=''>
                    <div style={{ zIndex: '20' }} id="overlay" class="overlay hidden" className={`fixed ${slider ? 'block ' : 'hidden'} right-0 overflow-y-scroll top-0 w-[230px] md:w-[300px] h-screen lg:hidden bg-white `}>
                        <div className=' p-4 pt-5'>
                            <RxCross1 size={25} className=' cursor-pointer' onClick={openSlider} />
                        </div>
                        <div className=''>
                            <ul className='pt-11 p-4 text-black transition-all duration-100 delay-100 grid grid-cols-1 ' >
                                <NavLink to='/property' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer' >Properties</NavLink>
                                <NavLink to='/buy' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer' >Buy</NavLink >
                                <NavLink to='/sell' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer'>Sell</NavLink  >
                                <NavLink to='/homeloan' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer' >HomeLoans</NavLink >
                                <NavLink to='/advertise' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer'>Advertise</NavLink>
                                <NavLink to='/development' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer'>DevelopmentProjects</NavLink>
                                <NavLink to='/about' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer'>About Us</NavLink>
                                <NavLink to='/blog' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer'>Our Blogs</NavLink>
                                <NavLink to='/login' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer'>LogIn</NavLink>

                            </ul>
                        </div>
                    </div>
                </div>
                {/* <TextInImage {...HeaderProp} /> */}
            </div >
        </div>
    )
}

export default Header


