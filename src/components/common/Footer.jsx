import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const path = useLocation().pathname
  return (
    <div className={`flex flex-col items-center justify-center pt-10 md:pt-[78px]    ${path === "/about" ? "bg-[#002B43]" : "bg-black rounded-t-[30px]"}`}>
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3 pb-[40px] md:pb-[86px]">
          <div className="w-full md:w-1/2 px-3">
              <h2 className={` font-bold text-4xl pb-4 ff-lato ${path === "/" ? "text-[orange]" :"text-[#007AFF]"}`}>Logo <span className='text-white'>Here</span></h2>
            <p className='text-white font-normal text-base ff-lato max-w-[431px] opacity-70 '>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
          </div>
          <div className="w-1/2 md:w-1/4 px-3 mt-6 md:mt-0">
            <h4 className='text-white pb-6 font-semibold text-[18px]'>About website</h4>
            <ul>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/">Home</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/about">About us</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/testimonials">Testimonials</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="/choose us">Why Choose Us</a></li>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/4 px-3 mt-6 md:mt-0">
            <h4 className='text-white pb-6 font-semibold text-[18px]'>Follow links</h4>
            <ul>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal hover:text-[orange] transition-all duration-500' href="https:www.instagram.com" target="_blank" rel="noopener noreferrer" >Instagram</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal transition-all duration-500 hover:text-[orange]' href="https:www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal transition-all duration-500 hover:text-[orange]' href="https:www.discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li className='pb-4'><a className='text-white opacity-70 text-base font-normal transition-all duration-500 hover:text-[orange]' href="https:www.youtube.com" target="_blank" rel="noopener noreferrer">You Tube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white opacity-40 "></div>
      <a className='font-normal text-base text-white opacity-70 text-center py-[24px] hover:opacity-[unset] transition-all duration-500 px-3' href="/">Copyright©2024 (Logo) All Rights Reserved.</a>
    </div>
  )
}

export default Footer
