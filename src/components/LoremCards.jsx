import React from 'react'
import { CARDS_LIST } from '../utils/helper'
import icon from '../assets/images/svg/lorem-icon.svg'


const Hero = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="container max-w-[1140px]">

                <h2 className='text-black text-center font-semibold text-[40px] pt-[135px]'>Lorem ipsum</h2>
                <div className='py-10 flex gap-6 '>
                    {
                        CARDS_LIST.map((obj, index) => (
                            <div key={index} className='rounded-[22px] bg-[#fff3ed] py-5 px-[30px]'>
                                <img src={icon} alt="icon" />
                                <h2 className='pb-4 text-2xl font-semibold text-black pt-8'>{obj.title}</h2>
                                <p className='font-light text-base pb-2'>{obj.description}</p>
                                <a className='text-red-500 ' href="/">Read more</a>
                                <ul className='list-disc pl-5 pt-4'>
                                    {obj.CONTENT.map((contentItem, contentIndex) => (
                                        <li key={contentIndex} className='font-light text-base'>
                                             {contentItem.LIST_ITEMS}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero
