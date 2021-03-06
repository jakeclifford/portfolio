
import React from 'react'
import "./Contact.scss"
import emailjs from "emailjs-com"
import { AlternateEmailTwoTone } from '@mui/icons-material'
import { Alert } from '@mui/material'

export default function Contact() {

    function sendEmail(e){

        e.preventDefault()
        emailjs.sendForm(
            'service_w27i5f3', 
            'template_u2oz4bj', 
            e.target,  
            'Q2Mlg5e1mWu5RJc4L'
        ).then(res => {
            console.log(res)
            alert("Email Succesfully Sent")
            document.getElementById('contact-form').reset()
        }).catch(err => console.log(err))


    }

    return (
        <div className="contact" id="contact">
            <h1>CONTACT</h1>
            <div className="contact-container">
                <h2>Send me an email!</h2>
                    <form id="contact-form" onSubmit={sendEmail}>
                        <div className='top'>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" required />
                        </div>
                        
                        <input className='button' type="submit" value="Submit"/>
                    </form>
            </div>
        </div>
    )
}
