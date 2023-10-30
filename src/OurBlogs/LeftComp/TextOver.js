import React from 'react'


const TextOver = (i) => {
    return (
        <div className='absolute left-11 -bottom-12 '>
            <div className='lg:w-36 w-28 min-h-[100px] rounded-2xl bg-[#013698] text-white items-center flex lg:min-h-[125px] '>
                <div className='text-center flex flex-col mx-auto gap-0 '>
                    <p className=' font-Oldenburg text-[32px]'>{i.date}</p>
                    <p className=' font-Oldenburg text-[32px] font-semibold'>{i.date2}</p>
                </div>
            </div>
        </div>
    )
}

export default TextOver
