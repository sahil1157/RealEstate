import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import TextOver from '../OurBlogs/LeftComp/TextOver'
import ReactPaginate from 'react-paginate'

const Arrays = () => {
    const BlogComp = [
        {
            name: 'Lavish bunglow on Sale at Dhapasi',
            location: 'This residential house is located at Buddha Colony in Budhanilkantha, Kathmandu, near Park Village Resort.',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 22,
            date2: 'Jan',

        },
        {
            name: 'Lavish bunglow on Sale at Tokha',
            location: 'This residential house is located at Buddha Colony in Budhanilkantha, Kathmandu, near Park Village Resort.',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 23,
            date2: 'Fev',
        },

        {
            name: 'Lavish bunglow on Sale at pokhara',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 24,
            date2: 'Mar',
        },
        {
            name: 'Lavish bunglow on Sale at Jhapa',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 25,
            date2: 'Arp',
        },

        {
            name: 'Lavish bunglow on Sale at Biratnagar',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'Lalpurja Nepal',
            icon: <CgProfile size={36} />,
            date: 26,
            date2: 'May',
        },
        {
            name: 'Lavish bunglow on Sale at Sunsari',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 27,
            date2: 'Jun',
        },

        {
            name: 'Lavish bunglow on Sale at Birtamod',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 28,
            date2: 'Jul',
        },
        {
            name: 'Lavish bunglow on Sale at Bardiya',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 29,
            date2: 'Aug',
        },
        {
            name: 'Lavish bunglow on Sale at Banke',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 30,
            date2: 'Sept',
        },
        {
            name: 'Lavish bunglow on Sale at Nepalgunj',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 31,
            date2: 'Oct',
        },
        {
            name: 'Lavish bunglow on Sale at Buspark',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 1,
            date2: 'Nov',
        },
        {
            name: 'Lavish bunglow on Sale at Kalanki',
            location: 'This residential house is located at Dhapasi Marga in Srijansil-Tol, Kathmandu, near Deurali janata',
            CompName: 'RealEstate Nepal',
            icon: <CgProfile size={36} />,
            date: 2,
            date2: 'Dec',
        },
    ]

    const [pageNum, setPageNum] = useState(0)
    const perPage = 4
    const perVisit = pageNum * perPage
    const pageCount = Math.ceil(BlogComp.length / perPage)
    const onChange = ({ selected }) => {
        setPageNum(selected)
    }

    return (
        <div className='pt-12 '>
            <div className='md:grid md:grid-cols-2 flex flex-wrap justify-center place-items-center gap-10'>
                {
                    BlogComp.slice(perVisit, perPage + perVisit).map((i) => {
                        return (
                            <div>
                                <div className='relative cursor-pointer max-w-[645px] min-h-[315px] rounded-t-2xl bg-[#D9D9D9]'>
                                    <TextOver {...i} />
                                </div>
                                <div className=''>
                                    <div className='flex flex-col gap-3'>
                                        <div className='max-w-[545px] flex items-center border-[1px] cursor-pointer rounded-b-2xl shadow-lg min-h-[25vh]'>
                                            <div className='px-11 p-5 mt-14 sm:mt-8 md:mt-14 lg:mt-16 font-Oldenburg'>
                                                <span className='text-2xl'>{i.name}</span>
                                                <p className='text-lg text-[#00000080]'>{i.location}</p>

                                                <div className='pt-6 flex flex-row gap-4 font-Oldenburg text-[#00000080]'>
                                                    <span>{i.icon}</span>
                                                    <span className='text-xl pt-1'>{i.CompName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='justify-center md:flex flex-col items-center flex'>
                <ReactPaginate
                    previousLabel='<'
                    nextLabel='>'
                    pageCount={pageCount}
                    onPageChange={onChange}
                    containerClassName={'container'}
                    previousLinkClassName={'previousBttns'}
                    nextLinkClassName={'nextBttns'}
                    disabledClassName={'disabledBttn'}
                    activeClassName={'paginationActive'}

                />
            </div>
        </div>
    )
}

export default Arrays
