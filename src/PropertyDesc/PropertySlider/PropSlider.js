import React, { useEffect, useState } from 'react'
import logo from '../../Components/logos/estate-removebg-preview.png'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink, useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../../App.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import imgage from '../../Components/Popular/images/realHeader.png'
import TextInImage from '../../BuyComponent/HeaderFile/TextInImage';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { CiHeart } from "react-icons/ci";

const PropSlider = ({ handleClicked, dataItems, cart, setShow }) => {


    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: <BsArrowLeft />,
        nextArrow: <BsArrowRight />,

    };

    const HeaderProp = {
        name: 'House photos'
    }

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

    const bodyStyle = document.body.style;
    const [isLocked, setisLocked] = useState(
        bodyStyle.overFlowY === 'hidden'
    )

    useEffect(() => {
        bodyStyle.overflow = isLocked ? 'hidden' : 'auto'
    }, [isLocked, bodyStyle])

    const Toggle = () => {
        setisLocked(!isLocked)
    }

    return (
        <>

            <div className='relative overflow-x-hidden m-0'>

                {
                    dataItems && dataItems ? (
                        <div className='relative items-center mx-auto'>
                            <Slider {...settings}>
                                <img src={dataItems.homeImg} alt="" className=' w-full object-cover lg:h-screen h-[500px] bg-center' />
                                <img src={dataItems.img1} alt="" className=' w-full object-cover lg:h-screen h-[500px] bg-center' />
                                <img src={dataItems.img2} alt="" className=' w-full object-cover lg:h-screen h-[500px] bg-center' />
                                <img src={dataItems.img3} alt="" className=' w-full object-cover lg:h-screen h-[500px] bg-center' />
                            </Slider>

                            <button onClick={() => setShow(false)} className='absolute flex mx-auto text-white left-2 bottom-7'>
                                <IoIosNotificationsOutline className='relative flex' size={40} />
                                <span className='absolute right-0 w-4 pt-[1px] lg:pt-0 h-4 bg-red-600 lg:cursor-pointer rounded-full top-0 text-white text-xs'>{cart.length}</span>
                            </button>

                            <div className='absolute lg:hover mx-auto lg:cursor-pointer text-white right-2 bottom-8 md:hover:text-gray-300'>
                                <CiHeart className='active:text-red-600 lg:cursor-pointer md:cursor-auto duration-200' size={37} onClick={() => handleClicked(cart)} />
                            </div>
                        </div>
                    )
                        :
                        <div className='justify-center flex items-center mx-auto relative'>
                            <img src={imgage} alt="" className='m-0 w-full object-cover md:full h-[800px] bg-center' />
                            <div className='absolute text-center justify-center'>
                                <TextInImage {...HeaderProp} />
                            </div>
                        </div>
                }

                <div className=' absolute left-0 right-3 top-0 pt-4 text-white ' >
                    <div className=' flex flex-row lg:justify-evenly justify-between '>
                        <div className='flex'>
                            <div className='pt-3'>
                                <img onClick={Homepage} src={logo} alt="" className=' lg:cursor-pointer lg:w-[150px] md:w-[150px] lg:h-[65.54px] md:h-[55px] w-26 h-12' />
                            </div>
                        </div>
                        <div className='pt-4 hidden lg:flex'>
                            <nav>
                                <ul className=' flex gap-10 '>
                                    {/*  */}
                                    <NavLink to='/property/' className='cursor-pointer hover:border-b-2 border-red-400 duration-75' >properties</NavLink>
                                    <NavLink to='/buy' className='cursor-pointer hover:border-b-2 border-red-400 duration-75' >Buy</NavLink>
                                    <NavLink to='/sell' className='cursor-pointer hover:border-b-2 border-red-400 duration-75' >Sell</NavLink>
                                    <NavLink to='/homeloan' className='cursor-pointer hover:border-b-2 border-red-400 duration-75' >HomeLoan</NavLink>
                                    <NavLink to='/advertise' className='cursor-pointer hover:border-b-2 border-red-400 duration-75' >Advertise</NavLink>
                                    <NavLink to='/development' className='cursor-pointer hover:border-b-2 border-red-400 duration-75' >DevelopmentProjects</NavLink>
                                </ul>
                            </nav>
                        </div>
                        {/*  */}
                        <div className=' pt-4 '>
                            <>
                                <div className=' text-white hidden lg:flex space-x-16'>
                                    <div onMouseEnter={onShowBtn} onMouseLeave={onHideBtn} className='relative'>
                                        <p className='cursor-pointer hover:text-red-600 duration-75'>More</p>
                                        {
                                            state ? (
                                                <div className='flex flex-col gap-3 absolute pt-4' onMouseEnter={onShowBtn}>
                                                    <NavLink className='cursor-pointer hover:border-b-2 duration-75 border-red-500' to='/about'>AboutUs</NavLink>
                                                    <NavLink className='cursor-pointer hover:border-b-2 duration-75 border-red-500' to='/blog'>Blogs</NavLink>
                                                </div>
                                            ) : null
                                        }
                                    </div>

                                    <NavLink className='cursor-pointer hover:border-b-2 border-red-400 duration-75' to='/login'>LogIn</NavLink>
                                </div>
                            </>
                        </div>
                        <div onClick={Toggle} id="btn" className='pt-4 text-white lg:hidden'>
                            <RxHamburgerMenu className='' onClick={openSlider} size={30} />
                        </div>
                        {/*  */}
                    </div>
                    <div className=''>
                        <div style={{ zIndex: '20' }} className={`fixed ${slider ? 'fixed ' : 'hidden'} right-0 top-0 w-[230px] md:w-[300px] overflow-x-hidden h-screen lg:hidden bg-white `}>
                            <div onClick={Toggle} className=' p-4 text-black pt-5'>
                                <RxCross1 size={25} className='' onClick={openSlider} />
                            </div>
                            <div className=''>
                                <ul className='pt-11 p-4 text-black transition-all duration-100 delay-100 grid grid-cols-1 ' >
                                    <NavLink to='/property/Buildings' className='p-4 hover:bg-gray-400 hover:animate-pulse rounded-md cursor-pointer' >Properties</NavLink>
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
                </div >
            </div >
        </>
    )
}

export default PropSlider
