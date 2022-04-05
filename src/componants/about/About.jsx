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
                <div className="skill" onMouseEnter={() => setDisplay(Frontend)} onMouseLeave={() => setDisplay(Display)}>
                        <img src={FrontendIcon} alt="frontend" />
                </div>
                <div className="skill" onMouseEnter={() => setDisplay(Ui)} onMouseLeave={() => setDisplay(Display)}>
                    <img src={UiIcon} alt="Ui" />
                </div>
                <div className="skill" onMouseEnter={() => setDisplay(Blockchain)} onMouseLeave={() => setDisplay(Display)}>
                    <img src={BlockchainIcon} alt="blockchain" />
                </div>
                <div className="skill" onMouseEnter={() => setDisplay(Cs)} onMouseLeave={() => setDisplay(Display)}>
                    <img src={CsIcon} alt="Cs" />
                </div>
            </div>
            <div className="display">
                <img src={display} />
            </div>
        </div>
    )
}
