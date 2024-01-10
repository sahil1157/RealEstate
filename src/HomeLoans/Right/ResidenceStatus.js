import React from 'react'

const ResidenceStatus = ({ handleChange }) => {

    const Resident = [
        {
            inpName: 'residence',
            name: 'residenceStatus',
            name1: 'Residence Status',
            opt1: ' Nepali',
            opt2: ' Non-Nepali',
            value1: 'Nepali ',
            value2: 'Non-Nepali'

        },
        {
            inpName: 'salary',
            name: 'employmentType',
            name1: 'Employment Type',
            opt1: 'Salary',
            opt2: 'Self Employeed',
            value1: 'salary',
            value2: 'selfEmployed'
        },
    ]
    return (
        <div>
            <div className='pt-3'>
                {
                    Resident.map((i,id) => {
                        return (
                            <div key={id.id} className='pt-5 p-2'>
                                <label className='text-lg flex-wrap font-bold text-[#736F6F]'>{i.name1}</label>
                                <form action="">
                                    <div className='flex pt-3 gap-7'>
                                        <div className='flex gap-3'>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                value={i.value1}
                                                name={i.name}
                                                className='cursor-pointer w-7 ' />
                                            <p className='text-lg font-normal'>{i.opt1}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <input
                                                onChange={handleChange}
                                                value={i.value2}
                                                name={i.name}
                                                type="radio"
                                                className='cursor-pointer w-7' />
                                            <p className='text-lg font-normal'>{i.opt2}</p>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ResidenceStatus
