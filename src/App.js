import React from "react"
import "./App.css"
import Header from "./Header/Header";
import {Link} from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Menu from "./Menu/Menu" 
import About from "./About/About"


function App() {
  return (
   <div>
   <Header />


    <div className="menu-link">
      <div className="link">
      <Link  to="/menu"><button>Menu</button></Link>
      <Link  to="/about"><button>About</button></Link>
      </div>
    </div>

    <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
