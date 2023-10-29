import React from 'react'
import "./components.css"
import HeaderIcon from "../logos/header-icon.png"

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-div'>
      <img src={HeaderIcon} alt='logo'/>
      </div>
     
      <div>
      <img src='' alt='nav'/>
      <>temp nav</>
      </div>
      <div>
      <img src='' alt='nav2'/>
      <>temp nav</>
      </div>
      
      <div className='profile'>
      <img src='' alt='profile'/>
      <div>Placeholder name</div>
      </div>

    </div>
  )
}

export default Header