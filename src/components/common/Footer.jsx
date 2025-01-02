import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[78px] bg-black rounded-t-[30px] mt-10 '>
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-1/2 px-3">
            <h2 className='text-[orange] font-bold text-4xl pb-4 ff-lato'>Logo <span className='text-white'>Here</span></h2>
            <p className='text-white font-normal text-base ff-lato max-w-[431px] opacity-70 pb-[86px]'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
          </div>
          <div className="w-1/4 px-3">
            <h4 className='text-white pb-6 font-semibold text-[18px]'>About website</h4>
            <ul>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/">Home</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/About">About us</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/Testimonials">Testimonials</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/blank">Why Choose Us</a></li>
            </ul>
          </div>
          <div className="w-1/4 px-3">
            <h4 className='text-white pb-6 font-semibold text-[18px]'>Follow links</h4>
            <ul>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="https:www.instagram.com">Instagram</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal transition-all duration-500 hover:text-[orange]' href="https:www.twitter.com">Twitter</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal transition-all duration-500 hover:text-[orange]' href="https:www.discord.com">Discord</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal transition-all duration-500 hover:text-[orange]' href="https:www.youtube.com">You Tube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white opacity-40 "></div>
      <a className='font-normal text-base text-white opacity-70 text-center py-[24px] hover:opacity-[unset] transition-all duration-500' href="/">Copyright©2024 (Logo) All Rights Reserved.</a>
    </div>
  )
}

export default Footer
