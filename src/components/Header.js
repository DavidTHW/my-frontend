import React , {useState } from 'react'
import "./components.css"
import HeaderIcon from "../logos/header-icon.png"

const Header = () => {

const [tempName , setTempName] = useState('Unknown')

  return (
    <div className='header'>
      <div className='logo-div'>
      <img src={HeaderIcon} alt='logo'/>
      </div>
     
      <div>
      {/* <img src='' alt='nav'/> */}
      <>Movies</>
      </div>
      <div>
      {/* <img src='' alt='nav2'/> */}
      <>Reviews</>
      </div>
      
      <div className='profile'>
      {/* <img src='' alt='profile'/> */}
      <div>Welcome : {tempName}</div>
      </div>

    </div>
  )
}

export default Header