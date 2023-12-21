import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ArrySearch = ({ oldSorting, defaultSorting, newSorting, latestProperty }) => {
    const [showItems, setShowItems] = useState(false)

    const NewProperties =

        [
            { name: 'New Properties', click: newSorting },
            { name: 'Old Properties', click: oldSorting },
            { name: 'Latest Properties', click: latestProperty },
            { name: 'Default', click: defaultSorting }
        ]

    return (
        <div className=' relative z-50'>

            <div className='flex relative xl:flex-row p-2 pt-9 lg:pt-4 justify-start'>

                {/* <label className='text-xl p-3' for="Propeties">Sort By:</label>
                <select className=' p-3 cursor-pointer  rounded-md'>
                    {
                        NewProperties.map((i) => {
                            return (
                                <option className='p-3 text-md cursor-pointer hover:bg-white text-black  bg-[#D9D9D966]'>{i.name}</option>

                            )
                        })
                    }


                </select> */}
                <button className='flex outline-none cursor-default lg:cursor-pointer p-3 bg-none w-44 lg:w-40 rounded-xl duration-300 h-12 border-[2px] lg:border-gray-400 active:border-black items-center flex-row gap-3 justify-between' onClick={() => setShowItems((i) => !i)}>Sort By
                    {
                        showItems ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />
                    }
                </button>

                {
                    showItems && (
                        <div className='flex rounded-xl pt-2 h-fit bg-white gap-3 absolute text-start top-[83px] lg:top-16 flex-col'>
                            {
                                NewProperties.map((i, ind) => {
                                    return (
                                        <ul key={ind.id}>
                                            <button onClick={i.click} className='w-44 cursor-default md:cursor-pointer lg:w-40 border-[2px] duration-75 hover:bg-slate-400 hover:text-white border-white rounded-xl lg:active:bg-indigo-700 text-base text-black p-1 h-14' key={ind.id}>{i.name}</button>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ArrySearch
