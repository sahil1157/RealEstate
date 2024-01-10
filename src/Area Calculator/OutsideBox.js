import React from 'react'
import Ropani from './System/Ropani'
import Bigha from './System/Bigha'
import Feet from './System/Feet'

const OutsideBox = () => {



  return (
    <div style={{ paddingInline: '4%' }} className='pt-12'>
      <div className='w-full box-border border-[1px] rounded-md border-slate-300 h-full'>
        <div className='p-9'>
          <Ropani />
          <Bigha />
          <Feet />
          
        </div>
      </div>
    </div>
  )
}

export default OutsideBox
