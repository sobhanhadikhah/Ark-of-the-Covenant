import { useEffect, useState } from 'react'
import { Navbar, Home } from './components/'
import { Route, Router, Routes } from 'react-router-dom';

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
    <div className='overflow-hidden  bg-white  dark:bg-[#1B1A1A]   h-screen' >
      <Navbar theme={theme} togglelightandday={hancleonToggle} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
