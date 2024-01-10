import React, { useContext } from 'react'
import Box from '../Box'
import { userContext } from '../../ContextAPI/CreateContext'

const Feet = () => {
    const { getuserInputValues,userInpValues } = useContext(userContext)
    return (
        <>
            <div className='pt-10'>
                <h3 className='text-[25px]'>Feet/Meter</h3>
                <div className='flex flex-wrap pt-4 gap-7 lg:gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Sq. Feet</p>
                        <Box userInpValues = {userInpValues} getuserInputValues={getuserInputValues} identifier='SquareFeet' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Sq. Meter</p>
                        <Box userInpValues = {userInpValues} getuserInputValues={getuserInputValues} identifier='SquareMeter' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feet
