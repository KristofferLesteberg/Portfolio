import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'
import './assets/CSS/global.css'
import { Link } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className=''>
        <h1>Heisann</h1>
      </div>

      <Footer />
    </>
  )
}

export default App
