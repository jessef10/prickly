import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as UpArrow } from '../assets/arrow-up-circle.svg';
import gsap from 'gsap';

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false});
  let location = useLocation();

  useEffect(() => {
    let tl = gsap.timeline();
    if(menuState.menuOpened === true) {
      // Run open menu animation
      tl.to("body", {
        duration: 0.01,
        css: { overflow: "hidden" }
      }).to(".App", {
        duration: 1,
        y: dimensions.width <= 654 ? "70vh" : dimensions.height / 2,
        ease: "expo.inOut"
      }).to(".hamburger-menu span", {
        duration: 0.6,
        delay: -1,
        scaleX: 0,
        transformOrigin: "50% 0%",
        ease: "expo.inOut"
      }).to(".hamburger-menu-close", {
        duration: 0.6,
        delay: -0.8,
        css: {
          display: "block"
        }
      });
    } else {
      // Run clsoe menu animation
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut"
      }).to(".hamburger-menu span", {
        duration: 0.6,
        delay: -0.6,
        scaleX: 1,
        transformOrigin: "50% 0%",
        ease: "expo.inOut"
      }).to(".hamburger-menu-close", {
        duration: 0,
        delay: -0.7,
        css: {
          display: "none"
        }
      }).to("body", {
        css: {
          overflow: "auto"
        }
      });
    }
  }, [menuState.menuOpened]);

  useEffect(() => {
    setMenuState({ menuOpened: false });
  }, [location]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">PRICKLY.</NavLink>
          </div>
          <div className="nav-toggle">
            <div className="hamburger-menu" onClick={() => setMenuState({ menuOpened: true})}>
              <span></span>
              <span></span>
            </div>
            <div className="hamburger-menu-close" onClick={() => setMenuState({ menuOpened: false})}>
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
