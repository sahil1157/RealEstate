import React, { useContext } from 'react'
import Box from '../Box'
import { userContext } from '../../ContextAPI/CreateContext'

const Ropani = () => {
    const { userInpValues, getuserInputValues } = useContext(userContext)


    return (
        <>
            <div className='pt-'>
                <h3 className='text-[25px]'>Ropani System</h3>
                <div className='flex flex-wrap lg:flex-row pt-4 gap-7 lg:gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Ropani</p>
                        <Box userInpValues = {userInpValues} identifier='Ropani' getuserInputValues={getuserInputValues} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Aana</p>
                        <Box userInpValues = {userInpValues} identifier='Aana' getuserInputValues={getuserInputValues} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Paisa</p>
                        <Box userInpValues = {userInpValues} identifier='Paisa' getuserInputValues={getuserInputValues} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-700 text-lg'>Daam</p>
                        <Box userInpValues = {userInpValues} identifier="Daam" getuserInputValues={getuserInputValues} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ropani
