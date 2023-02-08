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
    <AnimatePresence>
      <motion.div initial={{ backgroundColor: theme === "dark" ? '#1B1A1A' : '#fff' }}
        animate={{ backgroundColor: theme === "dark" ? '#1B1A1A' : '#fff' }}
        exit={{ backgroundColor: theme === "dark" ? '#1B1A1A' : '#fff' }}
        className='overflow-hidden     h-screen' >
        <Navbar theme={theme} togglelightandday={hancleonToggle} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
