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
                    <p>Jeg går på Informasjonsteknologi vg2 på Sam Eyde. Ved å velge Informasjonsteknologi har jeg lært ufattelig mye spennede - alt fra programmering, server oppsett, nettverk og litt av hvert innenfor det store tema IT.</p>
                </div>
                <div className={`${styles.hobbies} ${styles.item}`}>
                    <img src={leader} />
                    <h2>Daglig leder</h2>
                    <p>Jeg er daglig leder av Sam-IT UB. Vi er en bedrift som er opptatt av at kundene skal bli fornøyde og gjennomfører alt av utvikling av nettsteder til brukerstøtte. Jeg som daglig leder har ansvar for kundene, kontakt med lærer, men er også med å hjelpe de ansatte.</p>
                </div>
                <div className={`${styles.intrest} ${styles.item}`}>
                    <img src={codeExample} />
                    <h2>Teknologi interessert</h2>
                    <p>Som man kanskje også skulle tro er jeg veldig fan av IT - om dette er programmering eller servere synes jeg som regel det er spennende. Denne interessen er ganske ny, men er en jeg har blitt veldig opphengt i og noe jeg vil forsette å være</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe