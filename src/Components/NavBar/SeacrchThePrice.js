import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import '../../App.css'

const SeacrchThePrice = ({ setQuery, minNum, location, setLocation, setMinNum, loading, result }) => {

    const [opt] = useState([
        {
            name: 'Default',
            value: 'Default'
        },
        {
            name: 'Building',
            value: 'Building'
        },
        {
            name: 'apartment',
            value: 'apartment'
        },
        {
            name: 'Bunglow',
            value: 'Bunglow'
        },
    ])

    return (
        <>
            <div>
                <div style={{ paddingInline: '18%' }} className=' md:-translate-y-20 justify-center mx-auto flex -translate-y-48 lg:-translate-y-20'>
                    <div className='items-center justify-center mx-0'>
                        <div className='  box-border shadow-lg bg-white p-8 w-[75vw] md:w-full rounded-md min-h-[150px] '>
                            <div className=' flex flex-col font-Oldenburg  '>
                                <div className=''>
                                    <h3 className='lg:text-xl text-md md:text-lg lg:text-start  text-center flex-wrap font-Oldenburg font-meduim p-4 lg:px-14 '>Search The Property Your are Looking For</h3>
                                </div>
                                <form onSubmit={result} className=' flex md:flex-row flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-6 pt-3'>

                                    <div className='relative flex whitespace-nowrap items-center'>
                                        <IoLocationSharp size={25} className='text-[#00000080] absolute right-0 lg:right-3' />
                                        <input onChange={(e) => setLocation(e.target.value)} placeholder='Location' type="text" className={`outline-none pr-10 rounded-md w-[45vw] p-3 md:w-[12vw]  lg:w-[10vw] h-10 ${loading && location.length === 0 ? 'border-red-600 ease-in duration-500 ' : ''} border-[2px]`} />
                                    </div>
                                    <div>
                                        <select onChange={(e) => setQuery(e.target.value)} className='cursor-pointer bg-white outline-none border-gray-200 text-gray-400 pl-3 rounded-md w-[45vw] md:w-[12vw] lg:w-[10vw] h-10 border-[2px]' name="select" id="">
                                            {
                                                opt.map((x, i) => {
                                                    return (
                                                        <>
                                                            <option value={x.value} key={i.id} className=' text-md cursor-pointer border-none hover:bg-slate-400 font-sans'>
                                                                {x.name}
                                                            </option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className='relative flex items-center'>
                                        <MdOutlineCurrencyRupee size={25} className='right-0 lg:right-3 absolute text-[#00000080]' />
                                        <input onChange={(e) => setMinNum(e.target.value)} required min='200000' placeholder='min' type="number" className={`outline-none pr-10 rounded-md w-[45vw] text-[13px] placeholder:text-lg p-3 md:w-[12vw] lg:w-[10vw] h-10 ${loading && minNum.length === 0 ? 'border-red-600 ease-in duration-500 ' : ''} border-[2px]`} />
                                    </div>
                                    <div className=''>

                                        {
                                            location.length === 0 || minNum.length === 0 ? (
                                                <button type='submit' onClick={result} className=' outline-none bg-blue-700 cursor-pointer text-white hover:text-white h-10 text-center w-[45vw] md:w-[12vw] lg:w-[10vw] rounded-md'>Search</button>
                                            ) : (

                                                <button type='submit' className=' outline-none bg-blue-700 text-white hover:bg-black hover:text-white h-10 text-center w-[45vw] md:w-[12vw] lg:w-[10vw] rounded-md'>
                                                    search</button>
                                            )
                                        }

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default SeacrchThePrice

