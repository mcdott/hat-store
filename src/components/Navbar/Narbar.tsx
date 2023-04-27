import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css'
import {Container, Row} from 'reactstrap'
import logo from "../../assets/hatlogo.png"
import MobileLinks from '../MobileLinks/MobileLinks';

const Navbar: React.FC = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const handleMobileMenu = () => {setShowMobileLinks(!showMobileLinks)}

  return (
    <header className='header'>
      <Container>
        <Row>

        {/* Mobile Section */}
        <section className="mobile_container" role="navigation">
            <section className="mobile_menu_header">
            <section className='logo_headers'>
            <img className="logo" src={logo} alt="logo" />
            </section>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24"
            onClick={handleMobileMenu}>
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#000"></path>
            </svg>
            </section>
            {showMobileLinks ? <MobileLinks/>  : null}
            </section>

          {/* Desktop Version */}
          <div className="nav_wrapper">
            <div className="image_container">
              <img className="logo" src={logo} alt="logo" />
            </div>
              <div className="navigation">
                <ul className="menu">
                  <li className="nav_item">
                    <NavLink to='home'>Home</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='products'>Shop for a Hat</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='cart'>Cart</NavLink>
                  </li>
                </ul>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Navbar;