import React from 'react'

const Advertise = ({handleClick}) => {
  return (
    <div>
          <div className='pt-5'>
                    <p className='text-xl flex-wrap font-bold text-[#736F6F]'>Advertise your property?(Might cost additional charges.)</p>
                    <form action="">
                        <div className='flex pt-3 gap-10 flex-row'>
                            <div className='flex flex-row gap-3'>
                                <input onChange={handleClick} type="radio" name='Advertise' className='cursor-pointer xs:w-5 w-7' />
                                <p className='text-lg font-normal'>yes</p>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <input onChange={handleClick} type="radio" name='Advertise' className='cursor-pointer xs:w-5 lg: w-7' />
                                <p className='text-lg font-normal'>No</p>
                            </div>

                        </div>
                    </form>
                </div>
    </div>
  )
}

export default Advertise
