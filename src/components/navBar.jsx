import React, {useState} from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { signOut } from "firebase/auth";
function Navbar() {
  const[active, setActive] = useState("nav_men");
  const[toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [user] = useAuthState(auth);

  const navToggle = () => {

    active === "nav_men" ? setActive("nav_men nav__active") : setActive("nav_men");

    //togleIco
    
    toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");

  };

  return (
    <nav className="nav">
      <a href='/#'className="brand">Flastyn Lay</a>
        <ul className={active}>
          <li className=" nav__itm">
              <Link  to='/' className=" nav__link" >Home</Link>
              </li>
                  {/* <li className="nav__itm">
                    <Link to='/logIn' className="nav__link">Login</Link>
                    </li> */}
                  <li className="nav__itm">
                  <Link to='/SingUp' className="nav__link">Signup</Link>
                </li>
              {/* <li className="nav__itm">
            <Link  to='/addPost' className="nav__link">Post Form</Link>
          </li> */}
      </ul>
      <div>
        {
          user &&(
            <>
              <span className='pe-4'>
                User: {user.displayName|| user.email} 
              </span>
              <button  class="btn btn-danger btn-sm me-3" onClick={()=>{signOut(auth)}}>Logout</button>
            </>
          )
        }
      </div>
        
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>

      </div>
    </nav>
  )
}

export default  Navbar;