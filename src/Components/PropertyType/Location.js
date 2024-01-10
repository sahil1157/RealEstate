import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'

const Location = () => {


  const [location] = useState([

    {
      img: <CiLocationOn />,
      description: 'Kathmandu',
      className: 'text-3xl pt-2 text-center text-[#013698] font-Oldenburg'
    },
    {
      img: <CiLocationOn />,
      description: 'Bhaktapur',
      className: 'text-3xl pt-2 text-center text-[#013698] font-Oldenburg'
    },
    {
      img: <CiLocationOn />,
      description: 'Lalitpur',
      className: 'text-3xl pt-2 text-center text-[#013698] font-Oldenburg'
    },
    {
      img: <CiLocationOn />,
      description: 'Pokhara',
      className: 'text-3xl pt-2 text-center text-[#013698] font-Oldenburg'
    },

  ])
  return (
    <>

      <div style={{ paddingInline: "8%" }} className=' pt-12 '>
        <div className=' flex flex-col mx-0 items-center justify-center  lg:flex md:grid md:grid-cols-2  lg:flex-row gap-9'>
          {
            location.map((i,ind) => {
              return (
                <div key={ind.id} className='box-border border-2 md:border-0 rounded-md shadow-lg md:cursor-pointer md:shadow-md w-full h-[35vh] md:h-52 flex flex-col justify-center items-center'>

                  <span className='flex justify-center text-[#00000080] lg:text-[110px] md:text-[90px] text-[60px]'>{i.img}</span>
                  <h1 className={i.className}>{i.description}</h1>

                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Location
