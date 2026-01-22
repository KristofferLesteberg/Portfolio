import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../Pages/Projects'
import About from '../Pages/About'

import styles from '../Components/Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to={"/prosjekter"} className={styles.navItem}>Prosjekter</Link>
        <Link to={"/ferdigheter"} className={styles.navItem}>Teknologier</Link>
        <Link to={"/kontakt"} className={styles.navItem}>Kontakt meg</Link>
      </div>
    </>
  )
}

export default Navbar