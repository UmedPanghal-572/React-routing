import React from 'react'
// import { FOOTER_LINKS } from '../../utils/helper'

const Footer = () => {
  return (
    <div className='flex  items-center justify-center pt-[78px] bg-black rounded-t-[30px] mt-10'>
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-1/2 px-3">
            <h2 className='text-[orange] font-bold text-4xl pb-4 ff-lato'>Logo <span className='text-white'>Here</span></h2>
            <p className='text-white font-normal text-base ff-lato max-w-[431px] opacity-70 pb-[86px]'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
          </div>
          {/* <div className="w-1/2 flex flex-row px-3">
            {FOOTER_LINKS.map((obj, index) => (
              <div key={index} className={`w-1/2 px-3 ${ index===0 ? "" : ""}`}>
                <h4 className='text-white pb-6'>{obj.heading}</h4>
                <ul className='flex flex-col'>
                  <li className='text-white pb-4'><a href="#">{obj.links_1}</a></li>
                  <li className='text-white pb-4'><a href="#">{obj.links_2}</a></li>
                  <li className='text-white pb-4'><a href="#">{obj.links_3}</a></li>
                  <li className='text-white '><a href="#">{obj.links_4}</a></li>
                </ul>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
