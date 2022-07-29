import React from 'react'
import "./About.css"
import { GoLocation } from 'react-icons/go';


function About() {
  return (
    <>
    <div className='about'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nisi dolores tempora alias dolorum, iusto deserunt dicta beatae vitae sint ipsam nam mollitia laboriosam porro illo quaerat consectetur eos molestiae?</p>
    </div>

    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-data">
        <GoLocation />
        <p>Sahakar Nagar, Bangalore, 560000</p>
        <button>Map</button>
      </div>
    </div>
    </>
  )
}

export default About