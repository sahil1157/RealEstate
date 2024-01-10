import React, { useContext } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../ContextAPI/CreateContext';

const Comp1 = () => {
  const { cart, handleDelete, setShow } = useContext(userContext)

  const navigate = useNavigate()

  const NavigateTo = () => {
    navigate('/contactus')
  }

  return (
    <div style={{ paddingInline: '10%' }} className=''>
      <div className='pt-9'>
        <p className='text-[2rem] font-Oldenburg'>My Favourites</p>
        {
          cart && cart.length === 0 ? (
            <div className='pt-6'>
              <div className='box-border w-full bg-green-100 flex items-center gap-3'>
                <p className='text-2xl text-green-800 font-Oldenburg p-3'>Nothing to show</p>
              </div>
            </div>
          ) : null
        }
      </div >
      <div className='pt-7'>
        <div>
          <button onClick={() => setShow(true)} className='w-[100px] text-sm flex flex-row items-center gap-[2px] justify-center relative h-[45px] rounded-lg bg-blue-600 text-white text-center'>
            <IoIosArrowRoundBack className='-ml-5' size={25} />
            GoBack

          </button>
        </div>
        <div className='pt-6 flex flex-col gap-6'>
          {
            cart && cart.map((i,ind) => {
              return (
                <div key={ind.id} className='box-border border-[2px] justify-start shadow-lg rounded-lg items-start md:items-center md:justify-between flex flex-col md:flex-row w-[100%]'>
                  <div className='flex flex-col md:flex-row items-start text-start md:items-center'>
                    <img src={i.img} alt="" className='md:w-[230px] rounded-lg w-screen object-fit bg-cover h-[200px]' />
                    <div className='md:p-3 p-2 flex flex-col'>
                      <div>
                        <p className='text-xl font-Oldenburg'>Name : {i.name} </p>
                        <p className='text-xl md:pt-2 font-Oldenburg'>Address : {i.loation} </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row p-[8px] md:flex-col gap-3 items-start justify-start mr-4'>
                    <button onClick={NavigateTo}
                      className='w-[100px] h-[40px] rounded-lg bg-blue-600 text-white text-center'>Contact</button>
                    <button onClick={() => handleDelete(i.id)} className='w-[100px] h-[40px] rounded-lg bg-red-600 text-white text-center'>Remove</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

export default Comp1

