import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/header.js";
import Banner from "./components/banner.js";
import Cases from "./components/cases.js";
import IntroOverlay from "./components/introOverlay.js"

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Set css viriable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // prevent flashing
    gsap.to("body", 0, {
      css: { visibility: "visible" }
    });

    // On load timeline
    const tl = gsap.timeline();

    tl.fromTo(".line span", {y: 100, delay: 1, skewY: 7}, {
      duration: 1.8,
      y: 0,
      ease: "power4.out",
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    }).to(".overlay-top", {
      duration: 1.6,
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4
      }
    }).to(".overlay-bottom", {
      duration: 1.6,
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    }).to(".intro-overlay", {
      duration: 0,
      css: { display: "none" }
    }).from(".case-image img", {
      duration: 1.6,
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      }
    });
  }, []);

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
