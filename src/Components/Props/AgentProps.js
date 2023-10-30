import React from 'react'

const AgentProps = ({items}) => {
  return (
    <div>
      <div className=''>
          <div className='bg-white relative box-border min-h-[320px] max-w-[294px] border-b-2 rounded-lg shadow-lg'>
            <img src={items.Img} className='  w-full h-[200px] rounded-lg object-cover cursor-pointer' alt="" />
            <div className=' h-[56px] absolute -mt-14 rounded-lg min-w-full flex items-center text-center justify-center bg-[#00000080]'>
              <p className='text-xl font-Oldenburg text-white'>{items.PhNum}</p>
            </div>

            <div className='items-center text-center p-4 justify-center'>
              <h1 className='text-[3vh] text-black font-Oldenburg'>{items.Name}</h1>
              <p className='text-[#000000ba]'>{items.Role}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AgentProps
