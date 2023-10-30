import React from 'react'

const Parking = ({handleClick}) => {
  return (
    <div>
      <div className=''>
                    <p className='text-xl font-bold text-[#736F6F]'>Parking</p>
                    <form action="">
                        <div className='flex pt-3 gap-10 flex-row'>
                            <div className='flex flex-row gap-3'>
                                <input onChange={handleClick} type="radio" name='Parking' className='cursor-pointer xs:w-5 w-7' />
                                <p className='text-lg font-normal'>yes</p>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <input onChange={handleClick} name="Parking" type="radio" className='cursor-pointer xs:w-5 lg: w-7' />
                                <p className='text-lg font-normal'>No</p>
                            </div>

                        </div>
                    </form>
                </div>
    </div>
  )
}

export default Parking
