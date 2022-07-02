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
                <NavLink to="/plants">
                  Plants
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us">
                  Our Story
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
                  Phone
                </li>
                <li>
                  123-456-789
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Location</li>
                <li>123 Street Ln</li>
                <li>City, State</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
