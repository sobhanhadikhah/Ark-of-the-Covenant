import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { fadein } from "../utilis/motionVarition";
const Conectme = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("form")
    }
    return (
        <div id="contect" className=" md:h-screen font-poppins mt-24 max-w-[1240px] mx-auto  dark:bg-[#2F2F2F] bg-white " >
            <div className="text-black  " >
                <div>
                    <motion.h1 initial={'hidden'} whileInView={'visible'} variants={fadein} className="uppercase text-center py-36  text-8xl font-bold font-poppins " >
                        get in touch
                    </motion.h1>
                </div>
                <div className="grid md:grid-cols-2 ">
                    <form action="
                    
                    ">
                        hey
                    </form>
                    <form className=" flex flex-col   mx-8  " onSubmit={sendEmail} >
                        <label className="my-2  " >Name</label>
                        <input className="max-w-[320px] px-3 w-full py-2 shadow-black shadow-md outline-none rounded-md  " type="text" name="user_name" />
                        <label className="my-2" >Email</label>
                        <input type="email" name="user_email" className="max-w-[320px] px-3 w-full py-2 border-2  border-black rounded-md" />
                        <label className="my-2" >Message</label>
                        <textarea className="max-w-[320px] px-3 w-full py-2 border-2 border-black rounded-md" name="message" />
                        <input type="submit" value="Send" className="bg-orange-500 w-full mt-8 rounded-md py-3 max-w-[320px] cursor-pointer  text-white font-bold  " />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Conectme;