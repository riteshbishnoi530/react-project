import React, { useEffect, useState } from 'react'
const Parctise = () => {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        setTimeout(() =>{
            setCount(count+2)
        },1000)
    })
    
  return (
    <>
    <h2 className='text-center font-semibold text-2xl text-red-800 py-10'><span className='text-black'>Counter</span> {count}</h2>
    </>
  )
}

export default Parctise