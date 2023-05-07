import Topnav from "./componants/topnav/Topnav"
import Main from "./componants/main/Main"
import Contact from "./componants/contact/Contact"
import Portfolio from "./componants/portfolio/Portfolio"
import About from "./componants/about/About"
import Menu from "./componants/menu/Menu"
import "./app.scss"
import { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import Services from "./componants/services/Services"

function App() {

  
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])
  
  return (
    
    <div className="app">
      {loading == true &&
        <div className="loader">
          <div className="load-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 375 373">
              <g id="surface1" transform="translate(0 -21.27)">
                <path id="Exclusion_1" data-name="Exclusion 1" d="M325,373H50A49.959,49.959,0,0,1,0,323V50A49.958,49.958,0,0,1,50,0H325a49.958,49.958,0,0,1,50,50V323a49.959,49.959,0,0,1-50,50ZM158.3,298.8h0a94.377,94.377,0,0,0,17.42,20.861,100.259,100.259,0,0,0,21.966,14.9,115.445,115.445,0,0,0,51.592,11.92,122.4,122.4,0,0,0,34.669-4.941,106.93,106.93,0,0,0,31.385-14.988,93.048,93.048,0,0,0,24.533-25.284,98.162,98.162,0,0,0,14.112-35.829H315.522a69.021,69.021,0,0,1-10.006,21.313A62.319,62.319,0,0,1,290.3,301.894a65.574,65.574,0,0,1-18.786,9.03,72.1,72.1,0,0,1-20.713,2.994,77.957,77.957,0,0,1-13.139-1.112,74.285,74.285,0,0,1-12.7-3.348,66.918,66.918,0,0,1-22.492-13.474,64.59,64.59,0,0,1-15.934-22.627,82.455,82.455,0,0,1-6.169-31.919c.907-6.124,1.554-12.649,1.922-19.394a70.051,70.051,0,0,1,9.747-23.695,64.307,64.307,0,0,1,16.053-16.841,69.025,69.025,0,0,1,20.186-10.055,74.6,74.6,0,0,1,22.146-3.336,72.675,72.675,0,0,1,20.774,2.994,66.446,66.446,0,0,1,18.918,9.03,62.6,62.6,0,0,1,15.348,15.137,68.307,68.307,0,0,1,10.065,21.314h38.453a99.587,99.587,0,0,0-13.993-35.727,93.843,93.843,0,0,0-24.271-25.432,105.632,105.632,0,0,0-31.123-15.207,121.309,121.309,0,0,0-70.1.242,105.826,105.826,0,0,0-31.823,15.939V26.514H51.272V67.975H136.9v139.7a172.059,172.059,0,0,1-1.21,21.075,113.46,113.46,0,0,1-3.886,18.831A80.647,80.647,0,0,1,124.863,264a66.831,66.831,0,0,1-10.385,13.818,69.322,69.322,0,0,1-14.208,11.051,89.759,89.759,0,0,1-18.413,8.109,134.432,134.432,0,0,1-23,4.993,214.109,214.109,0,0,1-27.971,1.7c-4.885,0-10.422,0-15.86-.451v42.814c2.324,0,4.776.119,7.148.234,2.3.111,4.462.216,6.447.216a299.031,299.031,0,0,0,44.352-3.046c6.638-1,13.042-2.277,19.035-3.783a160.042,160.042,0,0,0,17.025-5.267,129.732,129.732,0,0,0,15.078-6.735,110.113,110.113,0,0,0,13.195-8.187,99.5,99.5,0,0,0,11.375-9.623A96.857,96.857,0,0,0,158.3,298.8Z" transform="translate(0 21.27)" fill="white"/>
              </g>
            </svg>
            <ClipLoader loading={loading} color={'white'} size={40}/>
          </div>
        </div>}
      {loading == false && <Topnav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Main />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
