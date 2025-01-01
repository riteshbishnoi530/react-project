import React, { useEffect, useState } from 'react'
const Parctise = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (count < 10) {
                setCount(count + 2);
            } else {
                setCount(0);
            }
        }, 1000)
    })

    return (
        <div>
            <h3>counter</h3>
            <h3 className='text-center font-semibold text-2xl text-red-800 py-10'><span className='text-black'>Counter</span> {count}</h3>
        </div>
    )
}

export default Parctise