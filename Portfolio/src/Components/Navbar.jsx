import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../Pages/Projects'
import About from '../Pages/About'

import styles from '../Components/Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to={"/prosjekter"}>Prosjekter</Link>
        <Link to={"/kristoffer"}>Om meg</Link>
        <Link to={"/ferdigheter"}>Teknologier</Link>
        <Link to={"/kontakt"}>Kontakt meg!</Link>
      </div>
    </>
  )
}

export default Navbar