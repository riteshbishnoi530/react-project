import React from 'react'

function Heading({HeroHeading}) {
  return (
    <div>
      <h2 className='text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-extrabold text-center text-white max-w-[817px] leading-[120%]'>{HeroHeading}</h2>
    </div>
  )
}

export default Heading