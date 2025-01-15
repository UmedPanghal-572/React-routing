import React, { useState } from 'react'

const SimpleCounter = () => {
    const [value, setValue] = useState(0)
    const handlerAdd = () => {
        setValue(value + 1)
    }
    // const handlerNegative = () => {
    //     setValue(value - 1)
    // }


    return (
        <div className='flex items-center justify-center py-20'>
            <div className='container max-w-[1140px] mx-auto px-3'>
                <div className='flex flex-row flex-wrap -mx-3'>
                    <div className='w-full md:w-1/2 px-3'>
                        <div className='flex justify-between bg-[#1EABF8] border-[5px] border-black rounded-[50px] p-10 md:p-[59px]  max-w-[402px]'>
                            <button className="font-normal text-6xl" onClick={() => setValue(value - 1)}>-</button>
                            <p className='font-normal text-6xl text-black'>{value}</p>
                            <button className='font-normal text-6xl' onClick={ handlerAdd }>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleCounter
