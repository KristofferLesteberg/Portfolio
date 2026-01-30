import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Projects from '../Pages/Projects'
import About from '../Pages/About'

import styles from '../Components/Navbar.module.css'

import { useWindowSize } from '@uidotdev/usehooks'

const Navbar = () => {
  const [menyPressed, setMenyPressed] = useState(false)

  const mobile = useWindowSize().width < 1000

  const changeMenPressed = () => setMenyPressed(!menyPressed)
  
return <>
  {mobile && (
    <button onClick={() => changeMenPressed()}>
      <span>meny</span>
    </button>
  )}
      <div className={menyPressed && mobile ? styles.mobileNavBar : styles.navbar}>
        <Link 
          to={"/prosjekter"} 
          className={styles.navItem}>
          Prosjekter
          </Link>
        <Link 
          to={"/ferdigheter"} 
          className={styles.navItem}>
          Teknologier
          </Link>
        <Link 
          to={"/kontakt"} 
          className={styles.navItem}>
          Kontakt meg
          </Link>
      </div>
</>
}

export default Navbar