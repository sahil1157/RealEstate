import React, { useState } from 'react'

const Right = () => {


    const [InputDatas, setInputDatas] = useState({
        name: '',
        PhNum: '',
        Email: '',
        Message: '',
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputDatas((prev) => {
            return { ...prev, [name]: value }
        })
    }


    const handleCLick = () => {
        alert('Your messages are printed at console')
        console.log(InputDatas)
    }

    const input = [
        {
            name1: 'Full Name',
            name2: 'name',
            placeholder: 'Enter your full name'
        },
        {
            name1: 'Phone Number',
            name2: 'PhNum',
            placeholder: 'Enter your phone number'
        },
        {
            name1: 'Email Address',
            name2: 'Email',
            placeholder: 'Enter your email address'
        },
        {
            name1: 'Your Message',
            name2: "Message",
            placeholder: 'Enter your message here'
        },
    ]

    return (
        <div className=' justify-center flex items-center'>
            <div className='w-full lg:w-[45vw] shadow-xl rounded-2xl border-t-2'>
                <div className='justify-center place-items-center gap-3 flex-col flex'>
                    {
                        input.map((i) => {
                            return (
                                <div>
                                    <form onChange={handleChange} className='p-5 flex flex-col gap-3'>
                                        <p className='text-lg font-Oldenburg text-[#736F6F]'>{i.name1}</p>
                                        <input type="text" name={i.name2} placeholder={i.placeholder} row className='text-gray-500 placeholder:flex-wrap text-lg font-semibold bg-[#C6D2E866] p-3 outline-none rounded-lg w-[70vw] md:w-[65vw] lg:w-[40vw] xl:w-[40vw] min-h-[6vh]' id="" />
                                    </form>
                                    {/* [64vw] */}
                                </div>
                            )
                        })
                    }
                </div>

                <div className='pt-5 flex justify-center place-items-center'>
                    <button onClick={handleCLick} className='w-48 h-12 mb-4 bg-[#013698] text-white text-lg text-center p-2 rounded-lg'>Submit Message</button>
                </div>
            </div>
        </div>
    )
}

export default Right
