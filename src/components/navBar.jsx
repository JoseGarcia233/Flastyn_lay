import React, {useState} from 'react'
import '../css/navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
  const[active, setActive] = useState("nav_men");
  const[toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {

    active === "nav_men" ? setActive("nav_men nav__active") : setActive("nav_men");

    //togleIco
    
    toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");

  };

  return (
    <nav className="nav">
      <a href='/#'className="brand">Flastyn</a>
      
      <ul className={active}>
        <li className=" nav__itm">
          <Link  to='/' className=" nav__link" >HOME</Link>
          </li>
        <li className="nav__itm"><a href='/#' className="nav__link">lOGIN</a></li>
        <li className="nav__itm"><a href='/#' className="nav__link">SINGUP</a></li>
        <li className="nav__itm">
          <Link  to='/addPost' className="nav__link">Post</Link>
          </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>

      </div>
    </nav>
  )
}

export default  Navbar;