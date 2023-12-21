import React from 'react'
import PropertyContainer from '../PropertyContainer/PropertyContainer'
import { dataAarray } from './Datas'

const Buildings = ({load,toShow}) => {


    return (
        <div style={{ paddingInline: '8%' }} className=''>
            <PropertyContainer dataArray={dataAarray} toShow = {toShow} load={load} />
        </div>
    )
}

export default Buildings
