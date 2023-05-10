import React, {useEffect, useRef} from 'react'
import "./Main.scss"
import jake from "./jake.png"
import arrow from "./down.svg"
import Graphic1 from "./graphic1.png"
import { init } from 'ityped'


export default function Main() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1000,
            strings: ["Shopify Developer.", "Front-end Devloper.", "UI Designer."]
        })
    },[])
    return (
        
        <div className="main" id="main">
            <div className="main-content">
                <div className="info" id="info">
                    <h1 className="test">Hi There,<br></br>I'm Jake</h1>
                    <h2><span ref={textRef}></span></h2>
                    <a  href="#services">
                        <img src={arrow} alt="down arrow" className="bounce"></img>
                    </a>
                </div>
                <div className="wrapper">
                    <div className="left">
                    </div>
                    <div className="right">
                        <img src={jake} alt="me" />
                    </div>
                </div>
            </div>
            
            <img id='graphic1' src={Graphic1} alt="abstract graphic" />
                
            
        </div>
    )
}
