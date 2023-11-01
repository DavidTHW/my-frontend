import React from 'react'
import "./components.css"
import ProfileIcon from "./../logos/profile.png"

const Footer = () => {
  return (
    
      <div className='footer'>
        <div className='contact-me'>
        <a href="mailto:david.tonghw@gmail.com"><img src={ProfileIcon} /> Contact me </a>
        </div>
        <div>
        <img src=''/> About me
        </div>
        <div>
        <img src=''/> About me
        </div>
      </div>
  
  )
}

export default Footer