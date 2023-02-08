import React, { useState } from 'react'
import personalpic from "../assets/personalpic.jpg";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { BsSun } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";
function Navbar({ togglelightandday, theme }) {
  const [navtoggle, setNavtoggle] = useState(false);
  const navbarText = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Githube",
      path: "/Githube"
    }, {
      title: "Email",
      path: "/"
    },
    {
      title: "About",
      path: "/About"
    },
  ]
  return (

    <div div className=' w-full h-[98px] justify-between items-center   ' >
      <div className='flex items-center dark:text-[#bdbdbd]  text-black max-w-4xl mx-auto p-6   ' >
        <img src={personalpic} className=' mx-3 rounded-full cursor-pointer  dark:shadow-orange-400 shadow-lg shadow-slate-400 hover:-translate-y-3 dark:hover:shadow-orange-900 transition duration-150 w-[48px] h-[48px] ' alt="logo" />
        <h3 className='dark:text-white text-black font-semibold ' >
          Sobhan
        </h3>
        <motion.span drag dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }} className='ml-2 bg-black dark:bg-orange-400 dark:text-white text-white font-semibold p-1 rounded-md ' >DEV</motion.span>
        <div className=' w-full self-end   ' >

          <ul className=' hidden md:flex w-full  font-semibold list-none justify-end ' >
            {navbarText.map((text, i) => (
              <div key={i} className='flex' >
                <li className='mx-3 cursor-pointer  ' ><Link to={text.path}  >{text.title}</Link></li>
                <span className='text-orange-400  ' >|</span>

              </div>
            ))}
            <BsSun size={24} className={` cursor-pointer ml-3 hover:text-yellow-500 dark:hover:text-yellow-500  dark:text-yellow-400 text-black  `} onClick={togglelightandday} />

          </ul>


        </div>
        <div className='md:hidden flex flex-1 justify-end  items-center  ' >
          <BsSun size={23} className={`mr-9  dark:text-yellow-400 text-black  `} onClick={togglelightandday} />
          <RiMenu4Fill className='w-5 text-black dark:text-orange-400  ' size={30} onClick={() => setNavtoggle((prev) => !prev)} />

        </div>
        {navtoggle === true ? (
          <div className="dark:bg-orange-400 shadow-md shadow-slate-400 dark:text-white md:hidden 
          absolute p-6 top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar "  >
            <ul className='list-none flex-col text-center justify-center items-center flex-1 ' >
              {navbarText.map((text, i) => (
                <div className='' key={i} >
                  <li className={`flex   ${i === navbarText.length - 1 ? 'mr-0' : 'mb-4'} text-center justify-center items-center border-orange-400 text-[16px] font-poppins font-normal`}  ><Link to={text.path} > {text.title} </Link></li>
                </div>
              ))}
            </ul>
          </div>
        ) : ""}

      </div>

    </div >
  )
}

export default Navbar