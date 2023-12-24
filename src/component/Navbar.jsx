import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav>
          <NavLink exact  activeClassName="active_class" to="/">Home</NavLink>
          <NavLink exact  activeClassName="active_class" to="/hollywood">hollywood</NavLink>
          <NavLink exact  activeClassName="active_class" to="/bollywood">bollywood</NavLink>
      </nav>
    </div>
  )
}

export default Navbar