import React from 'react'

function Text({cardPara}) {
  return (
    <div className='pt-5'>
        <p className='text-base font-normal opacity-70 text-white'>{cardPara}</p>
    </div>
  )
}

export default Text