import React from 'react'
import CardHandemade from './CardHandemade';
import personalpic from "../assets/personalpic.jpg";
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
                <div className='flex flex-col md:flex-row justify-center items-center text-center ' >

                    <motion.img drag src={personalpic}
                        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                        className=' mr-0 cursor-grab  md:mr-12 flex border-2  rounded-full shadow-black shadow-2xl  dark:shadow-2xl dark:shadow-orange-400 w-[228px] ' alt="" />


                    <div className=' py-8 font-poppins mt-8 md:mt-0   md:ml-5   ' >
                        <h1 className=' dark:text-white font-semibold text-[32px]  text-4xl ' >Hi there, im sobhan hadikhah</h1>
                        <p className='max-w-[480px] flex mb-3 justify-center text-center leading-loose mx-8 dark:text-gray-300 mt-5 font-poppins text-gray-400  ' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptates harum ipsum cumque natus ex ab illo eligendi sed optio!
                        </p>
                        <span className='text-orange-400 text-lg font-semibold py-4 ' >Now you can drag Me 🙂 !!!</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero