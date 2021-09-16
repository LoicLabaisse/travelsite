import React, {useState} from "react";
import "./navbar.css";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

const Navbar = () => {

  const [showMenu, setShowMenu]= useState(false);
  const [scroll,setScroll] = useState(false);

  const show = () =>{
    setShowMenu(!showMenu)
  }

  const scrollHeader = () =>{
    if(window.scrollY >= 100){
      setScroll(true)
    }
    else{
      setScroll(false)
    }
  }

  window.addEventListener("scroll", scrollHeader)

  return (
    <div className="Navbar">
      <header className={scroll ? "header active" : "header"} id="header">
        <nav className="nav container">
          <a href="#home" className={scroll ? "nav__title active":"nav__title"}>
            Travel
          </a>

          <div className={showMenu ? "nav__menu-active":" nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a onClick={show} href="#home" className="nav__link">
                 <AiIcons.AiFillHome className="nav__logo"/> Accueil
                </a>
              </li>
              <li className="nav__item">
                <a onClick={show} href="#about" className="nav__link">
                 <MdIcons.MdDescription className="nav__logo"/> A propos
                </a>
              </li>
              <li className="nav__item">
                <a onClick={show} href="#discover" className="nav__link">
                 <RiIcons.RiCompassDiscoverFill className="nav__logo"/> Découvrir
                </a>
              </li>
              <li  className="nav__item" >
                <a onClick={show} href="#place" className="nav__link">
                 <MdIcons.MdPlace className="nav__logo"/> Lieux
                </a>
              </li>
            </ul>
            <AiIcons.AiOutlineClose onClick={show} className="nav__close" id="nav-close" />
          </div>

          <div className={scroll ? "navbar-burger active":"navbar-burger"}>
            <AiIcons.AiOutlineMenu onClick={show} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
