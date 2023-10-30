import React from 'react'

const UnderMap1 = ({handleClick}) => {

return (
    <div className='flex flex-wrap pt-3'>
        <div>
            <form className='' action="">
                <p className=' text-xl font-bold text-[#736F6F]'>Access Road</p>
                <div className='pt-3'>
                    <input type='number' onChange={handleClick} name='AccessRoad' placeholder='eg.12 feet' className=' outline-none w-[70vw] md:w-[40vw] lg:w-[34vw] rounded-lg p-4 min-h-[57px] placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                </div>

            </form>
        </div>
    </div>
)
}

export default UnderMap1
