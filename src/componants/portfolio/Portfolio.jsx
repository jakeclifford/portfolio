import React from 'react'
import "./portfolio.scss"
import Carousel from 'react-material-ui-carousel'
import quizMain from "./quiz.png"
import splitterMain from "./Splitter.png"
import spacexMain from "./spacex.png"
import qodeMain from "./qode.png"
import qodeLogo from "./qode.svg"


function Example(props)
{
    var items = [
        {
            name: "qode.design",
            logo: qodeLogo,
            description: "Design application built with React using functional components, ES6 syntax and SCSS. Use of REST API's to generate custom QR codes for users.",
            image: qodeMain,
            link: "https://qode.design",
            github: "https://github.com/jakeclifford/qode"
        },
        {
            name: "SpaceX Launches",
            logo: "",
            description: "Web app built with React that tracks recent and upcoming launches from space X",
            image: spacexMain,
            link: "https://spacex-five.vercel.app",
            github: "https://github.com/jakeclifford/spacex"
        },
        {
            name: "Quiz Smash",
            logo: "",
            description: "Quiz app built with react making use of useState and useEffect",
            image: quizMain,
            link: "https://quiz-smash.vercel.app/",
            github: "https://github.com/jakeclifford/quiz-smash"
        },
        {
            name: "Splitter",
            logo: "",
            description: "Web app to split bills, Created with just HTML, CSS and Javascript",
            image: splitterMain,
            link: "https://jakeclifford.github.io/splitter/",
            github: "https://github.com/jakeclifford/splitter"
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
                            <div className="project-header">
                                <h2>{props.item.name}</h2>
                                {props.item.logo !== "" && <img class="logo" src={props.item.logo}></img>}
                            </div>
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
            <div className='container'>
                <div className="carousal">
                    <Example />
                </div>
            </div>
        </div>
    )
}

  
