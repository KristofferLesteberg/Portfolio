import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import styles from './Contact.module.css'

import MessageMe from '../Components/MessageMe'

const Contact = () => {
  return (
    <>
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
              <h3>Jeg vil gjerne høre fra deg!</h3>

            </div>
            <div className={`${styles.rightSection} ${styles.section}`}>
              <MessageMe />
              
            </div>
          </div>


        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1>Kontakt</h1>

        <Footer />
    </>
  )
}

export default Contact