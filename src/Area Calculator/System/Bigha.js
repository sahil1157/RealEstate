import React, { useContext } from 'react'
import Box from '../Box'
import { userContext } from '../../ContextAPI/CreateContext'

const Bigha = () => {
    const { getuserInputValues, userInpValues } = useContext(userContext)
    return (
        <>
            <div className='pt-10'>
                <h3 className='text-[25px]'>Bigha System</h3>
                <div className='flex flex-wrap pt-4 gap-7 lg:gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Bigha</p>
                        <Box userInpValues={userInpValues} getuserInputValues={getuserInputValues} identifier='Bigha' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Kattha</p>
                        <Box userInpValues={userInpValues} getuserInputValues={getuserInputValues} identifier='Kattha' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Dhur</p>
                        <Box userInpValues={userInpValues} getuserInputValues={getuserInputValues} identifier='Dhur' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bigha
