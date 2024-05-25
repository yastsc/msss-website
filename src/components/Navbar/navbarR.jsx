import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from '../../assets/hamburger.svg?react'
import './navbarR.css' // ReactComponent as 

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/home"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/aboutms"> About MS </NavLink>
            </li>
            <li>
              <NavLink to="/aboutmsss"> About MSSS </NavLink>
            </li>
            <li>
              <NavLink to="/msssmembers"> MSSS Members </NavLink>
            </li>
            <li>
              <NavLink to="/mscares"> MS Care Support Group </NavLink>
            </li>
            <li>
              <NavLink to="/media"> News & Media </NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact Us </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar