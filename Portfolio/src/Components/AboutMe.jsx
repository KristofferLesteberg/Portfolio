import React from 'react'

import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={styles.aboutMeMain}>
        <h1>Hvem er Jeg?</h1>
        <div className={styles.container}>
            <div className={`${styles.school} ${styles.item}`}>
            <h1>Test</h1>
        </div>
        <div className={`${styles.schoolImg}`}>

        </div>
        <div className={`${styles.hobbies} ${styles.item}`}>
            <h1>test</h1>

        </div>
        <div className={`${styles.intrest} ${styles.item}`}>
            <h1>Test</h1>

        </div>

        </div>

    </div>
  )
}

export default AboutMe