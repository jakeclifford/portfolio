import Topnav from "./componants/topnav/Topnav"
import Main from "./componants/main/Main"
import Contact from "./componants/contact/Contact"
import Portfolio from "./componants/portfolio/Portfolio"
import About from "./componants/about/About"
import Menu from "./componants/menu/Menu"
import "./app.scss"
import { useState } from "react"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className="app">
      <Topnav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Main />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
