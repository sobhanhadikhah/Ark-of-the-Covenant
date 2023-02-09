import { useEffect, useState } from 'react'
import { Navbar, Home } from './components/'
import { Route, Router, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  const hancleonToggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <AnimatePresence exitBeforeEnter >
      <motion.div initial={{ backgroundColor: theme === "dark" ? '#202320' : '#fff' }}
        animate={{ backgroundColor: theme === "dark" ? '#202320' : '#fff' }}
        exit={{ backgroundColor: theme === "dark" ? '#202320' : '#fff' }}
        className='h-screen py-2 overflow-auto ' >
        <Navbar theme={theme} togglelightandday={hancleonToggle} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
