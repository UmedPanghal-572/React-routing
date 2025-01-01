import React from 'react'

const Header = () => {
  return (
    <div className='bg-header min-h-screen ff-lato flex items-center justify-center'>
      <div className="container">
        <h1 className='text-center text-white font-extrabold text-6xl max-w-[768px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Sceleris</h1>
        <p className='text-center text-white opacity-70 text-base pt-5 font-medium ff-montserrat pb-10'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>
        <form className='flex items-center justify-center gap-3'>
         
          <input type="text" placeholder='Search' className='rounded-2xl ps-14 py-4 w-full max-w-[405px] outline-0 pe-5' />
          <button className='bg-[#ff722c] py-[14px] px-[27px] text-white rounded-[13px] font-semibold text-base text-center '>Start</button>
        </form>
      </div>
    </div>
  )
}

export default Header
