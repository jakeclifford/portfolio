import React from 'react'
import "./portfolio.scss"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image1 from "./Limitless.png"
import Image2 from "./quiz.png"
import Image3 from "./Splitter.png"
import Image4 from "./spacex.png"
import Image5 from "./blackjack.png"
import Image6 from "./qode.png"
import { Google } from '@mui/icons-material'

function Example(props)
{
    var items = [
        {
            name: "qode.design",
            description: "React application ",
            image: Image6,
            link: "https://qode.design",
            github: "https://github.com/jakeclifford/qode"
        },
        {
            name: "Blackjack Training",
            description: "Built using vanilla javascript",
            image: Image5,
            link: "https://jakeclifford.github.io/blackjackTrainer/",
            github: "https://github.com/jakeclifford/blackjackTrainer"
        },
        {
            name: "Quiz Smash",
            description: "Quiz app built with react making use of useState and useEffect",
            image: Image2,
            link: "https://quiz-smash.vercel.app/",
            github: "https://github.com/jakeclifford/quiz-smash"
        },
        {
            name: "Lauch Tracker",
            description: "Web app that tracks recent and upcoming launches from space X",
            image: Image4,
            link: "https://jakeclifford.github.io/spaceXLaunches",
            github: "https://github.com/jakeclifford/spaceXLaunches"
        },
        {
            name: "Splitter",
            description: "Web app to splic bills, Created with just HTML, CSS and Javascript",
            image: Image3,
            link: "https://jakeclifford.github.io/splitter/",
            github: "https://github.com/jakeclifford/splitter"
        },
        {
            name: "LimitlessDAO",
            description: "A decentralised and trustless voting system that requires an NFT membership to vote on proposals. REQUIRES METAMASK WALLET ON RINKEBY TEST NETWORK",
            image: Image1,
            link: "https://limitless-dao.vercel.app/",
            github: "https://github.com/jakeclifford/LimitlessDAO"
        }
    ]

    return (
        <Carousel navButtonsAlwaysVisible='true' animation='slide' autoPlay={false} >
            
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
                <div className="project-container">
                    <div className="project-content">
                        <div className="project-left">
                            <h2>{props.item.name}</h2>
                            <p className="project-description">{props.item.description}</p>
                            <div className="project-buttons">
                                <a href={props.item.link} target="_blank"><button>View Project</button></a>
                                <a href={props.item.github} target="_blank"><button>View Code</button></a>
                            </div>
                        </div>
                        <div className="project-right">
                            <img className='project-image' src={props.item.image} />
                        </div>
                    </div>
                </div>
        
    )
}



export default function Portfolio(props) {
    return (
        <div className="portfolio" id="portfolio">
            <h1>PROJECTS</h1>
            <div className="carousal">
                <Example />
            </div>
        </div>
    )
}

  
