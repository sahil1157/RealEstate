import '../../App.css'
import LowerComponent from './LowerAddress'
import UpperComp from '../Contacts/UpperComp'
import { dataAarray } from '../../Components/Popular/Datas'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { userContext } from '../../ContextAPI/CreateContext'

const Address = () => {
const {contactToUser,scrollToContact} = useContext(userContext)

    const [toggle, setToggle] = useState(false)
    const toggleOnClick = () => {
        setToggle(!toggle)
    }

    let { itemName } = useParams();

    const dataItems = dataAarray.find((p) => p.id === Number(itemName))

    return (
        <div style={{ paddingInline: '7%' }} className='md:grid flex flex-col md:grid-cols-2 pt-12 gap-10'>
            <div className=''>
                <div className='min-h-[266px] rounded-lg max-w-[709px] box-border border-[1px] border-[#0000001F]'>
                    <div className=' flex flex-col '>
                        <div className=' px-8 flex-wrap flex flex-row justify-between gap-5 p-3 font-bold text-lg text-black'>
                            {
                                dataItems ? (<p>{dataItems && dataItems.name}</p>) : 'Buildings'
                            }
                            <p>Lavish</p>
                            <p>For Sale</p>
                            <p>New</p>
                            <p>Old</p>
                        </div>
                        <div className='pt-3 px-8 p-3'>
                            <h1 className='text-lg font-bold text-[#736F6F]'>Address</h1>
                            {
                                dataItems ? (<p className='font-Oldenburg pt-2 text-md'>{dataItems.loation}</p>) : <p className='font-Oldenburg pt-2 text-md'>laliguras shanti tole (house no. 74), Pokhara,
                                    Nepal</p>
                            }
                            <p className='text-[#736F6F] font-bold pt-7'>Price</p>
                            <div className='sm:flex sm:flex-col md:flex -mt-2 md:flex-row gap-4'>
                                {
                                    dataItems ? (<p className='text-2xl font-Oldenburg pt-2'>{dataItems && dataItems.price}</p>) : <p className='text-2xl font-Oldenburg pt-2'>4 crores 24 lakh</p>
                                }

                                <div className='pt-1'>
                                    <button className='max-w-[100px] p-2 rounded-lg h-[43px] text-white hover:bg-black bg-[#013698]'>{
                                        dataItems ? (dataItems && dataItems.bargain) : 'Negotiable'
                                    }
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <LowerComponent toggle={toggle} />
                </div>
            </div>
            <div>
                <UpperComp />
            </div>
        </div>
    )
}

export default Address