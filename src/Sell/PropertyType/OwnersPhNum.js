import React from 'react'

const OwnersPhNum = ({handleClick}) => {
  return (
    <div>
        <div>

<div className='pt-3'>
    <form className='' action="">
        <p className=' text-xl font-bold text-[#736F6F]'>Owners Phone No.</p>
        <div className='pt-3'>
            <input onChange={handleClick} type='number' name='OwnersNum' placeholder='eg.98000000' className=' outline-none w-[70vw] md:w-[40vw] lg:w-[34vw] rounded-lg p-4 min-h-[57px] placeholder:text-[#736F6F] bg-[#C6D2E866]' />
        </div>

    </form>
</div>
</div>
    </div>
  )
}

export default OwnersPhNum
