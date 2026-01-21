import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
        <header>
            <Header />
        </header>

        <div className={styles.mainContact}></div>
        <h1>Kontakt</h1>

        <Footer />
    </>
  )
}

export default Contact