import React from 'react'

import styles from './AboutMe.module.css'
import SamEyde from '/Pictures/SamEyde.jpg'
import codeExample from '/Pictures/codeExampleImg.jpg'
import leader from '/Pictures/LeaderExampleImg.jpg'

const AboutMe = () => {
  return (
    <div className={styles.aboutMeMain}>
        <div className={styles.parentContainer}>
            <h1 className={styles.aboutMeh1}>Hvem er Jeg?</h1>
            <div className={styles.container}>
                <div className={`${styles.school} ${styles.item}`}>
                    <img src={SamEyde} />
                    <h2>Elev ved Sam Eyde vgs.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam provident illo blanditiis pariatur veniam similique perspiciatis eligendi quibusdam eum id et, placeat maiores excepturi vitae, quaerat consequatur eveniet praesentium neque.</p>
                </div>
                <div className={`${styles.hobbies} ${styles.item}`}>
                    <img src={leader} />
                    <h2>Daglig leder</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat odio quos magni. Excepturi quia ut magni libero corrupti. Blanditiis ullam error vel sint deleniti. Aliquam quidem saepe corrupti molestias!</p>
                </div>
                <div className={`${styles.intrest} ${styles.item}`}>
                    <img src={codeExample} />
                    <h2>Teknologi intressert</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil, pariatur error at officia dolorum esse beatae dolore, tempora laborum tenetur eum fugit! Architecto, veritatis reprehenderit laudantium dolorem tempora quibusdam.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe