import React from 'react'
import { SliderTwo_Card } from '../common/Helper'
const Features = () => {
    return (
        <div className='py-20 flex-wrap flex gap-5 justify-center px-3 group parent-card'>
            {SliderTwo_Card.map((card, index) => (
                <div key={index} className='w-[389px] h-[712px] border rounded-lg p-5 overflow-hidden hover:bg-[#FF5501] hover:text-white transition-all ease-linear duration-300 bg-[#fff]'>
                    <div>
                        <h2 className='font-bold lg:text-[22px] text-lg lg:mb-[11px] mb-2'>{card.headingTwo}</h2>
                        <h2 className='text-[#64748B] sub-heading lg:mb-5 mb-3 lg:text-base text-sm'>{card.paraTwo}</h2>
                        <div className='flex lg:mb-6 md:mb-5 mb-3 items-center'>
                            <p className='font-semibold xl:text-[56px] lg:text-4xl text-3xl'>{card.money}</p>
                            <p className='font-light text-[#4B5768] pl-2 month'>{card.month}</p>
                        </div>
                        <button className='max-w-[341px] text-[#FF5501] bg-white border-[#FF5501] border-[1px] lg:py-[11px] py-2 lg:text-base text-sm font-semibold rounded-[4px] w-full xl:mb-10 lg:mb-8 mb-6'>{card.getBtn}</button>
                        {card.items.map((item, itemIndex) => (
                            <div key={itemIndex} className='gap-4 space-y-2 text-base mb-2 flex'>
                                {item.img}   
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Features