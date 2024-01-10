import React, { useContext, useEffect, useState } from 'react'
import { HiMiniPhone } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import image from '../../Components/images/unknown.jpg'
import { userContext } from '../../ContextAPI/CreateContext';

const ContactUser = () => {

  const { contactToUser, dataItems } = useContext(userContext)
  const [inputDatas, setInputDatas] = useState('')
  const { userName } = dataItems


  const handleChange = (e) => {
    const { name, value } = e.target
    setInputDatas(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{paddingInline:'7%'}} ref={contactToUser} className='pt-12'>
      <div className='shadow-xl border-[1px] rounded-xl w-full box-border min-h-[450px]'>
        <div className='p-8 flex flex-col gap-6'>
          <div className='flex  flex-col md:flex-row gap-4'>
            <div className='w-24 h-22 rounded-xl border-[1px] box-border'>
              <img src={image} className='rounded-xl w-full h-full' alt="" />
            </div>
            <div className=' font-oldenburg flex flex-col gap-2'>
              <p className='text-2xl'>{userName}</p>

              <p className='flex flex-row gap-2'>
                <HiMiniPhone size={22} />
                98xxxxxxxx
              </p>

              <p className='flex flex-row gap-2' >
                <IoIosMail className='' size={22} />
                {userName}@gmail.com
              </p>

            </div>
          </div>
          <hr className='border-dashed mt-1 border-[1px]' />
          <div className=''>
            <p className='text-2xl text-slate-800'>Contact For Inquiry</p>
          </div>
          <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full'>
              <div className='flex flex-col gap-2'>
                <p className='text-slate-600'>Full Name</p>
                <input onChange={handleChange} type="text" name='userName' placeholder='Enter your Name' className='outline-none w-full h-10 p-4 md:max-w-[70%] border-slate-300 box-border border-[1px]' />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-slate-600'>Email Address</p>
                <input onChange={handleChange} type="email" name='email' placeholder='Enter your email address' className='outline-none w-full h-10 p-4 md:max-w-[70%] border-slate-300 box-border border-[1px]' />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-slate-600'>Phone Number</p>
                <input onChange={handleChange} type="number" name='phNumber' placeholder='Enter your Phone Number' className='outline-none w-full h-10 p-4 md:max-w-[70%] border-slate-300 box-border border-[1px]' />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-slate-600'>Message</p>
                <textarea onChange={handleChange} type="number" name='messages' placeholder='Hi, i am intrested in this House sale at ' className='outline-none placeholder:text-slate-600 border-[1px] border-slate-300 box-border w-full h-24 p-4 md:max-w-[70%]'></textarea>
                <div className='flex pt-1 flex-row gap-2'>
                  <input name='firstBuy' onChange={handleChange} type="checkbox" className='w-5' />
                  <p className='text-md text-black'>Are you a First Time Buyer?</p>
                </div>
              </div>

              <div>
                <button type='submit' className='md:w-40 w-full h-11 hover:bg-blue-950 bg-blue-900 text-white'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUser
