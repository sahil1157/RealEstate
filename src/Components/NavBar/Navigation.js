
import React, { useEffect, useState } from 'react'
import logo from '../logos/estate-removebg-preview.png'
import img from '../images/Hero-img.png';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import TextOverImage from './TextOverImage';
import { NavLink, useNavigate } from 'react-router-dom'
import PropertyByLocation from '../PropertyType/PropertyByLocation'
import Location from '../PropertyType/Location'
import PopularImgs from '../Popular/PopularImgs'
import TextOverPopular from '../Popular/TextOverPopular'
import Featured from '../Featured/Featured'
import OurBlogs from '../Featured/OurBlogs'
import HousingInfo from '../Featured/HousingInfo'
import OurTeam from '../RealStateAgents/OurTeam'
import TeamsOrg from '../RealStateAgents/TeamsOrg'
import SeacrchThePrice from './SeacrchThePrice';
import BuyHome from '../TypesOfProperty/BuyHome';
import { NavsMap } from './1stHeaderArray';
import { NavsMap2 } from './NavMap';
import Build from '../Popular/Build';

const Navigation = ({ setQuery, minNum, setLoading, location, setLocation, setMinNum, query, loading, setLocs, result }) => {

  const Bodystyle = document.body.style
  const [isLocked, setisLocked] = useState(
    Bodystyle.overflowY === 'hidden'
  )

  useEffect(() => {
    Bodystyle.overflow = isLocked ? 'hidden' : 'auto'
  }, [isLocked, Bodystyle])

  const Toggle = () => {
    setisLocked(!isLocked)
    // return [isLocked, Toggle]
  }


  const navigate = useNavigate()

  const Homepage = () => {
    navigate('./')
  }

  const [slider, setSlider] = useState(false);
  const openSlider = () => {
    setSlider(!slider);
  };

  return (
    <div>
      {/*  */}
      <div className=' '>
        <img src={img} alt="" className='relative w-full h-[838px] object-cover' />
      </div>
      {/*  */}
      <div className='absolute left-0 right-3 top-0 pt-4 ' >
        <div className=' flex flex-row lg:justify-evenly gap-4 justify-between  '>
          <div className='flex'>
            <div className='pt-3'>
              <img onClick={Homepage} src={logo} alt="" className=' lg:cursor-pointer lg:w-[150px] md:w-[150px] lg:h-[65.54px] md:h-[55px] w-26 h-12' />
            </div>
          </div>
          <div className='pt-4 hidden lg:flex flex-row gap-10 text-white'>
            {
              NavsMap.map((i) => {
                return (
                  <nav>
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
            <nav>
              <ul className=' text-white hidden lg:flex space-x-12'>
                <NavLink className='cursor-pointer hover:border-b-2 border-red-400 duration-75' to='/about'>About</NavLink>
                <NavLink className='cursor-pointer hover:border-b-2 border-red-400 duration-75' to='/login'>Login</NavLink>
                {/* <CgProfile onClick={Redirect} className=' cursor-pointer w-[35px] h-[33px] rounded-full' /> */}
              </ul>
            </nav>
          </div>
          <div onClick={Toggle} className='pt-4 lg:cursor-pointer text-white lg:hidden'>
            <RxHamburgerMenu className='' onClick={openSlider} size={30} />
          </div>
          {/*  */}
        </div>
        <div className=''>
          <div style={{ zIndex: '20' }} className={`fixed ${slider ? 'fixed ease-in-out transform duration-500 h-full ' : 'hidden'} duration-200 right-0 overflow-x-hidden top-0 w-[230px] md:w-[300px] h-screen lg:hidden bg-white `}>
            <div onClick={Toggle} className=' p-4 pt-5'>
              <RxCross1 size={25} className=' cursor-pointer' onClick={openSlider} />
            </div>
            <div className='p-6'>
              {
                NavsMap2.map((i) => {
                  return (
                    <ul className=' p-2 text-black transition-all duration-100 delay-100 flex flex-col '>
                      <NavLink to={i.to} className={i.className} >{i.name}</NavLink>
                    </ul>
                  )
                })
              }
            </div>
          </div>
        </div>
        <TextOverImage/>
      </div >
      <SeacrchThePrice
        setLocation={setLocation}
        setMinNum={setMinNum}
        setQuery={setQuery}
        loading={loading}
        query={query}
        result={result}
        setLocs={setLocs}
        location={location}
        minNum={minNum}
      />
      <BuyHome />
      {/* <Property /> */}
      <PropertyByLocation />
      <Location />
      <PopularImgs />
      {/* <Buildings /> */}
      <Build />
      <TextOverPopular />
      <Featured />
      <OurBlogs />
      <HousingInfo />
      <OurTeam />
      <TeamsOrg />
    </div>

  )
}

export default Navigation

