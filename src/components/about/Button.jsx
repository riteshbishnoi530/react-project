import React from 'react'

function Button() {
  return (
    <div className='flex gap-7 mt-9'>
        <button className='text-[#43BBFF] text-base bg-white rounded-[58px] py-[14px] px-7 font-semibold'>Sign up</button>
        <button className='text-white border text-base bg-transparent rounded-[58px] py-[14px] px-7 font-semibold'>login</button>
    </div>
  )
}

export default Button