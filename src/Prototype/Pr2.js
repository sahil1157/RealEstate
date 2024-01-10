import React, { useState } from 'react'
import UnderMap from '../Sell/PropertyType/Type1/UnderMap'
import UnderMap1 from '../Sell/PropertyType/Type1/UnderMap1'
import Blacktopped from '../Sell/PropertyType/Type1/Blacktopped'
import OwnersPhNum from '../Sell/PropertyType/OwnersPhNum'
import OwnerDesc from '../Sell/PropertyType/Type1/OwnersDesc'
import Type2 from '../Sell/PropertyType/Type1/Type2'
import Parking from '../Sell/PropertyType/Type1/Parking'
import Advertise from '../Sell/PropertyType/Type1/Advertise'
import OwnersName from '../Sell/PropertyType/Type1/OwnersName'
import Type3 from '../Sell/PropertyType/Type1/Type3'

const Pr2 = () => {

    const [Details, setDetails] = useState({

        PropertyType: '',
        PropertyFace: '',
        Province: '',
        City: '',
        Address: '',
        AreaCovered: '',
        Price: '',
        CarpetArea: '',
        OwnersNum: '',
        Advertise: '',
        Parking: '',
        OwnerDesc: '',
        OwnerName: '',
        AccessRoad: '',
        BedRoom: '',
        BathRoom: '',
        FloorRoom: '',
        HouseImage: '',
        Negotiable: '',
        BlackTopped: '',

    })


    const handleClick = (e) => {
        const { name, value } = e.target
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    const Submit = () => {
        console.log(Details)
    }

    const SellMap = [
        {
            name: 'Property Type',
            placeholder: 'Land',
            type: '',
            InpName: 'PropertyType'

        },
        {
            name: 'Property Face',
            placeholder: 'South',
            type: '',
            InpName: 'PropertyFace'

        },
        {
            name: 'Province',
            placeholder: 'eg.Bagmati',
            type: '',
            InpName: 'Province'

        },
        {
            name: 'City',
            placeholder: 'eg.Kathmandu',
            type: '',
            InpName: 'City'

        },
        {
            name: 'Address',
            placeholder: 'eg.Shorakhutte',
            type: '',
            InpName: 'Address'

        },
        {
            name: 'Area Covered',
            placeholder: 'eg.7 Aana',
            type: '',
            InpName: 'AreaCovered'

        },
        {
            name: 'Price',
            placeholder: 'eg. Rs 2000000',
            type: 'number',
            InpName: 'Price'

        },
        {
            name: 'Carpet Area ',
            placeholder: 'eg.5000 Sq Feet',
            type: '',
            InpName: 'CarpetArea'

        },
        // {
        //     HeadName: 'Negotiable',
        //     name2: 'Negotiable',
        //     type2: 'radio',
        //     InpName2: 'Negotiable',
        //     className: 'xs:w-5 lg:w-8'
        // },

    ]


    return (
        <div className=' pt-20' style={{ paddingInline: '8%' }}>
            <div className='gap-8 flex flex-col flex-wrap md:grid md:grid-cols-2 xl:grid-cols-2 xl:grid lg:grid lg:grid-cols-2'>

                {
                    SellMap.map((i,ind) => {
                        return (
                            <div key={ind.id} className=''>
                                <form onSubmit={handleSubmit} className='' action="">
                                    <p className=' text-xl font-bold text-[#736F6F]'>{i.name}</p>
                                    <div className='pt-3'>
                                        <input
                                            type={i.type}
                                            name={i.InpName}
                                            placeholder={i.placeholder}
                                            onChange={handleClick}
                                            className=' outline-none w-[70vw] md:w-[40vw] lg:w-[34vw] rounded-lg p-4 min-h-[57px] placeholder:text-[#736F6F] bg-[#C6D2E866]' />

                                    </div>
                                </form>
                            </div>
                        )
                    })
                }
                <UnderMap handleClick={handleClick} />
                <UnderMap1 handleClick={handleClick} />
                <OwnersName handleClick={handleClick} />
                <Blacktopped handleClick={handleClick} />
                <OwnersPhNum handleClick={handleClick} />
                <OwnerDesc handleClick={handleClick} />
                <Type2 handleClick={handleClick} />
                <Parking handleClick={handleClick} />
                <Advertise handleClick={handleClick} />
                <Type3 handleClick={handleClick} />

            </div>


            <div className='justify-center flex items-center pt-16 text-center'>
                <div className=''>
                    <button onClick={Submit} className='text-xl font-semibold text-white hover:bg-[#374e76] bg-[#013698] rounded-xl text-center p-4 min-w-[244px] max-h-[60px]'>
                        Submit
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Pr2
