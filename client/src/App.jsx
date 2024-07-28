import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navebar from './components/Navbar'

function App() {
  return(
    <div className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen'>
      <Navebar />
    </div>
  )
}

export default App
