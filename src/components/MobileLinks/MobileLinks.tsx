import React from 'react';
import { NavLink} from 'react-router-dom';

const MobileLinks: React.FC = () => {
    return (
        <section className="mobile_container_nav_links" role="navigation" aria-describedby="mobile_container_nav_links">
        <ul>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/products'>Find a Hat</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/cart'>Cart</NavLink>
              </li>
            </ul>
        </section>  
    )
}

export default MobileLinks;