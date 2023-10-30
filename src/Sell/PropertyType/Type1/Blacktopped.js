import React from 'react'

const Blacktopped = ({handleClick}) => {
  return (
    <div>
       <div className='pt-3'>
            <p className='text-xl font-bold text-[#736F6F]'>Black Topped</p>
            <form action="">
                <div className='flex pt-6 gap-10 flex-row'>
                    <div className='flex flex-row gap-3'>
                        <input onChange={handleClick} type="radio" name='BlackTopped' className='cursor-pointer xs:w-5 w-7' />
                        <p className='text-lg font-normal'>yes</p>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <input onChange={handleClick} type="radio" name='BlackTopped' className='cursor-pointer xs:w-5 lg: w-7' />
                        <p className='text-lg font-normal'>No</p>
                    </div>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Blacktopped
