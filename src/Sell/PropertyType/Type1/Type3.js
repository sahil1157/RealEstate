import React from 'react'
import { FiUpload } from 'react-icons/fi'
const Type3 = ({ handleClick }) => {
  return (
    <div>
      <div className='pt-5'>
        <div className=' cursor-pointer '>
          <form className='' action="">
            <p className=' text-md font-bold text-[#736F6F]'>House Image (Optional)</p>

            <div className='pt-3 flex w-[120px] absolute rounded-lg p-4 shadow-lg border-[#736F6F] h-12'>
              <input alt='' onChange={handleClick} name='HouseImage' type='file' accept='image/jpeg, image/png, image/jpg,' className=' hidden outline-none absolute' />
              <p className='absolute cursor-pointer pt-1 ml-8'><FiUpload size={20} /></p>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Type3
