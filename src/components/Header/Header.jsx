import React from 'react'
import './header.css'


const Header = () => {
    return(
        <div>
            <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav__logo">
        <img src="../../images/logo.png" alt="logo image" />
        Pizzoo
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              My account
            </a>
          </li>
          <li className="nav__item">
            <a href="#pizzas" className="nav__link">
              Pizzas
            </a>
          </li>
          <li className="nav__item">
            <a href="#cart" className="nav__link">
              Cart
            </a>
            
          </li>
        </ul>
        <div className="nav__close" id="nav-close">
          <i className="fa-solid fa-xmark" />
        </div>
        <img src="../../images/pizza-slice.png" alt="nav image" className="nav__img-1" />
      </div>
      <div className="nav__buttons">
        <i className="fa-regular fa-moon change-theme" id="theme-button" />
        <div className="nav__toggle" id="nav-toggle">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </nav>
  </header>
        </div>

    )
}
export default Header;