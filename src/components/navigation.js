import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">
              Menu
            </div>
            <ul className="nav-links">
              <li>
                <NavLink to="/approach">
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">
              Contact
            </div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">
                  Email
                </li>
                <li>
                  <NavLink to="/contact">
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/audit">
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Location</li>
                <li>123 Street Ln</li>
                <li>City, State</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Something</li>
                <li>Something</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
