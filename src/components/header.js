import {NavLink, Link} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import logo from "../img/logo-white.png";
import { useState, useEffect } from 'react';
import hamburger from '../img/hamburger.png';

export default function Header(props){
   var userData = props.userData;
   console.log(userData);
   const auth = getAuth();


   const goToAnchor = (e,val) => {
     let anchorElement = document.getElementById(val);
     e.preventDefault();
     anchorElement.scrollIntoView({behavior:'smooth'});
   }

   const handleLogout = () => {
     auth.signOut();
   }

   useEffect(() => {
     userData = props.userData;
     console.log(userData);
   }, [props.userData]);

  return(
    <header className="header">
     <div className="header_container">
      <div className="header_container_logo">
        <Link className='noActive' to="/"><img src={logo}/></Link>
      </div>
      <div className="header_container_nav">
        <ul>
          <li>
            <NavLink
            className={({isActive}) => (isActive ? "active" : "noActive")}
            to="/">Home</NavLink>
          </li>
          <li>
            <a
              href='/'
              onClick={(e) => goToAnchor(e,'about-us')}
              >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href='/'
              onClick={(e) => goToAnchor(e,'plans')}
              >
              Planes
            </a>
          </li>
          <li>
            <a
              >
              Contacto
            </a>
          </li>
          <li>
            <NavLink
            className={({isActive}) => (isActive ? "active navhilight" : "noActive navhilight")}
            to="/players">Data Base</NavLink>
          </li>
        </ul>
      </div>
      {!userData &&
        <div className="botonera-login">
            <div >
              <Link to='/login' >
                <button
                  className="header_container_nav_btn header_container_nav_btn-login"

                >Login
                </button>
              </Link>
              <Link to='/register' >
                <button
                  className="header_container_nav_btn header_container_nav_btn-register"

                >Register
                </button>
              </Link>
            </div>
            <div className='header_container_hamburger'>
              <img src={hamburger}/>
            </div>
          </div>
      }
      {userData &&
        <div className='user'>
          <div className='user_name'>{userData.displayName}</div>
          <button onClick={handleLogout} className="user_btn">Logout</button>
        </div>
      }

     </div>
    </header>
  )
}
