import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                  <a className="nav-link" href="/portfolio">
                    Portfolio
                  </a>
                  <a
                    className="nav-link"
                    href="/About"
                    aria-current="page"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Navbar;