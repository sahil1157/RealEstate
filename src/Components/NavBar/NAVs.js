import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
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

const NAVs = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />} />
        {/* <Route path='stp' element={<SeacrchThePrice />} /> */}
        <Route path='/buy' element={<Buy />} />
        <Route path='/property' element={<PropertyNav />} />
        <Route path='/sell' element={<Sell/>} />
        <Route path='/homeloan' element={<HomeLoan />} />
        <Route path='/advertise' element={<Advertise />} />
        <Route path='/development' element={<DevelopmentProject />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        
      </Routes>
    </>
  )
}

export default NAVs
