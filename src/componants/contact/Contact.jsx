
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
        <div class="contact" id='contact'>
        <h2>Would Love to Hear From You 👋</h2>
        <div class="contact-container">
            <form id="contact-form" onSubmit={sendEmail}>
    
                <div class='input-container'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div class='input-container'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div class='input-container'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" required></textarea>
                </div>
    
                <input class='contact-button' type="submit" value="Submit"/>
            </form>
        </div>
    </div>
    
    )
}
