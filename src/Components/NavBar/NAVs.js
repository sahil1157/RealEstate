import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation.js'
import Buy from '../Pages/buy'
import Sell from '../Pages/Sell'
import HomeLoan from '../Pages/HomeLoan'
import Advertise from '../Pages/Advertise'
import About from '../Pages/About'
import Profile from '../Pages/Profile'
import DevelopmentProject from '../Pages/DevelopmentProject'
import PropertyNav from '../Pages/Property'
import ContactUs from '../Pages/ContactUs'
import Login from '../Pages/Login'
import Blog from '../Pages/Blogs'
import Saved from '../Pages/Saved.js'

const NAVs = () => {

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(20, 0)
  }, [pathname])
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Navigation />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/property' element={<PropertyNav />} />
        <Route path='/property/:itemName' element={<PropertyNav />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/homeloan' element={<HomeLoan />} />
        <Route path='/advertise' element={<Advertise />} />
        <Route path='/development' element={<DevelopmentProject />} />
        <Route path='/development/:developmentId' element={<DevelopmentProject />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/saved' element={<Saved />} />

      </Routes>
    </div>
  )
}

export default NAVs
