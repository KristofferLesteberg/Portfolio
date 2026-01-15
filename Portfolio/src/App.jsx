import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'
import './assets/CSS/global.css'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>
      <h1>heisann</h1>

      <Link to={'kontakt'}>Kontakt</Link>
      <Link to={'prosjekter'}>Prosjekter</Link>
    </>
  )
}

export default App
