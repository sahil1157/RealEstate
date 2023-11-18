import React from 'react'
import HousingProps from '../Props/HousingProps'

const HousingInfo = () => {

    const features = [
        {

            id: 1,
            RouteName: 'Budhanilkantha-area',
            name: 'Lavish bungalow on sale at Budhanilkantha, Buddha Colony ......ReadMore ',
            img: '/PropImg/Rectangle110.png',
            Date: 'October 23, 2023'
        },
        {
            id: 2,
            RouteName: 'dhapasimarga-area',
            name: 'Lavish House on sale at Tokha area, dhapasimarga colony....ReadMore',
            img: '/PropImg/Rectangle111.png',
            Date: 'November 23, 2023'
        },
        {
            id: 3,
            RouteName: 'machapokhari-area',
            name: 'Lavish House on sale at Gongabu area, Bgmall near machapokhari....ReadMore',
            img: '/PropImg/Rectangle 112.png',
            Date: 'October 23, 2025'
        },


    ]


    return (
        <div style={{ paddingInline: '8%' }} className='pt-0 flex md:grid-cols-1 items-center flex-col justify-center lg:justify-between flex-wrap lg:flex lg:flex-row'>
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
