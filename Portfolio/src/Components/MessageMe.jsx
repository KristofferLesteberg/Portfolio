import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const messageMe = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
            .sendForm("service_z3rvxlj", "template_pmzitur", form.current, { 
                publicKey: "dfkUZB2Va2U5FH84E",
            })
            .then(() => {
                console.log("Success")
            }, (error) => {
                console.log("failed", error.text)
            }
        )
    }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}

export default messageMe