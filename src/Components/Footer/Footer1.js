import React from 'react'
import logo from '../logos/estate-removebg-preview.png';
import FooterLogos from './FooterLogos';
import CopyRight from './CopyRight';

const Footer1 = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (

        <div className='relative'>
            <div className='pt-12'>
                <div className='box-border w-full bg-[#00000012] min-h-[512px]'>
                    <div style={{ paddingInline: '8%' }} className=''>

                        <div className='pt-20 flex flex-col text-center items-center gap-4 justify-center lg:flex lg:flex-row lg:justify-between'>
                            <div className=' md:text-center md:items-center lg:items-start lg:text-start lg:justify-start'>
                                <p className='text-3xl font-semibold font-[Open sans]'>Subscribe To Our News Letter</p>
                                <p className='text-lg pt-5 text-[#00000080] from-neutral-600 font-[Open Sans]' >Want to know about new property Update?</p>
                                <form onClick={handleSubmit} className='flex-col md:flex-row items-center justify-center lg:items-start lg:text-start lg:justify-start text-center  lg:flex-row flex pt-7 '>
                                    <input type="email" className=' p-3 placeholder:font-[Oldenburg] rounded-md w-[60vw] md:rounded-none outline-none bg-[#C6D2E866] h-[66px] md:w-[338px] ' placeholder='email@gmal.com' />
                                    <div className='pt-7 md:pt-0'><button type='submit' className=' md:right-0 hover:bg-blue-950 w-[60vw] rounded-md md:rounded-none md:w-[160px]  min-h-[66px] text-white bg-[#013698] text-center text-lg text-[Oldenburg]'>Subscribe</button></div>

                                </form>
                            </div>
                            {/* logo */}
                            <div className=' place-items-center lg:justify-end flex flex-col pt-12'>
                                <img src={logo} alt="" className=' cursor-pointer lg:w-[150px] md:w-[150px] lg:h-[55.54px] md:h-[55px] w-26 h-12' />
                                <p className='text-xl pt-2 flex-wrap'>Legal privacy Policy and Terms of use</p>
                            </div>
                        </div>


                        {/* Many logos */}


                    </div>
                    <FooterLogos />
                    <CopyRight />
                </div>
            </div>

        </div>

    )
}

export default Footer1
