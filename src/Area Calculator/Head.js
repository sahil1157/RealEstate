import React from 'react'

const Head = () => {
    return (
        <div className='h-full'>
            <div className='w-full flex justify-center flex-wrap min-h-[300px] flex-col gap-6 bg-blue-900'>
                <h3 style={{ paddingInline: '4%' }} className='md:text-4xl text-3xl font-bold text-white'>Land Area Unit Converter</h3>
                <h3 style={{ paddingInline: '4%' }} className='md:text-lg text-md font-medium text-white'>Convert Land, Areas easily : Ropani, Bigha, Square Feet and Square meters all at once.</h3>
            </div>
        </div>
    )
}

export default Head
