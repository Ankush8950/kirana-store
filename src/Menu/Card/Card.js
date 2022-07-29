import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={props.img} alt="itemimage" />
        </div>
        <div className="item-name">
            <h3>{props.name}</h3>
        </div>
        <div className="item-weight">
            <h3>{props.weight}</h3>
        </div>
    </div>
  )
}

export default Card