
import React from 'react'

const Type2 = ({handleClick}) => {
    return (
        <div className=' pt- '>
            <div className='flex-wrap flex lg:flex-row gap-10 mx-0'>
                <div>
                    <form className='' action="">
                        <p className=' text-md font-bold text-[#736F6F]'>BedRoom</p>
                        <div className='pt-4'>
                            <input type='number' onChange={handleClick} name='BedRoom' placeholder='10' className=' outline-none w-[140px] sm:w-[80px] rounded-lg p-4 h-10 placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                        </div>
                    </form>
                </div>
                <div>
                    <form className='' action="">
                        <p className=' text-md font-bold text-[#736F6F]'>BathRoom</p>
                        <div className='pt-4'>
                            <input type='number' onChange={handleClick} name='BathRoom' placeholder='9' className=' outline-none w-[140px] sm:w-[80px] rounded-lg p-4 h-10 placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                        </div>
                    </form>
                </div>
                <div>
                    <form className='' action="">
                        <p className=' text-md font-bold text-[#736F6F]'>FloorRoom</p>
                        <div className='pt-4'>
                            <input type='number' onChange={handleClick} name='FloorRoom' placeholder='6' className=' outline-none w-[140px] sm:w-[80px] rounded-lg p-4 h-10 placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                        </div>
                    </form>
                </div>

                {/*  */}
                
                {/*  */}
            </div> 
        </div>
    )

}

export default Type2

