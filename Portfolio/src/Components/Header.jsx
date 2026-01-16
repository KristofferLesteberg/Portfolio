import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

import styles from '../Components/Header.module.css'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
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