import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
   <>
    <nav>Get Ready To Completer Your Daily Goals</nav>
    <div className="headerelement">
      <Link to='/'>Home</Link>
      <Link to="/About">About Us</Link>
      <Link to='/Contact'>Contact Us</Link>

    </div>
    </>
  )
}

export default Header