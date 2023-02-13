import React, { useState } from 'react'
import CardHandemade from './CardHandemade';
import personalpic from "../assets/personalpic.jpg";
import { DiReact } from "react-icons/di"
import { motion, wrap } from 'framer-motion';
import { FaWhatsappSquare } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import NikeShoe from "../assets/Nike-Shoe.png"
import { fadein } from "../utilis/motionVarition"
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
function Hero() {
    return (
        <div id="hero" className='max-w-[1240px] mx-auto my-8 md:h-screen dark:bg-[2F2F2F] ' >
            {/*             <div className='grid  md:grid-cols-2 gap-8   ' >
                <CardHandemade />
                <CardHandemade />
                <CardHandemade />
            </div> */}
            <div className='flex justify-center items-center md:py-24' >
                <div className='flex flex-col md:flex-row justify-center items-center  ' >

                    <motion.img initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        drag src={personalpic}
                        transition={{
                            type: "spring",
                            stiffness: 360,
                            damping: 90,
                            delay: 0.3

                        }}

                        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                        className={`mr-0 cursor-grab   flex border-2  rounded-full
                        shadow-black shadow-2xl ml-5  dark:shadow-2xl dark:shadow-orange-400 w-[258px]  `} alt="pic1" />



                    <div className='  py-4 font-poppins mt-6 md:mt-0   md:ml-5   ' >
                        <div className='flex flex-col' >
                            <motion.h1 initial="hidden" whileInView="visible" variants={fadein}
                                className=' dark:text-white font-semibold  text-[32px] mx-8 leading-normal  text-4xl ' >Hi there, im Sobhan Hadikhah</motion.h1>
                            <motion.h3 className='dark:text-gray-100 text-gray-500 mx-8 text-sm font-semibold ' >
                                I am a front-end <span className='text-blue-400 font-bold font-poppins flex-none'
                                >React JS <motion.div className='inline-block' animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} ><DiReact className=' inline-block items-center bg-transparent justify-center text-center  ' size={30} /></motion.div>  </span>   developer.  </motion.h3>
                            <motion.p className='max-w-[780px]   mb-3 justify-start  self-start  leading-loose  mx-8  dark:text-gray-300 mt-2 font-poppins
                             text-gray-400  ' >
                                I started my path to Android world by starting with Java and Road.
                                I gained significant experience in Gill Marketing Company and changed my path to the world of web and web applications.
                                I entered ReactJS in 2020 and I am improving my level of knowledge is in this framework.
                            </motion.p>

                        </div>
                        <a target="_blank" href={'https://drive.google.com/file/d/1REdGsqHDZ7TdiJWxjoa0BYgJ3mR33I9W/view?usp=sharing'}
                            className='bg-[#1977F3] max-w-[220px] text-center justify-center my-4 shadow-md   hover:scale-105 dark:hover:bg-blue-500   ease-in-out items-center
                              h-12 flex mx-8
                         text-white rounded-md font-semibold   transition-all duration-100 ' >Resume</a>
                        <div className='mx-8 flex my-3 flex-row gap-3 text-black dark:text-white  ' >
                            <a target='_blank' href='https://github.com/sobhanhadikhah' className='hover:text-blue-500 hover:dark:text-orange-500 transition duration-100 ease-in hover:scale-105 '  >

                                <RxGithubLogo size={30} />
                            </a>
                            <a target='_blank' href='https://www.instagram.com/theycallmesobhan/' className='hover:text-blue-500 hover:dark:text-orange-500 hover:scale-105 transition duration-100 ease-in ' >
                                <RxInstagramLogo size={30} />

                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/sobhan-hadikhah-515a90258' className='hover:text-blue-500 hover:dark:text-orange-500 hover:scale-105 transition duration-100 ease-in ' >
                                <RxLinkedinLogo size={30} />

                            </a>
                            <a target='_blank' href='https://t.me/theycallmesobhan' className='hover:text-blue-500 hover:dark:text-orange-500 hover:scale-105 transition duration-100 ease-in ' >
                                <RiSendPlaneFill className='     ' size={30} />

                            </a>
                            <a href='https://wa.me/message/ZD42KSBSXUPSN1' target='_blank' className='hover:text-blue-500 hover:dark:text-orange-500 hover:scale-105 transition duration-100 ease-in' >
                                <FaWhatsappSquare size={30} />

                            </a>
                        </div>
                        <span className='text-orange-400 self-start font-poppins text-lg justify-start mx-8 font-semibold py-4 mt-14 '
                        >Now you can drag Me 🙂 !!!</span>
                    </div>

                </div>

            </div>
            {/* <motion.img initial={{ scale: 0 }} animate={{ x: 100, scale: 1 }} transition={
                {
                    type: 'spring',
                    duration: 1,
                    stiffness: 360,
                    damping: 90,
                }} src={NikeShoe} exit="exit" alt="nike" /> */}

        </div>
    )
}

export default Hero