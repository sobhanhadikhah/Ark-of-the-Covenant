import React from 'react'
import CardHandemade from './CardHandemade';
import personalpic from "../assets/personalpic.jpg";
import { DiReact } from "react-icons/di"
import { motion } from 'framer-motion';
function Hero() {
    return (
        <div className='max-w-[1240px] mx-auto my-8  ' >
            {/*             <div className='grid  md:grid-cols-2 gap-8   ' >
                <CardHandemade />
                <CardHandemade />
                <CardHandemade />
            </div> */}
            <div className='flex justify-center items-center md:py-24' >
                <div className='flex flex-col md:flex-row justify-center items-center  ' >

                    <motion.img drag src={personalpic}
                        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                        className=' mr-0 cursor-grab  md:mr-12 flex border-2  rounded-full
                         shadow-black shadow-2xl ml-5  dark:shadow-2xl dark:shadow-orange-400 w-[228px] ' alt="" />


                    <div className='  py-8 font-poppins mt-8 md:mt-0   md:ml-5   ' >
                        <div className='flex flex-col' >
                            <h1 className=' dark:text-white font-semibold text-[32px] mx-8 leading-normal  text-4xl ' >Hi there, im sobhan hadikhah</h1>
                            <h3 className='dark:text-gray-100 text-gray-500 mx-8 text-sm font-semibold ' >
                                I am a front-end <span className='text-blue-400 font-bold font-poppins flex-none'
                                >React JS <DiReact className=' inline-block  ' size={30} />  </span>   developer.  </h3>
                            <p className='max-w-[780px]   mb-3 justify-start  self-start  leading-loose  mx-8  dark:text-gray-300 mt-2 font-poppins
                             text-gray-400  ' >
                                I started my path to Android world by starting with Java and Road. I gained significant experience in Gill Marketing Company and changed my path to the world of web and web applications. I entered ReactJS in 2020 and I am improving my level. My knowledge is in this framework
                            </p>

                        </div>
                        <span className='text-orange-400 self-start font-poppins text-lg justify-start mx-8 font-semibold py-4 mt-14 ' >Now you can drag Me 🙂 !!!</span>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Hero