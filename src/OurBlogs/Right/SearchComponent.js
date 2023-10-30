import React from 'react'
import { BsSearch } from 'react-icons/bs'
import MidComp from './MidComp'

const SearchComponent = () => {
  return (
    <div>
      <div className='lg:w-full w-full min-h-[100px] lg:min-h-[137px] border-2 rounded-xl items-center flex bg-[#C6D2E866]'>
        <div className='relative items-center flex mx-auto'>
          <div className='items-center flex mx-auto'>
            <BsSearch size={25} className='right-0 mr-3 cursor-pointer text-gray-600 absolute' />
          </div>
          <form action="">
            <input type="search" placeholder='search keyword' autoComplete='off' className='lg:w-[25vw] w-[85vw] md:w-[73vw] outline-none placeholder:text-[#01369866] placeholder:font-Oldenburg p-7 placeholder:text-[20px] h-[63px] rounded-xl text-xl border-[1px] shadow-md' />
          </form>
        </div>
      </div>

      <div>
        <MidComp />
      </div>
    </div>
  )
}

export default SearchComponent
