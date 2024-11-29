import React from 'react'
import { SearchIcon } from '../common/Icons'

function Input() {
    return (
        <div className='pt-10'>
            <div className='flex bg-white rounded-2xl p-1 pl-3 items-center'>
                <SearchIcon/>
                <input className='ml-5 outline-none' type="text" placeholder='Search'/>
                <button className='py-[14px] px-7 bg-[#FF5501] rounded-xl'>Start</button> 
            </div>
        </div>
    )
}

export default Input