import React from "react";
import "./Menu.css"
import { BiSearch } from 'react-icons/bi';
import Card from "./Card/Card";
import store from "./Card/Cardapi"

function Menu() {
  return (
    <div className="menu">
      <form className="form">
        <input type="text" placeholder="Search for Products or Services" />
        <button><BiSearch /></button>
      </form>

      <div className="store">
          {
              store.map((val,index)=>{
                  return <Card
                  key={index}
                  img={val.img}
                  name={val.name}
                  weight={val.weight}
                   />
              })
          }
      </div>
    </div>
  );
}

export default Menu;
