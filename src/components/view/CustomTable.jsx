import React from 'react'
import { COMPETITION_LIST } from '../../utils/helper'


const CustomTable = () => {
    return (
        <>
            <div className='bg-[#191423] flex items-center justify-center h-screen py-5 px-4'>
                <div className='container'>
                    <div className='flex items-center max-lg:flex-wrap justify-center gap-10'>

                        <div className="bg-[#026070] max-w-[580px] flex items-center justify-center py-[52px] rounded-xl max-lg:overflow-hidden w-full pe-5 ps-4 max-sm:p-5">
                            <div className="flex items-center w-full max-w-[554px] max-lg:max-w-[554px] max-lg:!overflow-x-auto ">
                                <div>
                                    <div className="flex gap-2">
                                        <div className="text-center bg-transparent w-[95px] "></div>
                                        <div className="text-center bg-white font-semibold text-xs w-[95px] pt-6 pb-5 rounded-t-lg ms-[23px]">Rift</div>
                                        <div className="text-center bg-white font-semibold text-xs w-[95px] pt-6 pb-5 rounded-t-lg">Taxscouts</div>
                                        <div className="text-center bg-white font-semibold text-xs w-[95px] pt-6 pb-5 rounded-t-lg">Coconut</div>
                                        <div className="text-center font-semibold bg-lightGreen text-xs w-[95px] pt-6 pb-5 rounded-t-lg bg-[#56E3CB]">Pie</div>
                                    </div>
                                    <div className="!overflow-x-auto max-w-full">
                                        <div className="max-lg:max-w-[554px]">
                                            {COMPETITION_LIST.map((obj, i) => (
                                                <div key={i} className="flex gap-2  border-t border-black">
                                                    <p className={` font-semibold  text-white text-sm border-black py-4 w-[95px] ${i === 0 ? 'me-[23px] text-sm' : i === 1 ? 'me-[23px] text-sm' : 'me-[23px] text-sm'}`}>{obj.brand}</p>
                                                    <p className={`text-center ${i === 5 ? 'rounded-b-lg text-[8px] px-[15px] font-normal' : ''} py-4 flex bg-white items-center justify-center w-[95px]`}>{obj.rift}</p>
                                                    <p className={`text-center ${i === 5 ? 'rounded-b-lg text-[8px] px-[15px] font-normal' : ''} py-4 bg-white flex items-center justify-center w-[95px]`}>{obj.taxscout}</p>
                                                    <p className={`text-center ${i === 5 ? 'rounded-b-lg text-[8px] px-[15px] font-normal' : ''} py-4 bg-white flex items-center justify-center w-[95px]`}>{obj.coconut}</p>
                                                    <p className={`text-center ${i === 5 ? 'rounded-b-lg text-[8px] px-[15px] font-normal' : ''} bg-lightGreen flex items-center justify-center bg-[#56E3CB] w-[95px]`}>{obj.pie}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomTable