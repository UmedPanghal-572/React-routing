import React from 'react'
import Description from './common/Description'
import icon from '../assets/images/svg/lorem-icon.svg'
import { CARDS_LIST } from '../utils/helper'

const Lorem = () => {
    return (
        <>
            <div>
                <Description text={"Lorem ipsum dolor sit amet consectetur. Amet varius in enim."} myClass={"text-white text-3xl"} />
            </div>
            <div className='flex items-center justify-center mt-10'>
                <div className="container max-w-[1140px] mx-3">
                    <h2 className='text-black text-center font-semibold text-[40px] '>Lorem ipsum</h2>
                    <div className='py-10 flex gap-6  flex-row  '>
                        {
                            CARDS_LIST.map((obj, index) => (
                                <div key={index} className={`rounded-[22px] bg-[#fff3ed] py-5 px-[30px] ${index === 0 ? "mb-40" : index === 1 ? 'mt-24 , mb-20' : index === 2 ? 'mt-40' : ''}`}>
                                    <img src={icon} alt="icon" />
                                    <h2 className='pb-4 text-2xl font-semibold text-black pt-8'>{obj.title}</h2>
                                    <p className='font-light text-base pb-2'>{obj.description}
                                        <a className='text-red-500 ms-1' href="/">Read more</a></p>
                                    <ul className='list-disc pl-5 pt-4'>
                                        {obj.content.map((value, i) => (
                                            <li key={i} className='font-light text-base'>
                                                {value.list_items}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <Description text={"Ideal for individuals who who need advanced features and tools for client work."} myClass={'text-red-500 text-4xl'} />
                </div>
            </div>
        </>
    )
}

export default Lorem
