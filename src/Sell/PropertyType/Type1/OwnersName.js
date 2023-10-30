import React from 'react'

const OwnersName = ({handleClick}) => {
  return (
    <div>
        <div>
                    <div className=''>
                        <form className='' action="">
                            <p className=' text-xl font-bold text-[#736F6F]'>Owners Name</p>
                            <div className='pt-3'>
                                <input onChange={handleClick} type='text' name='OwnerName' placeholder='eg.Sahil Basnet' className=' outline-none w-[70vw] md:w-[40vw] lg:w-[34vw] rounded-lg p-4 min-h-[57px] placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                            </div>

                        </form>
                    </div>
                </div>
    </div>
  )
}

export default OwnersName
