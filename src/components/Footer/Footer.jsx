import React from 'react'
import './footer.css'

const Footer=()=>{
    return(
        <footer className="footer">
    <div className="footer__container container grid">
      <div>
        <a href="" className="footer__logo">
          <img src="../../images/logo.png" alt="logo image" />
          PizzaHut
        </a>
        <p className="footer__description">
          Food for the body is not <br />
          enough. There must be food <br />
          for the soul.
        </p>
      </div>
      <div className="footer__content">
        <div>
          <h3 className="footer__title">Main Menu</h3>
          <ul className="footer__links">
            <li>
              <a href="" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Menus
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Offer
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Information</h3>
          <ul className="footer__links">
            <li>
              <a href="" className="footer__link">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Order 
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Videos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Address</h3>
          <ul className="footer__links">
            <li className="footer__information">
              Address <br />
              here
            </li>
            <li className="footer__information">9AM - 11PM</li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Social Media</h3>
          <ul className="footer__links footer__social">
            <a
              href="https://www.facebook.com/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="fa-brands fa-facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="fa-brands fa-square-instagram" />
            </a>
            <a
              href="https://twitter.com/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="fa-brands fa-twitter" />
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer__copy container">
      © Copyright lightcode. All rights reserved
    </div>
  </footer>
    )
}
export default Footer