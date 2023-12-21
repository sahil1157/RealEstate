import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const ShowLess = ({ setLoad }) => {
    return (
        <div className='text-center flex  justify-center pt-12'>
            <button onClick={setLoad} className='outline-none text-blue-600 gap-3 flex flex-row font-Oldenburg '>
                Show Less <span><IoIosArrowUp className='text-2xl text-blue-600' /></span>
            </button>
        </div>
    )
}

export default ShowLess
