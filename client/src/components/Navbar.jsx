import React, { useState } from 'react'
import personalpic from "../assets/personalpic.jpg";
import { motion, AnimatePresence } from 'framer-motion';
import { BsSun } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, animateScroll as scroll } from "react-scroll";
function Navbar({ togglelightandday, theme }) {
  const [navtoggle, setNavtoggle] = useState(false);
  const navbarText = [
    {
      title: "Home",
      path: "hero"
    },
    {
      title: "Skills",
      path: "skills"
    }, {
      title: "Contact",
      path: "contect"
    },

  ]
  const handleoncolse = () => {
    setNavtoggle((prev) => !prev)
  }
  const handleonscroll = () => {
    scroll.scrollToBottom();
  }
  return (

    <AnimatePresence  >
      <motion.div id='navbar' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'anticipate' }} className=' w-full h-[98px] sticky top-0 z-30
       justify-between dark:bg-transparent dark:bg-[#2F2F2F]   font-poppins items-center mb-10 md:mb-0 bg-opacity-95 bg-white md:bg-opacity-90 md:bg-white     ' >
        <div className='flex items-center  dark:text-[#bdbdbd]    text-black max-w-[1240px] mx-auto p-6  ' >
          {/* personal pic for anything can be logo  */}
          {/* <img src={personalpic} className=' mx-3 hover:scale-125 rounded-full cursor-pointer  dark:shadow-orange-400 shadow-lg shadow-slate-400
           hover:-translate-y-3
           dark:hover:shadow-orange-900 transition duration-150 w-[48px] h-[48px] ' alt="logo" /> */}
          {/* <DiReact size={30} className='text-blue-400   ' /> */}
          <h3 className='dark:text-white text-black font-semibold ' >
            Sobhan
          </h3>
          <motion.span drag dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }} className='ml-2 cursor-pointer bg-black dark:bg-orange-400 dark:text-white text-white font-semibold p-1 rounded-md ' >DEV</motion.span>
          <div className=' w-full self-end   ' >

            <ul className=' hidden md:flex w-full  font-semibold list-none justify-end ' >


              {navbarText.map((lable, i) => (
                <div key={i} className='flex'  >
                  <li className='mx-3 cursor-pointer x  ' >
                    <Link to={lable.path} smooth={true} duration={150} offset={0}  >{lable.title}</Link></li>
                  <span className='text-orange-400  ' >|</span>
                </div>
              ))}




              <BsSun size={24} className={` cursor-pointer ml-3 hover:text-yellow-500 dark:hover:text-yellow-500  dark:text-yellow-400 text-black  `} onClick={togglelightandday} />

            </ul>


          </div>
          <div className='md:hidden flex flex-1 justify-end  items-center  ' >
            <BsSun size={23} className={`mr-9  dark:text-yellow-400 text-black  `} onClick={togglelightandday} />
            {navtoggle === false ? <RiMenu4Fill className=' text-black dark:text-orange-400  ' size={30} onClick={() => setNavtoggle((prev) => !prev)} />
              : <IoClose size={30} className='text-black dark:text-orange-400' onClick={() => setNavtoggle((prev) => !prev)} />}



          </div>
          {navtoggle === true ? (
            <div className="dark:bg-orange-400 bg-white shadow-md z-30 dark:shadow-black dark:shadow-md  dark:border-2 shadow-slate-400
              dark:text-white md:hidden 
          absolute p-6 top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar "  >
              <ul className='list-none flex-col text-center justify-center items-center flex-1 ' >
                {navbarText.map((text, i) => (
                  <div className='' key={i} >
                    <li className={`flex   ${i === navbarText.length - 1 ? 'mr-0' : 'mb-4'} text-center justify-center items-center
                     border-orange-400  text-[16px]
                      font-poppins font-normal`}  >
                      <Link onClick={handleoncolse} smooth={true} offset={0} duration={300} activeClass='active' to={text.path} > {text.title} </Link></li>
                  </div>
                ))}
              </ul>
            </div>
          ) : ""}

        </div>

      </motion.div >
    </AnimatePresence>
  )
}

export default Navbar