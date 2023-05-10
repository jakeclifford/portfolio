import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li>
                    <a href="/" onClick={()=>setMenuOpen(false)}>Home</a>
                </li>
                <li>
                    <a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
                </li>
                <li>
                    <a href="#projects" onClick={()=>setMenuOpen(false)}>My Work</a>
                </li>
                <li>
                    <a href="#testimonials" onClick={()=>setMenuOpen(false)}>Testimonials</a>
                </li>    
                <li>
                    <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
                </li>  
            </ul>
        </div>
    )
}
