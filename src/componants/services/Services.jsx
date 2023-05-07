import "./services.css"
import Shopify from "./shopify.png"
import ReactImage from "./react.png"
import Figma from "./figma.png"

export default function Services() {

    return (
        <div className='services-section'>
                <h2 class="section-title">What I Can <span class='higlighted'>Offer</span> You</h2>
                <div class="services">
                    <div class="service">
                        <img className="service-image" src={Shopify}></img>
                        <h2>Shopify Developement</h2>
                        <p>Enhance your store with unique product customizations and optimize conversion rates to unlock your online store's full potential.</p>
                    </div>
                    <div class="service">
                        <img className="service-image" src={ReactImage}></img>
                        <h2>Web Developement</h2>
                        <p>Custom applications, designed to address unique challenges and enhance user experiences, unlocking the potential of your online platform.</p>
                    </div>
                    <div class="service">
                        <img className="service-image" src={Figma}></img>
                        <h2>UI Design</h2>
                        <p>Crafting engaging and intuitive UI designs that cater to user needs, creating seamless experiences that impress your customers</p>
                    </div>
                </div>
        </div>
    
    )
}