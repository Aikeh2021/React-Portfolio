import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-link" activeClassName="active" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" activeClassName="active" to="/projects">
                    Projects
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/About"
                  >
                    About
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Navbar;