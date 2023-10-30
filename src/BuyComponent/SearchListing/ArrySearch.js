import React from 'react'
import Ind from '../../Components/PropertyContainer/Ind'

const ArrySearch = ({ dataArray }) => {

    const NewProperties =

        [
            { name: 'New Properties' },
            { name: 'Old Properties' },
            { name: 'Latest Properties' },
            { name: 'Default' },
        ]

    return (
        <div className=''>

            <div className='flex xl:flow-row p-5 pt-8 lg:pt-0 justify-center lg:justify-end'>

                <label className='text-xl p-3' for="Propeties">Sort By:</label>
                <select className=' p-3 cursor-pointer  rounded-md'>
                    {
                        NewProperties.map((i) => {
                            return (
                                <option className='p-3 text-md cursor-pointer hover:bg-white text-black  bg-[#D9D9D966]'>{i.name}</option>

                            )
                        })
                    }


                </select>
            </div>

            <div className=' pt- grid xl:grid-cols-2 gap-9 flex-wrap md:flex lg:flex sm:grid-cols-2 justify-center lg:justify-end md:flex-wrap'>

                {
                    dataArray.map((i) => {
                        return (
                            <Ind item={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ArrySearch
