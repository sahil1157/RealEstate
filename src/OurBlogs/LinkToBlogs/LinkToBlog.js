import React from 'react'
import img from '../../Components/images/Blog.avif'
import Header from '../../BuyComponent/HeaderFile/Header'
import { useParams } from 'react-router-dom'
import { BlogComp } from '../LeftComp/BunglowArray'
import Link2 from './Link2'

const LinkToBlog = () => {

    const { id } = useParams()
    const dataId = BlogComp.find(x => x.id === Number(id))

    const HeaderProp = {
        img,
        name: dataId.name,
        date: dataId.date3
    }

    return (
        <>
            <Header {...HeaderProp} />
            <Link2 dataId={dataId} />
        </>
    )
}

export default LinkToBlog
