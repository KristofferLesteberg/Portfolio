import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import styles from './Contact.module.css'

import MessageMe from '../Components/MessageMe'

const Contact = () => {
  return (
    <section>
        <header>
            <Header />
        </header>

        <div className={styles.container}>
          <h1 className={styles.contactMeH1}>
            Kom i kontakt med meg!
          </h1>
          <br />
          <div className={styles.contactMain}>
            <div className={`${styles.leftSection} ${styles.section}`}>
              <h1>Jeg vil gjerne høre fra deg!</h1>
              <p><b>
                Jeg tar gjerne imot spørsmål om meg, prosjekter eller annet du lurer på. 
                <br />
                Jeg er også gjerne villig til å samarbeide med andre utviklere!
              </b></p>
               <div className={styles.options}>
                <p><b>Sosiale medier:</b></p>
                <div className={styles.soMe}>
                  <a href="https://www.linkedin.com/in/kristoffer-lesteberg-724a6537a/"><i className="fa fa-linkedin-square"></i>LinkedIn</a>
                  <a href="https://www.instagram.com/kristofferihme/"><i className="fa fa-instagram"></i>Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=100070669974580"><i className="fa fa-facebook"></i>Facebook</a>
                  <a href="https://github.com/KristofferLesteberg"><i className="fa fa-github"></i>Github</a>
                 </div>
               </div>

            </div>
            <div className={`${styles.rightSection} ${styles.section}`}>
              <MessageMe />
            </div>
          </div>


        </div>

        
        

        <Footer />
    </section>
  )
}

export default Contact