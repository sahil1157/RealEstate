import React from 'react'
import HousingProps from '../Props/HousingProps'

const HousingInfo = () => {

    const features = [
        {
            img: '/PropImg/Rectangle110.png',
            Date: 'October 23, 2023'
        },
        {
            img: '/PropImg/Rectangle111.png',
            Date: 'November 23, 2023'
        },
        {
            img: '/PropImg/Rectangle 112.png',
            Date: 'October 23, 2025'
        },


    ]


    return (
        <div style={{ paddingInline: '8%' }} className='pt-6 flex md:grid-cols-1 items-center flex-col justify-center lg:justify-between flex-wrap lg:flex lg:flex-row'>
            {
                features.map((i) => {
                    return (
                        <div className='pt-12' >
                            <HousingProps items={i} />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default HousingInfo
