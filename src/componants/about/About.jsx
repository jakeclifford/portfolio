import React, {useState} from 'react'
import "./about.scss"
import Display from "./Display.svg"
import Frontend from "./Frontend-display.svg"
import Blockchain from "./Blockchain-display.svg"
import Ui from "./Ui-display.svg"
import Cs from "./Cs-display.svg"
import FrontendIcon from "./icons/frontend.svg"
import UiIcon from "./icons/UI.svg"
import BlockchainIcon from "./icons/blockchain.svg"
import CsIcon from "./icons/CS.svg"



export default function About() {

    const [display, setDisplay] = useState(Display)

    return (
        <div className="about" id="about">
            <div className="skills">
                <div className="skill" onClick={() => setDisplay(Frontend)}>
                    <button>Frontend</button>
                </div>
                <div className="skill" onClick={() => setDisplay(Ui)}>
                    <button>UI/UX</button>
                </div>
                <div className="skill" onClick={() => setDisplay(Blockchain)}>
                    <button>Web3</button>
                </div>
                <div className="skill" onClick={() => setDisplay(Cs)}>
                    <button>Computer Science</button>
                </div>
            </div>
            <div className="display">
                <img src={display} />
            </div>
        </div>
    )
}
