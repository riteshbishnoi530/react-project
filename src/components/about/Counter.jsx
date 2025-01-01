import React, { useState } from 'react'
import { CardsIcon, CounterIcon } from '../common/Icons';
import { COUNTER } from '../common/Helper';

const Counter = () => {

    const [value, setValue] = useState(0);
    const addValue = () => {
        setValue(value + 1);
    }
    const removeValue = () => {
        setValue(value - 1);
    }

    return (
        <>
            <div className='flex items-center max-w-[1140px] mx-auto justify-between px-5 max-lg:gap-5 max-sm:gap-3 max-lg:flex-col my-[78px] max-xl:my-20px max-lg:my-10 max-md:my-5'>
                <div>
                    <div className='flex gap-[97px] max-sm:gap-16 items-center justify-center bg-[#1EABF8] border-[5px] border-black max-w-[402px] py-9 max-sm:py-5 max-sm:px-10 px-[60px] rounded-[50px] max-sm:max-w-full'>
                        <button className='text-6xl' onClick={removeValue}>-</button>
                        <p className='text-6xl'>{value}</p>
                        <button className='text-6xl' onClick={addValue}>+</button>
                    </div>
                </div>
                <div className='flex flex-wrap gap-7 justify-center text-center'>
                {COUNTER.map((data, i) => (
                    <div key={i} className="max-w-[365px] py-10 w-[268px] h-[207px] relative" style={{ backgroundColor: data.bgColor }}>
                        <div className='absolute right-0 bottom-0'>
                        <CounterIcon />
                        </div>
                        <h2 className="text-[60px] font-semibold text-white leading-[150%]">
                            {data.heading}
                        </h2>
                        <p className="text-white text-[20px] opacity-80">{data.para}</p>
                    </div>
                ))}
                </div>
            </div>
        </>

    )
}

export default Counter