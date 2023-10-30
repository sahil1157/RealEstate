import React from 'react'
import { useNavigate } from 'react-router-dom'

const TextOverImage = () => {


  const Navigate = useNavigate()
  const Contact = () => {
    Navigate('/contactus')
  }

  return (
    <div style={{ paddingInline: '18%' }} className=' lg:pt-32 pt-24  md:pt-32 '>
      <div className='text-white'>
        <h1 className='text-2xl md:text-3xl  lg:text-5xl text font-[Open sans]'>Find Real State </h1>
        <h1 className='text-2xl pt-2 md:text-3xl  lg:text-5xl text font-[Open sans]'>That Suits You.</h1>
        <p className='text-sm pt-3 font-Oldenburg w-[200] md:w-[500px] text-gray-400'>RealEstate Nepal Pvt. Ltd. Is one of the trustworthy and renowned Realestate company based in Nepal. featuring property from 1 Crore to 100 Crore.</p>
      </div>
      <div className='md:pt-8 lg:pt-11 pt-8 text-white'>
        <button onClick={Contact} className='h-10 w-28 font-[Oldenburg] animate-bounce bg-blue-800 hover:bg-white hover:text-black mx-0 text-center rounded-md '>ContactUs</button>
      </div>
      <div className='md:flex text-white flex flex-col md:flex-row md:gap-10 pt-4'>
        <div className='pt-5 flex flex-row md:gap-8 gap-5 '>
          <div>
            <span className='md:text-2xl font-[Oldenburg] lg:text-2xl text-xl'>1200+</span>
            <h3 className='md:text-md lg:text-md font-[Oldenburg] text-sm text-gray-300'>Premium RealEstate</h3>
          </div>
          <div>
            <span className='md:text-2xl font-[Oldenburg] lg:text-2xl text-xl'>1200+</span>
            <h3 className='md:text-md lg:text-md  font-[Oldenburg] text-sm text-gray-300'>Happy Costumers</h3>
          </div>
        </div>

        <div className='pt-5'>
          <span className='md:text-2xl font-[Oldenburg] lg:text-2xl text-xl'>1200+</span>
          <h3 className='md:text-md lg:text-md text-sm font-[Oldenburg] text-gray-300'>Wealthy Feedbacks</h3>
        </div>
      </div>
      {/*  */}

      {/*  */}
    </div>
  )
}

export default TextOverImage
