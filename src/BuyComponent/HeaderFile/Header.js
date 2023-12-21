import React, { useEffect, useState } from 'react'
import logo from '../../Components/logos/estate-removebg-preview.png'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink, useNavigate } from 'react-router-dom'
import TextInImage from './TextInImage';
import { NavsMap } from '../../Components/NavBar/1stHeaderArray';
import { NavsMap2 } from '../../Components/NavBar/NavMap';


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
        <div>
            <div className=' justify-center flex items-center mx-auto'>
                <img src={HeaderProp.img} alt="" className='m-0 w-full object-fit md:object-cover md:h-[750px] h-[500px] bg-center' />
                <div className='absolute text-center justify-center'>
                    <TextInImage {...HeaderProp} />
                </div>
            </div>
            {/*  */}
            <div className='absolute left-0 right-3 top-0 pt-4 ' >
                <div className=' flex flex-row lg:justify-evenly justify-between '>
                    <div className='flex'>
                        <div className='pt-3'>
                            <img onClick={Homepage} src={logo} alt="" className=' lg:cursor-pointer lg:w-[150px] md:w-[150px] lg:h-[65.54px] md:h-[55px] w-26 h-12' />
                        </div>
                    </div>
                    <div className='pt-4 hidden lg:flex flex-row gap-10 text-white'>
                        {
                            NavsMap.map((i, ind) => {
                                return (
                                    <nav key={ind.id}>
                                        <ul className=' flex gap-10 '>
                                            <NavLink className='cursor-pointer hover:border-b-2 border-red-400 duration-75' to={i.to} >{i.name}</NavLink>
                                        </ul>
                                    </nav>
                                )
                            })
                        }

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
                                                <NavLink className='cursor-pointer hover:border-b-2 duration-75 border-red-500' to='/about'>AboutUs</NavLink>
                                                <NavLink className='cursor-pointer hover:border-b-2 duration-75 border-red-500' to='/blog'>Blogs</NavLink>
                                            </div>
                                        ) : null
                                    }
                                </div>

                                <NavLink className='cursor-pointer' to='/login'>LogIn</NavLink>
                            </div>
                        </>
                    </div>
                    <div onClick={Toggle} id="btn" className='pt-4 text-white lg:hidden'>
                        <RxHamburgerMenu className='' onClick={openSlider} size={30} />
                    </div>
                    {/*  */}
                </div>
                <div className=''>
                    <div style={{ zIndex: '20' }} className={`fixed ${slider ? 'fixed ' : 'hidden'} right-0 top-0 w-[230px] md:w-[300px] overflow-x-hidden lg:hidden h-full bg-white `}>
                        <div onClick={Toggle} className='text-black p-4 pt-5'>
                            <RxCross1 size={25} className='' onClick={openSlider} />
                        </div>
                        <div className='p-6'>
                            {
                                NavsMap2.map((i, ind) => {
                                    return (
                                        <ul key={ind.id} className=' p-2 text-black transition-all duration-100 delay-100 flex flex-col '>
                                            <NavLink to={i.to} className={i.className} >{i.name}</NavLink>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* <TextInImage {...HeaderProp} /> */}
            </div >
        </div>
    )
}

export default Header



