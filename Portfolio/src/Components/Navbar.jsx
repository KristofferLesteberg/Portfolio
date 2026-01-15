import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Pages/Projects'
import About from './Pages/About'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <Link to={"/prosjekter"}>Projects</Link>
        <Link to={"/kristoffer"}>About</Link>
        <Link to={"/ferdigheter"}>Teknologier</Link>
      
      </div>
    </>
  )
}

export default Navbar