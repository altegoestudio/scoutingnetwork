import {NavLink, Link, useNavigate} from 'react-router-dom';
import logo from "../img/logo-white.png";
import hamburger from '../img/hamburger.png';

export default function Header(){
   const navigate = useNavigate();

   const handleLogout = () => {
     navigate("/")
   }

   const goToAnchor = (e,val) => {
     let anchorElement = document.getElementById(val);
     e.preventDefault();
     console.log(val);
     anchorElement.scrollIntoView({behavior:'smooth'});
   }

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
      <div className="botonera-login">
        <div >
          <Link to='/login' >
            <button
              className="header_container_nav_btn header_container_nav_btn-login"
              onClick={handleLogout}
            >Login</button>
          </Link>
          <Link to='/register' >
            <button
              className="header_container_nav_btn header_container_nav_btn-register"
              onClick={handleLogout}
            >Register</button>
          </Link>
          </div>
          <div className='header_container_hamburger'>
            <img src={hamburger}/>
          </div>
      </div>

     </div>
    </header>
  )
}
