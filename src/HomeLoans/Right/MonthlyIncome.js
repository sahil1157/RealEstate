import React from 'react'

const MonthlyIncome = ({ handleChange }) => {
    return (
        <div>
            <div className='pt-6 p-3'>
                <form className='' action="">
                    <p className=' text-xl font-bold text-[#736F6F]'>Monthly Income</p>
                    <div className='pt-3 relative '>
                        <input type='text'
                        onChange={handleChange}
                            name='monthlyIncome'
                            placeholder='eg.2000000'
                            className=' outline-none relative text-base w-full md:w-[38vw] rounded-lg p-4 min-h-[57px]  placeholder:text-[#736F6F] bg-[#C6D2E866]' />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default MonthlyIncome
