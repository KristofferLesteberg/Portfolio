import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

import styles from '../Components/Header.module.css'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link to={"/"} className={styles.home}>Hjem</Link>
        </div>
        <div className='navbar'>
          <Navbar />
        </div>
      </header>
    </>
    
  )
}

export default Header