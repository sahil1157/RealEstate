import React from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const Arrows = ({prev , next}) => {

  console.log(prev)
  return (
    <div>
       <div className='md:px-40 px-2 absolute inset-0 justify-between flex items-center '>
            <button>
              <IoIosArrowDropleftCircle onClick={() => this.slider.slickPrev()} className='text-orange-700' size={35}/>
            </button>
            <button>
              <IoIosArrowDroprightCircle onClick={() => this.slider.slickNext()} className='text-orange-700' size={35} />
            </button>
          </div>
    </div>
  )
}

export default Arrows
