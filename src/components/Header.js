import React , {useState } from 'react'
import "./components.css"
import HeaderIcon from "../logos/header-icon.png"
import {Link} from "react-router-dom"

const Header = () => {

const [tempName , setTempName] = useState('Unknown')

  return (
    <div className='header'>
      <div className='logo-div'>
      <img src={HeaderIcon} alt='logo'/>
      </div>
     <Link to="/">
      <div>
      {/* <img src='' alt='nav'/> */}
      <Link to="/">
      <>Movies</>
      </Link>
      </div>
      </Link>
      <Link to="/series">
      <div>
      {/* <img src='' alt='nav2'/> */}
      <>Series</>
      </div>
      </Link>
      
      <div className='profile'>
      {/* <img src='' alt='profile'/> */}
      <div>Welcome : {tempName}</div>
      </div>

    </div>
  )
}

export default Header