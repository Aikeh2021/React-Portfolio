import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    
  }
  
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a
                className="navbar-brand col-md-auto"
                href="https://github.com/Aikeh2021"
                target="blank"
              >
                View My Github |
              </a>
              <a
                className="navbar-brand col-md-auto"
                href="https://www.linkedin.com/in/ashley-ik/"
                target="blank"
              >
                Check Out My LinkedIn |
              </a>
              <a
                className="navbar-brand col-md-auto"
                href="mailto:ashley.ikeh21@gmail.com"
                target="blank"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
