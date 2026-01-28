import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../Components/Footer.module.css'

const messageMe = () => {

    const form = useRef()
    const [message, setMessage] = useState("") 

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [textarea, setTextarea] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        
        if(name != "" && email != "" && textarea != "") {  
                emailjs
                .sendForm("service_z3rvxlj", "template_pmzitur", form.current, { 
                    publicKey: "dfkUZB2Va2U5FH84E",
                })
                .then(() => {
                    console.log("Success")
                    setMessage("Takk for meldingen!")

                    setTimeout(() => {
                        setMessage("")
                    }, 5000)

                }, (error) => {
                    console.log("failed", error.text)
                    setMessage("Meldingen ble ikke sendt...")
                    setTimeout(() => {
                        setMessage("")
                    }, 5000)
                }
            )

        setName("")
        setEmail("")
        setTextarea("") 

        } else {
            setMessage("Fyll ut alle feltene")
            setTimeout(() => {
                setMessage("")
            }, 5000)   
        }
    }

  return (
    <form ref={form} onSubmit={sendEmail} >
        {message && (
            <p className={styles.message}>{message}</p>
        )}
        <div>
            <label>Navn *</label><br />
            <input
                type="text" 
                name="user_name" 
                value={name}
                onChange={e => setName(e.target.value)}
                className={styles.formContent}
            />
        </div>
        <div>
            <label>Email *</label><br />
            <input 
                type="email" 
                name="user_email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.formContent}
            />
        </div>
        <div>
            <label>Melding *</label><br />
            <textarea 
                name="message" 
                value={textarea}
                onChange={e => setTextarea(e.target.value)}
                className={styles.formContent}
            />
        </div>
      <button 
        type='submit'>
        Send
        
      </button>
      
    </form>

    
  )
}

export default messageMe 