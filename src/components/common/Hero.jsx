import { useLocation } from 'react-router-dom';
import React from 'react'
import Heading from './Heading'
import Text from '../common/Text'
import Input from '../home/Input'
import Button from '../about/Button'
const HeroSec = () => {
    const location = useLocation().pathname;
    return (
        <div className=''>
            <div>
                <div className={`${location === "/"
                    ? "flex items-center px-4 justify-center bg-red-500 min-h-screen flex-col rounded-b-[30px] overflow-hidden"
                    : "flex items-center px-4 justify-center bg-[#01A4FFBD] min-h-screen flex-col"
                    }`}>
                    <Heading HeroHeading='Lorem ipsum dolor sit amet consectetur. Sceleris' />
                    <Text cardPara='Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.' />
                    {location == "/" ? <Input /> : <Button />}
                </div>
            </div>
        </div>
    )
}

export default HeroSec
