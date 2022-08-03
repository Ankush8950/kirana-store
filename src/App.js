import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import About from "./About/About";

function App() {
  const [isActive, setIsActive] = useState(false);
  // const handleClick = () => {
  //   setIsActive(current => !current);
  // };

  return (
    <div className="app-page">
      <Header />

      <div className="menu-link">
        <div className="link">
          <Link to="/menu">
            <button
              style={{
                color: isActive ? "#FFFFFF" : "#6A5BFF",
                backgroundColor: isActive ? "#6A5BFF" : "#F5F5F5",
              }}
              onClick={() => setIsActive(true)}
            >
              Menu
            </button>
          </Link>
          <Link to="/about">  
            <button
              style={{
                color: isActive ? "#6A5BFF" : "#FFFFFF",
                backgroundColor: isActive ? "#F5F5F5" : "#6A5BFF",
              }}
              onClick={() => setIsActive(false)}
            >
              About
            </button>
          </Link>
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
