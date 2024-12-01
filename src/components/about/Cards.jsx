import React from 'react'
import { CardsIcon } from '../common/Icons'
import { CARDS } from "../common/Helper";

function Cards() {
  return (
    <div>
       <p className='text-center text-[40px] font-semibold mb-10 max-md:mb-8 max-sm:mb-5'>Lorem ipsum</p>
      <div className='flex gap-6 justify-center flex-wrap px-4'>
        {CARDS.map((data, i) => (
          <div key={i} className="max-w-[365px] bg-[#CFEEFF] rounded-3xl py-5 px-7">
            <CardsIcon />
            <h2 className="mt-7 text-2xl font-semibold text-[#101010] leading-[150%]">
              {data.heading}
            </h2>
            <p className="mt-4 text-[#101010]">{data.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards