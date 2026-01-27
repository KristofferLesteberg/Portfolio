import React from 'react'

import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={styles.aboutMeMain}>
        <div className={styles.parentContainer}>
            <h1 className={styles.aboutMeh1}>Hvem er Jeg?</h1>
            <div className={styles.container}>
                <div className={`${styles.school} ${styles.item}`}>
                <h1>Elev ved Sam Eyde vgs.</h1>
               
            </div>
            <div className={`${styles.hobbies} ${styles.item}`}>
                <h1>Daglig leder</h1>
            </div>
            <div className={`${styles.intrest} ${styles.item}`}>
                <h1>Teknologi intressert</h1>

            </div>

            </div>

        </div>
    </div>
  )
}

export default AboutMe