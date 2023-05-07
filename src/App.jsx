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
      <Topnav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Main />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
