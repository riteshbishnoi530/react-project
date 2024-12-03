import React from 'react'
import { TEXT_CARD } from '../common/Helper'

function UseEffectPractice() {
  return (
    <div>
    <div className='flex gap-5 p-5 justify-center flex-wrap'>
      {TEXT_CARD.map((data,i) =>(
        <div key={i} className='max-w-96 bg-slate-600 text-white p-5 rounded-xl'>
          <h2 className='text-5xl'>{data.heading}</h2>
          <p className='text-xl mt-3'>{data.para}</p>
        </div>
      ))}
    </div>
 
    </div>
  )
}

export default UseEffectPractice