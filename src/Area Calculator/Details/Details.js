import React from 'react'

const Details = () => {
    return (
        <div style={{ paddingInline: '4%' }} className='pt-8'>
            <div className='w-full box-border border-[1px] flex-wrap rounded-md border-slate-300 h-full'>
                <div className='p-9'>
                    <h1 className='font-semibold text-2xl'>Area Converter Information</h1>
                    <p className='pt-3'>The following is a everyday units of calculation used in context of Nepal.</p>

                    <div className=' pt-2 lg:pt-0 flex flex-col gap-4'>
                        <ul className='pt-4 flex flex-col gap-5 lg:gap-1'>
                            <li>1 Bigha = 20 Kattha = 6772.63 m² = 72900 sq.ft. = 13.31 Ropani </li>
                            <li>1 Katha= 20 Dhur = 338.63 m² = 3645 sq.ft.</li>
                            <li>1 Dhur = 16.93 m² = 182.25 sq.ft.</li>
                            <li>1 Ropani = 16 Aana = 64 Paisa = 508.72 m² = 5476 sq.ft. = 256 Daam = 4 llka </li>
                            <li>1 Aana = 4 Paisa = 31.80 m² = 342.25 sq. ft. = 16 Daam</li>
                            <li>1 Paisa = 4 Daam = 7.95 m² = 85.56 sq. ft.</li>
                            <li>1 Daam = 1.99 m² = 21.39 sq. ft.</li>
                        </ul>
                        <p>
                            The units of measurement of area of land depends on the part of the country where they are being used, with the Bigha-Katha-Dhur measurements common in the Terai region while the Ropani-Aana measurements are common in hilly and mountainous regions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
