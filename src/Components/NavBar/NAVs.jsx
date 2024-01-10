import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation.js'
import Buy from '../Pages/buy.js'
import Sell from '../Pages/Sell.js'
import HomeLoan from '../Pages/HomeLoan.js'
import Advertise from '../Pages/Advertise.js'
import About from '../Pages/About.js'
import Profile from '../Pages/Profile.js'
import DevelopmentProject from '../Pages/DevelopmentProject.js'
import PropertyNav from '../Pages/Property.js'
import ContactUs from '../Pages/ContactUs.js'
import Login from '../Pages/Login.js'
import Blog from '../Pages/Blogs.js'
import Saved from '../Pages/Saved.js'
import { dataAarray } from '../Popular/Datas.js'
import { useNavigate } from 'react-router-dom'
import LinkToBlog from '../../OurBlogs/LinkToBlogs/LinkToBlog.js'
import Area from '../Pages/Area.js'

const NAVs = () => {
  // const storeMinNum = JSON.parse(localStorage.getItem('minNum') || "[]")
  // const storeLocation = JSON.parse(localStorage.getItem('location') || "[]")
  const [items, setItems] = useState([...dataAarray])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState('')
  const [minNum, setMinNum] = useState('')
  const navigate = useNavigate()

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(20, 0)
  }, [pathname])

  const result = (e) => {
    setLoading(false)
    e.preventDefault()
    if (location.length === 0 || minNum.length === 0) return setLoading(true)
    else {
      const find = dataAarray.find(x => x.name === query)
      if (find) {
        const exists = dataAarray.filter(x => x.name === query)
        setItems([...exists])
        navigate('/buy')
      }
      else {
        setItems([...dataAarray])
        navigate('/buy')
      }
      setLocation('')
      setMinNum('')
    }
  }

  const scrollToContact = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  // useEffect(() => {
  //   window.localStorage.setItem('location', JSON.stringify(location))
  // }, [location])
  // useEffect(() => {
  //   window.localStorage.setItem('minNum', JSON.stringify(minNum))
  // }, [minNum])

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Navigation
          setLocation={setLocation}
          setMinNum={setMinNum}
          loading={loading}
          setQuery={setQuery}
          query={query}
          result={result}
          location={location}
          minNum={minNum}
          setLoading={setLoading}
        />} />


        <Route path='/buy' element={<Buy items={items} />} />
        <Route path='/property' element={<PropertyNav scrollToContact = {scrollToContact} />} />
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
        <Route path='/blogs/:id' element={<LinkToBlog />} />
        <Route path='/calculatearea' element={<Area />} />

      </Routes>
    </div>
  )
}

export default NAVs
