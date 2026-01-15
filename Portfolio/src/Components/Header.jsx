import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className='name'>
          <Link to={"/"}>Kristoffer</Link>
        </div>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='contact'>
          <Link to={"/kontakt"}>Kontakt meg</Link>
        </div>
      </header>
    </>
    
  )
}

export default Header