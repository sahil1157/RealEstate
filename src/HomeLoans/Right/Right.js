import React, { useState } from 'react'
import Identify from './Identify'
import TypeOf from './TypeOf'
import ResidenceStatus from './ResidenceStatus'
import MonthlyIncome from './MonthlyIncome'
const Right = () => {

    const [initialValues, setInitialValues] = useState({
        name: '',
        phNum: '',
        email: '',
        propertyIdentified: '',
        purchaseORconstruction: '',
        Province: '',
        city: '',
        residenceStatus: '',
        employmentType: '',
        monthlyIncome: ''

    })



    const [InputArray] = useState([
        {
            name: 'Full Name',
            name1: 'name',
            placeholder: 'eg: Sahil Bohora'
        },
        {
            name: 'Phone Number',
            name1: 'phNum',
            placeholder: 'eg: 98-0000000'
        },
        {
            name: 'Email Address',
            name1: 'email',
            placeholder: 'eg: emailaddress@email.com'
        },
    ])


    const handleChange = (e) => {
        const { value, name } = e.target;

        setInitialValues((prev) => {
            return { ...prev, [name]: value }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        alert("Your infos are printed at console.. take a look...")
        console.log(initialValues)
    }



    return (
        <div className=''>
            <div className=''>

                <div className='flex flex-col'>
                    {
                        InputArray.map((i) => {
                            return (
                                <div className=''>
                                    <form onSubmit={handleSubmit} className='flex md:flex-col' action="">
                                        <div className='flex pt-3 m-2 flex-col gap-2'>
                                            <span className='text-lg font-bold text-[#736F6F]'>{i.name}</span>
                                            <input
                                                onChange={handleChange}
                                                autoComplete='off'
                                                name={i.name1}
                                                placeholder={i.placeholder}
                                                className=' text-black outline-none w-[75vw] md:w-full rounded-lg p-4 min-h-[57px] text-lg font-semibold placeholder:text-[#736F6F] bg-[#C6D2E866]' />

                                        </div>
                                    </form>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='p-2'>
                    <Identify handleChange={handleChange} />
                    <TypeOf handleChange={handleChange} />
                    <ResidenceStatus handleChange={handleChange} />
                    <MonthlyIncome handleChange={handleChange} />
                </div>
            </div>

            <div className='justify-center flex items-center pt-10 text-center'>
                <div className=''>
                    <button onClick={handleClick} className='text-xl font-semibold text-white hover:bg-[#374e76] bg-[#013698] rounded-xl text-center p-4 min-w-[244px] max-h-[60px]'>
                        Submit
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Right
