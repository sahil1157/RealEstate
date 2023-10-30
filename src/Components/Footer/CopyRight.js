import React from 'react'
import {BiCopyright} from 'react-icons/bi'

const CopyRight = () => {
    return (

        <div className='pt-5'>
            <div className='absolute divide-y w-full divide-[#00000026]'>
                <hr className='' />
                <div className='p-5 font-Oldenburg text-center text-lg w-full md:text-xl lg:text-2xl  text-[#00000080] gap-2 items-center justify-center flex-wrap flex flex-row'>
                   <p>Copyright</p>
                    <span><BiCopyright size={22}/></span>
                    <p>All Right Reserved. Developed by Sahil_B</p>
                </div>

            </div>
        </div>
    )
}

export default CopyRight
