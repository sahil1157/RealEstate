import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpperComp = () => {


    const Navigate = useNavigate()

    const handleClick = () => {
      Navigate('/ContactUs')
    }


    const names = [
        {
            name: 'Drainage',

        },
        {
            name: 'Parking',

        },
        {
            name: 'Balcony',

        },
        {
            name: 'Modular Kicthen',

        },
        {
            name: 'Solar Water',

        },



    ]
    return (
        <div className='lg:mr-12'>
            <div className=' min-h-[102px] border-[1px] rounded-lg border-[#0000001F] min-w-[40vw] '>

                <div className='p-3 flex-wrap flex lg:flex-row justify-between gap-6 '>
                    <div className='relative box-border bg-[#E8C6C6] w-[82px] table h-[78px] rounded-full'>
                        <p className=' text-xl font-bold justify-center table-cell align-middle text-center '>LP</p>
                    </div>


                    <div className='text-center'>
                        <p className='font-bold text-xl text-black'>RealEstate Nepal</p>
                        <p className='pt-1 text-[#00000066] font-semibold text-lg'>98xxxxxxxx</p>
                    </div>

                    <div className='pt-3'>
                        <button onClick={handleClick} className='w-[128px] hover:bg-black text-lg font-Oldenburg rounded-lg h-[50px] bg-[#013698] text-white p-2'>Contact</button>
                    </div>


                </div>
            </div>

            <div className='pt-12'>
                <div className='max-w-[568px] border-[1px] border-[#0000001F] rounded-lg min-h-[228px]'>
                    <p className='text-xl font-bold p-3'>Amenties</p>
                    <div className='p-2 flex-wrap'>
                        {
                            names.map((i) => {
                                return (
                                    <ul>
                                        <li className=' p-2 text-lg font-Oldenburg text-[#00000066] font-semibold'>{i.name}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>



            <div className='pt-8'>
                <div className='flex-wrap p-4 max-w-[568px] min-h-[265px] border-[1px] rounded-lg border-[#0000001F]'>

                    <p className=' text-xl font-bold'>Description</p>
                    <p className='pt-3 text-lg font-Oldenburg'>This Precious looking 4.5 storied house is on sale at Pokhara Laliguras Tole with serene mountain view. This house is located near Amarsingh Chowk. This property covers an area of 7 Anna with total build up area of 5000 Sq.ft. This property faces towards south in direction with the12 way towards </p>

                </div>
            </div>


        </div>
    )
}

export default UpperComp
