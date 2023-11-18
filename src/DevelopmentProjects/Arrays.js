import React, { useState } from 'react'
import TextOver from '../OurBlogs/LeftComp/TextOver'
import ReactPaginate from 'react-paginate'
import { BlogComp } from './Dataas'

const Arrays = () => {

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
                                        <div className='max-w-[545px] flex items-center border-[1px] cursor-pointer rounded-b-2xl shadow-lg min-h-[15vh]'>
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
