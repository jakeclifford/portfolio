import React, {useEffect, useState} from 'react'
import "./about.scss"
import Stars from "./stars.svg"
import Quote from "./quote.svg"




export default function About() {

    return (
        <div class="testimonials-section">
            <h2 class="testimonials-title">What My <span class="higlighted">Clients</span> Say</h2>
            <div class="testimonials-container">
            <div class="testimonial">
                <p class="quote">"Jake is a young amazing developer, honest and knows how to get the job done. Really hard to find these days. it was a pleasure to deal with him . Dont waste your time with others please , deal with Jake."</p>
                <div>
                    <img src={Stars} class="stars"></img>
                    <p class="name">Yehia</p>
                    <p class="designation">Wordpress Client</p>
                </div>
            </div>
            <div class="testimonial">
                <p class="quote">"Jake is a top-notch developer who consistently understands both business needs and customer expectations, delivering outstanding results quickly. His extensive expertise in Shopify, combined with his strong problem-solving skills, enables Jake to tackle any technical challenge that comes his way."</p>
                <div>
                    <img src={Stars} class="stars"></img>
                    <p class="name">Kody Lukens</p>
                    <p class="designation">CEO, Stimagz.com</p>
                </div>
            </div>
            <div class="testimonial">
                <p class="quote">"Jake understood the assignment, had a great solution to my web dev problem and delivered the result same day. Fantastic work!"</p>
                <div>
                    <img src={Stars} class="stars"></img>
                    <p class="name">Ian Zbiegniewski</p>
                    <p class="designation">Manager, Prima</p>
                </div>
            </div>
            </div>
            <img src={Quote} class="quote-image"></img>
        </div>
    )
}
