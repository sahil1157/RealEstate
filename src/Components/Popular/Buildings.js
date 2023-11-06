import React from 'react'
import PropertyContainer from '../PropertyContainer/PropertyContainer'
import { dataAarray } from './Datas'

const Buildings = () => {


    return (
        <div style={{ paddingInline: '8%' }} className=''>
            <PropertyContainer dataArray={dataAarray} />
            {/* <PropSlider {...dataAarray} /> */}

        </div>
    )
}

export default Buildings
