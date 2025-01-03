
import React, { useRef } from 'react';
import { CARDS } from '../utils/helper';
import { CARD_IMG } from '../utils/helper';
import icon from '../assets/images/svg/lorem-icon.svg';
import n_arrow from '../assets/images/svg/right-arrow.svg';
import p_arrow from '../assets/images/svg/left-arrow.svg';
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Hero = () => {
    const path = useLocation().pathname;

    const sliderRef = useRef(null); 

    const cards = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className='mt-10'>
            <div className={`container max-w-[1140px] mx-auto ${path === "/" ? "" : "hidden"}`}>
                <h2 className='text-black text-center font-semibold text-[40px]'>Lorem ipsum</h2>
                <div className='py-10 relative'>
                    <Slider {...cards} ref={sliderRef}>
                        {CARDS.map((obj, index) => (
                            <div key={index} className="rounded-[22px] bg-[#fff3ed] py-5 px-[30px]">
                                <img src={icon} alt="icon" />
                                <h2 className='pb-4 text-2xl font-semibold text-black pt-8'>{obj.title}</h2>
                                <p className='font-light text-base pb-2 max-w-[250px]'>
                                    {obj.description}
                                    <a className='text-red-500 font-semibold ms-2' href="/">Read more</a>
                                </p>
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center mt-[30px] gap-[26px]">
                        <button
                            className='prev'
                            onClick={() => sliderRef.current.slickPrev()} 
                        >
                            <img src={p_arrow} alt="arrow" />
                        </button>
                        <button
                            className='next'
                            onClick={() => sliderRef.current.slickNext()} 
                        >
                            <img src={n_arrow} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`container max-w-[1140px] mx-auto ${path === "/about" ? "" : "hidden"}`}>
                <h2 className='font-semibold text-[40px] text-center pb-5'>Lorem ipsum dolor sit amet</h2>
                <p className='text-base font-medium text-center opacity-70'>Lorem ipsum dolor sit amet consectetur. Amet varius in enim.</p>
                <div className='py-10'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{
                            "--swiper-pagination-color": "#43BBFF",
                            "--swiper-pagination-bullet-inactive-color": "#43BBFF6E",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "11px",
                            "--swiper-pagination-bullet-horizontal-gap": "5px"
                        }}
                    >
                        {CARD_IMG.map((obj, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative group transition-all duration-700 ease-in-out">
                                    <img className='rounded-[16px]' src={obj.image} alt="tree" />
                                    <div className='border-[0.2px] border-white rounded-b-[16px] backdrop-blur-[6px] absolute bottom-0 left-0 right-0 py-3 ps-3 translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-in-out'>
                                        <h4 className='text-white font-medium text-[18px]'>{obj.img_title}</h4>
                                        <p className='text-white font-normal text-base opacity-70'>{obj.img_description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Hero;