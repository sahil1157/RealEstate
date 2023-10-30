import React from 'react'

const Identify = ({ handleChange }) => {
    return (
        <div>
            <div className='pt-3'>
                <p className='text-xl font-bold text-[#736F6F]'>Did You Identify your Property?</p>
                <form action="">
                    <div className='flex pt-3 gap-10 flex-row'>
                        <div className='flex flex-row gap-3'>
                            <input
                                value='yes'
                                type="radio"
                                onChange={handleChange}
                                name='propertyIdentified'
                                className='cursor-pointer xs:w-5 w-7' />

                            <p className='text-lg font-normal'>yes</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <input
                                onChange={handleChange}
                                value='No'
                                name="propertyIdentified"
                                type="radio"
                                className='cursor-pointer xs:w-5 lg: w-7' />
                            <p className='text-lg font-normal'>No</p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Identify
