import React, { useState } from 'react'
import { dataAarray } from '../../Components/Popular/Datas'
import Ind from '../../Components/PropertyContainer/Ind'
import ArrySearch from './ArrySearch'

const SearchItem = ({items}) => {

    const [sorting, setSorting] = useState([...items])

    let prevDatas = [...items]
    const oldSorting = () => {
        const result1 = prevDatas.sort((a, b) => {
            let dateA = new Date(a.date)
            let dateB = new Date(b.date)
            if (dateA > dateB) return 1;
            else if (dateA < dateB) return -1;
            return 0;
        })
        setSorting(result1)
    }
    const defaultSorting = () => {
        setSorting(prevDatas)
    }

    const newSorting = () => {
        const result2 = prevDatas.sort((a, b) => {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date)
            if (dateA < dateB) return 1
            else if (dateA > dateB) return -1
            return 0
        })
        setSorting(result2)
    }
    const latestProperty = () => {
        const result = prevDatas.sort((a, b) => {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date)
            if (dateA > dateB) return -1
            else if (dateA < dateB) return 1
            return 0
        })
        setSorting(result)
    }

    const [details, setDetails] = useState({
        name: '',
        city: '',
        type: '',
        arearange: '',
        maxarea: '',
        minprice: '',
        maxprice: '',

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const CLicked = () => {
        console.log(details)
    }



    return (

        <div style={{ paddingInline: '4%' }} className=' pt-8 md:gap-6 flex-col md:flex-row justify-center flex lg:justify-between '>
            <div className='justify-center flex text-center md:justify-start pt-5 '>
                <div>
                    <div className='rounded-lg box-border md:min-w-[420px] min-w-full h-fit bg-[#D9D9D966]'>
                        <form onSubmit={handleSubmit} action="" className='md:grid-cols-1 grid-cols-1 justify-center text-center gap-7 grid p-10'>
                            <input type="text" name='name' placeholder=' Provience eg.Bagmati,Gandaki' onChange={handleChange} className=' rounded-lg text-lg placeholder:flex-wrap outline-none p-5 bg-white md:w-full w-[70vw]  min-h-[74px]' />

                            <input type="text" name='city' placeholder='City eg.Kathmandu,Lalitpur' onChange={handleChange} className=' rounded-lg text-lg placeholder:flex-wrap bg-white outline-none p-5 md:w-full w-[70vw] min-h-[74px]' />
                            <input type="text" name='type' placeholder=' Property Type' className=' rounded-lg text-lg bg-white outline-none p-5 md:w-full w-[70vw] min-h-[74px]' />

                            <input type="text" name='arearange' placeholder='Min Area Range' onChange={handleChange} className='rounded-lg text-lg placeholder:flex-wrap bg-white outline-none p-5 md:w-full w-[70vw] min-h-[74px]' />
                            <input type="text" name='maxarea' placeholder=' Max Area Range' onChange={handleChange} className=' rounded-lg text-lg placeholder:flex-wrap bg-white outline-none p-5 md:w-full w-[70vw]  min-h-[74px]' />

                            <input type="text" name='minprice' placeholder='Min Price Range' onChange={handleChange} className='text-lg rounded-lg  placeholder:flex-wrap bg-white outline-none p-5 md:w-full w-[70vw] min-h-[74px]' />
                            <input type="text" name='maxprice' placeholder=' Min Price Range' onChange={handleChange} className=' text-lg rounded-lg placeholder:flex-wrap bg-white outline-none p-5 md:w-full w-[70vw]  min-h-[74px]' />

                            <input type="text" name='maxprice' placeholder='Min Price Range' onChange={handleChange} className='text-lg rounded-lg placeholder:flex-wrap bg-white outline-none p-5 md:w-full w-[70vw] min-h-[74px]' />



                        </form>
                    </div>
                    <div className='pt-8'>
                        <button onClick={CLicked} className=' rounded-lg text-[26px] font-semibold hover:bg-[#1c2d4d] font-sans text-white bg-[#013698] w-full min-h-[82px] text-center items-center '>Filter</button>
                    </div>
                </div>
            </div>
            {/* <SearchProp /> */}
            {/* <Buildings/> */}
            <div className=''>
                <ArrySearch oldSorting={oldSorting} defaultSorting={defaultSorting} newSorting={newSorting} latestProperty={latestProperty} />
                <div className='xs:flex pt-2 duration-300 transform xs:flex-wrap justify-center mx-0 grid sm:grid-cols-2 md:grid-cols-1 ms:grid lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 gap-7'>
                    {
                        sorting && sorting.map((i, ind) => {
                            return (
                                <Ind key={ind.id} item={i} />
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default SearchItem



