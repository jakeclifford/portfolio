import React, {useEffect, useState} from 'react'
import "./about.scss"
import Display from "./Display.svg"
import Frontend from "./Frontend-display.png"
import Blockchain from "./Blockchain-display.svg"
import Ui from "./Ui-display.svg"
import Cs from "./Cs-display.svg"




export default function About() {

    const [display, setDisplay] = useState(Display)

    useEffect(() => {
        const displays = [Frontend, Ui, Blockchain, Cs]
        for (let item in displays){
            setDisplay(item)
            setTimeout(2000)
        }
        setDisplay(Display)
    }, [])

    return (
        <div className="about" id="about">
            <h1>SKILLS</h1>
            <div className="skills">
                <div className={display == Frontend ? "skill skill-selected" : "skill"} onClick={() => setDisplay(Frontend)}>
                    <h2>Frontend</h2>
                </div>
                <div className={display == Ui ? "skill skill-selected" : "skill"} onClick={() => setDisplay(Ui)}>
                    <h2>UI/UX</h2>
                </div>
                <div className={display == Blockchain ? "skill skill-selected" : "skill"} onClick={() => setDisplay(Blockchain)}>
                    <h2>Web3</h2>
                </div>
                <div className={display == Cs ? "skill skill-selected" : "skill"} onClick={() => setDisplay(Cs)}>
                    <h2>CS</h2>
                </div>
            </div>
            <div className="display">
                <img src={display} />
            </div>

        </div>
    )
}
