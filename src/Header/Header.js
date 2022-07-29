import React from "react"
import "./Header.css"
import { IoIosArrowBack } from 'react-icons/io';
import { TiArrowForward } from 'react-icons/ti';
import { GrLocationPin } from 'react-icons/gr';
import kiranastore from "../image/Rectangle 368.png"
import icons from "../image/Group 460.png"

function Header() {
  return (
    <div className="Header">
        <div className="store">
          <div className="top-icon">
              <IoIosArrowBack />
              <TiArrowForward />
          </div>
          <div className="container">
            <img src={kiranastore} alt="kirana store" />
            <div className="store-data">
              <h1>Chamundeshwari Kirana Store</h1>
              <div className="location">
              <div className="open">
                 <div className="ellipse">
                   <div className="smal-ellipse"></div>
                 </div>
                   <h2>Open</h2>
                 </div>
                 <div className="location-icon">
                 <div className="loc-icon">
                   <GrLocationPin />
                 </div>
                   <h3>2.3 km</h3>
                 </div>
                 <div className="location-icons">
                   <img src={icons} alt="location" />
                 </div>
              </div>
              <div className="store-name">
                <button>Groceries</button>
                <button>Fruits</button>
                <button>Vegetables</button>
                <button>Groceries</button>
                <button>Fruits</button>
                <button>Vegetables</button>  
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;
