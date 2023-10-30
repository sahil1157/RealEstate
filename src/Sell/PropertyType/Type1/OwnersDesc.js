import React from 'react'

const OwnerDesc = ({handleClick}) => {
  return (
    <div>
        <div className='pt-2'>
                    <form className='' action="">
                        <p className=' text-xl font-bold text-[#736F6F]'>Owners Description</p>
                        <div className='pt-3'>
                            <input onChange={handleClick} type='text' name='OwnerDesc' placeholder='Write a short description about your House' className=' outline-none w-[70vw] md:w-[40vw] lg:w-[34vw]  rounded-lg p-4 min-h-[70px] placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                        </div>

                    </form>

                </div>
    </div>
  )
}

export default OwnerDesc
