import React, { useState } from 'react'

const LowerComp = () => {

    const [init, setInit] = useState({
        email: ''
    })

  

    const handleChange = (e) => {
        const { name, value } = e.target
        setInit ((prev) =>{
            return {...prev, [name] : value}
        })
        console.log(init)
    }
    return (
        <div className=''>
            <div className='sm:w-[70vw] lg:max-w-[456px] min-h-[257px] rounded-xl p-8 bg-[#C6D2E866]'>
                <div className='flex flex-col gap-8'>
                    <div className=' flex flex-col gap-3'>
                        <span className='lg:text-5xl flex-wrap flex text-4xl lg:hidden font-Oldenburg'>News Letter</span>
                        <span className='lg:text-5xl flex-wrap hidden lg:flex text-4xl font-Oldenburg'>NewsLetter</span>
                        <hr className='divide-y border-[1px] border-[#0000004D]' />
                    </div>
                    <div className=''>
                        <form  action="">
                            <input name='email' onChange={handleChange} type="text" placeholder='Enter Email' className='lg:max-w-[394px] font-Oldenburg text-xl outline-none placeholder:text-[#01369866] p-6 rounded-lg w-full lg:min-h-[68px]' />
                        </form>
                    </div>
                    <div>
                        <button className='lg:w-full w-full h-14 border-[1px] border-[#3961ab4d] bg-[#C6D2E866] text-xl text-[#013698CC] hover:text-white hover:bg-[#11264ecc] rounded-xl font-Oldenburg font-normal'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowerComp
