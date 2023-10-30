import React from 'react'
import PopularProps from '../Props/PopularProps'

const PopularImgs = () => {

    const data = {
        naam: "Popular",
        Residences: 'Our Popular Residences',
        Explore: 'Explore All',
    }
    return (
        <>
            <div style={{paddingInline:'8%'}} className='pt-8'>
                <PopularProps {...data} />
            </div>
        </>

    )
}

export default PopularImgs
