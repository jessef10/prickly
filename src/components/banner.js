import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Add a little life to</span>
            </div>
            <div className="line">
              <span>your home.</span>
            </div>
          </h2>
          <div className="btn-row">
            <NavLink to="/about-us">
              More About us
              <RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
