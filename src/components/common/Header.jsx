import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const path = useLocation().pathname
  return (
    <>
      <div className={`min-h-screen start1920:h-800  ff-lato flex items-center justify-center ${path === "/" ? "bg-header rounded-b-[30px]" : "bg-[#01A4FFBD]"}`}>
        <div className="container mx-auto px-3">
          <h1 className='text-center text-white font-extrabold text-5xl md:text-6xl max-w-[768px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Sceleris</h1>
          <p className='text-center text-white opacity-70 text-base pt-5 font-medium ff-montserrat pb-10'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>
          <form className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${path === '/' ? "" : "hidden"}`}>
            <input type="text" placeholder='Search' className=' rounded-2xl ps-14 py-4 w-full max-w-[405px] outline-0 pe-5' />
            <button className='bg-[#ff722c] py-[14px] px-[27px] text-white rounded-[13px] font-semibold text-base text-center hover:bg-white hover:text-black transition-all duration-500 hover:rounded-none'>Start</button>
          </form>
          <div className={`flex justify-center gap-[28px]  ${path === '/about' ? "" : "hidden"}`}>
            <button className='border-[1px] border-white rounded-[58px] py-[14px] px-[24px] font-semibold text-base text-center text-white hover:text-[#43BBFF] hover:bg-white transition-all duration-500 ease-linear'>Sign up</button>
            <button className='border-[1px] border-white rounded-[58px] py-[14px] px-[24px] font-semibold text-base text-center text-white hover:text-[#43BBFF] hover:bg-white transition-all duration-500 ease-linear'>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
