import React from 'react'

const Box = ({ userInpValues, identifier, getuserInputValues }) => {
  ;

  return (
    <div>
      <div>
        <input value={userInpValues[identifier]} name={identifier} onChange={(e) => getuserInputValues(e, identifier)} type="number" className='lg:w-[300px] md:w-[340px] w-[80vw] outline-none p-3 max-h-12 box-border border-[1px] border-slate-300' />
      </div>
    </div>
  )
}

export default Box
