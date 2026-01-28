import React from "react"

import styles from '../Components/Footer.module.css'
import MessageMe from './MessageMe'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.parentElement}>
        <div className={styles.container}>
          <div className={`${styles.contact} ${styles.item}`}>
            <h2>Kontakt meg</h2>
            <div className={styles.options}>
              <p>Email: <br />Kristofferihmelesteberg@gmail.com</p>
              <p>Tlf:<br /> 904 16 157</p>
            </div>
          </div>
          <div className={`${styles.socials} ${styles.item}`}>
            <h2>Sosiale medier</h2>
            <div className={styles.options}>
              <a href="https://www.linkedin.com/in/kristoffer-lesteberg-724a6537a/"><i className="fa fa-linkedin-square"></i>LinkedIn</a>
              <a href="https://www.linkedin.com/in/kristoffer-lesteberg-724a6537a/"><i className="fa fa-instagram"></i>Instagram</a>
              <a href="https://www.linkedin.com/in/kristoffer-lesteberg-724a6537a/"><i className="fa fa-facebook"></i>Facebook</a>
              <a href="https://www.linkedin.com/in/kristoffer-lesteberg-724a6537a/"><i className="fa fa-youtube"></i>Youtube</a>
            </div>
          </div>
          <div className={`${styles.email} ${styles.item}`}>
            <h2>Send meg en mail</h2>
            <MessageMe />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer