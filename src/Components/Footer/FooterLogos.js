import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'

const FooterLogos = () => {

    const FooterLogos =
        [
            {
                id: 1,
                logo: <FiPhoneCall />,
                name: '+977-9800000000',
                name2: '+977-9800000000',
                className: ' justify-center pt-2 text-4xl text-red-600 place-items-center flex flex-row'

            },
            {
                id: 2,
                logo: <CiLocationOn />,
                name: 'ShoraKhutte-Kathmandu',
                name2: 'Nepal',
                className: ' justify-center pt-2 text-5xl text-red-600 place-items-center flex flex-row'

            },
            {
                id: 3,
                logo: <AiOutlineMail />,
                name: 'basnetsahil39@gmail.com',
                name2: 'basnetsahil93@gmail.com',
                className: ' justify-center pt-2 text-4xl text-red-600 place-items-center flex flex-row'

            },
            {
                id: 4,
                logo: <AiOutlineClockCircle />,
                name: 'Sun-Fri 9:00am - 5:00am',
                name2: 'Sat 11:00am - 2:00pm ',
                className: ' justify-center pt-2 text-4xl text-red-600 place-items-center flex flex-row'

            },
        ]

    return (
        <>
            <div className=''>
                <div className=' grid grid-cols-2  gap-7 lg:flex lg:flex-row pt-12 justify-center items-center'>
                    {
                        FooterLogos && FooterLogos.map((items, index) => {
                            return (
                                <>
                                    <div key={index.id} className='box-border w-full max-h-[200px]'>
                                        <p className={items.className}>{items.logo}</p>
                                        <p className=' font-[Oldeburg] text-[#00000080] pt-2 flex-wrap text-center'>{items.name}</p>
                                        <p className=' font-[Oldeburg] text-[#00000080] text-center flex-wrap'>{items.name2}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FooterLogos
