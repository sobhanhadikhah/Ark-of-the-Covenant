import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { ImPhone } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { fadein, planetVariants, textVariant } from "../utilis/motionVarition";
const Conectme = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_smxofro', 'template_k93r458', form.current, '6x-sCsT2ZRnLVB_vf')
            .then((result) => {
                console.log(result.text);
                toast.success("Thank you for your message.Your answer will be sent as soon as possible 🖐️");
            }, (error) => {
                console.log(error.text);
                toast.error(result.text)
            });
    }
    return (
        <div id="contect" className=" md:h-screen font-poppins mt-24 max-w-[1240px] mx-auto   " >
            <div className="" >
                <div>
                    <motion.h1 initial={'hidden'} whileInView={'visible'} variants={fadein} className="uppercase   bg-clip-text text-black dark:bg-gradient-to-r from-blue-800 via-blue-400 to-purple-400 
                      text-center py-36  text-8xl font-bold dark:text-transparent font-poppins " >
                        get in touch
                    </motion.h1>
                </div>
                <div className="grid md:grid-cols-2   ">
                    <motion.div initial="hidden" whileInView="visible" variants={fadein} className="mx-8 grid py-8 dark:bg-slate-700 md:px-8   bg-gray-50 shadow-lg shadow-black rounded-2xl px-4 " >
                        <div className="  grid grid-cols-2 my-4   " >
                            <a href="tel:09903127197" ><ImPhone className="text-orange-400  rounded-md my-2 hover:scale-150 hover:text-purple-500 transition duration-150 ease-in  " size={30} /></a>
                            <a href="tel:09903127197" className="font-semibold font-poppins text-black dark:text-gray-300 " > 09903127197</a>
                        </div>
                        <div className="  grid grid-cols-2 my-4  " >
                            <a href="mailto:hadikhahs@gmail.com" >

                                <TfiEmail className="text-orange-400 hover:scale-150 hover:text-purple-500 transition duration-150 ease-in  rounded-md my-2  " size={30} />
                            </a>
                            <a href="mailto:hadikhahs@gmail.com" className="font-semibold font-poppins text-xs md:text-base  text-black dark:text-gray-300 " > hadikhahs@gmail.com</a>
                        </div>
                        <div className="  grid grid-cols-2 my-4  " >
                            <a href="https://www.linkedin.com/in/sobhan-hadikhah-515a90258" >
                                <BsLinkedin className="text-orange-400  rounded-md my-2 hover:scale-150 hover:text-purple-500 transition duration-150 ease-in  " size={30} />
                            </a >
                            <a href="https://www.linkedin.com/in/sobhan-hadikhah-515a90258/" target="_blank"
                                className="font-semibold font-poppins text-black dark:text-gray-300 " >

                                Sobhan hadikhah </a>
                        </div>
                    </motion.div>
                    <motion.form initial="hidden" whileInView="visible" variants={fadein} ref={form} className=" flex flex-col    my-8 sm:my-0 mx-8 " onSubmit={sendEmail}  >
                        <label className="my-2  text-black dark:text-gray-300 "  >Name</label>
                        <input className="max-w-[320px] px-3 w-full py-2 shadow-black shadow-sm focus:outline-none  rounded-md " type="text" name="user_name" />
                        <label className="my-2 text-black dark:text-gray-300 " >Email</label>
                        <input type="email" name="user_email" className="max-w-[320px] px-3 w-full py-2 shadow-black shadow-sm focus:outline-none rounded-md" />
                        <label className="my-2 text-black dark:text-gray-300 " >Message</label>
                        <textarea className="max-w-[320px] px-3 w-full py-2 shadow-black shadow-sm focus:outline-none rounded-md" name="message" />
                        <ToastContainer position="top-center" />
                        <input type="submit" value="Send" className="bg-orange-500 hover:ring-2 transition duration-200 ring-purple-400 w-full mt-8 rounded-md py-3 max-w-[320px]
                         cursor-pointer  text-white font-bold  " />
                    </motion.form>
                </div>
            </div>
        </div>
    )
}
export default Conectme;