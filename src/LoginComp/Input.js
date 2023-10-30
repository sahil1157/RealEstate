import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Input = ({name}) => {

    

    const formik = useFormik({
        initialValues: {
            name: '',
            Contact: ''

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Username must be of above 5 characters')
                .max(20, 'username must be below 20 characters')
                .required(`Name field is empty`),


            Contact: Yup.string()

                .max(10, 'Number cannot be above 10 digits')
                .min(10)
                .required('Invaild Phone Number'),

        }),
        onSubmit: (values) => {
            alert("Your infos are printed at console")
            console.log(values)
        }
    })

    return (
        <div className='pt-16 justify-center place-items-center flex'>
            <div className='box-border bg-[#C6D2E866] rounded-xl w-[70vw] lg:w-[30vw]'>
                <div className='justify-center place-items-center text-center'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <p className='text-2xl text-[#000000] pt-5 font-Oldenburg text-center'>{name}</p>
                        <hr className=' border-[1px] w-full border-[#0000004D]' />
                    </div>

                    <div className='pt-14 flex flex-col gap-8'>

                        <div>

                            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-7' action="">
                                <div>
                                    <input
                                        type='text'
                                        onChange={formik.handleChange}
                                        name='name'
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}
                                        autoComplete='off'
                                        placeholder='enter your name'
                                        className='bg-white font-Oldenburg p-2 rounded-lg outline-none placeholder:text-[#01369866] w-[70%] h-[70px] ' />
                                    {
                                        formik.errors.name && formik.touched.name ? <p className='flex-wrap pt-3 text-red-500 font-Oldenburg'>{formik.errors.name}</p> : ''
                                    }

                                </div>
                                <div>
                                    <input

                                        onChange={formik.handleChange}
                                        type='number'
                                        value={formik.values.Contact}
                                        name='Contact'
                                        autoComplete='off'
                                        onBlur={formik.handleBlur}
                                        placeholder='enter your Contact'
                                        className='bg-white font-Oldenburg p-2 rounded-lg outline-none placeholder:text-[#01369866] w-[70%] h-[70px] ' />

                                    {
                                        formik.errors.Contact && formik.touched.Contact ? <p className='flex-wrap text-red-500 pt-3 font-Oldenburg'>{formik.errors.Contact}</p> : ''
                                    }

                                </div>

                                <div className=''>
                                    <button type='submit' className='w-[50%] mb-8 hover:bg-[#20345a] text-white font-Oldenburg text-lg h-[60px] bg-[#013698] text-center p-3 rounded-lg'>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input

