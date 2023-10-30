import React from 'react'
import Input from './Input'

const JoinUs = ({ firstText, secondText, thirdText},Adlogin ) => {
    console.log(Adlogin)
    
    const login = {
        name :'Login'
    }

    return (
        <div style={{ paddingInline: '5%' }} className='pt-12 lg:justify-between justify-center gap-6 place-items-center flex flex-col xl:flex-row lg:flex-row'>
            <div className='flex items-center'>
                <div className='flex flex-col text-center'>
                    <p className='text-5xl text-[#013698] font-semibold font-Oldenburg '>{firstText}</p>
                    <span className='text-lg flex-wrap text-[#013698B2] pt-3'>{secondText}</span>
                    <span className='text-lg flex-wrap text-[#013698B2]'>{thirdText}</span>
                </div>
            </div>
            <div className='justify-center place-items-center flex'>
                <Input {...login} {...Adlogin} />
            </div>
        </div>
    )
}

export default JoinUs
