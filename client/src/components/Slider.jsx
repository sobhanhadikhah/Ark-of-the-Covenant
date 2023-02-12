import React, { useEffect } from 'react'
import { dropin } from "../utilis/motionVarition";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fadeIn, fadein, staggerContainer, planetVariants } from '../utilis/motionVarition';
import { Slidersskills } from '../utilis/slider';

function Slider() {


    return (
        <div id="skills" className='   h-screen dark:bg-[#202320] bg-white  ' >
            <div className='text-center py-28   ' >
                <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }} variants={fadein}
                    className='text-black dark:text-white font-poppins font-bold text-7xl  ' >
                    Skills
                </motion.h1>
                <p className='font-poppins text-gray-400 dark:text-[#939AA5] ' > Here are some of my skills </p>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadein}
                className='md:py-32      items-center flex  ' >
                <Swiper
                    className='px-8 py-4'
                    // install Swiper mo    dules

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    slidesPerView={'auto'}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {Slidersskills.map((item, i) => (
                        <div key={item.id} >
                            <SwiperSlide key={item.id}
                                className='dark:bg-[#2F2F2F]   md:w-[320px] text-center   text-black  my-7 py-4
                                   font-poppins dark:text-white rounded-md justify-center flex items-center self-center flex-col p-8 ' >
                                <img className='w-[128px]    ' src={item.svg} alt="skills" />
                                <div className=' text-center ' >
                                    <h1 className='font-bold text-2xl font-poppins my-5 dark:text-gray-200 ' > {item.title} </h1>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    )
}

export default Slider