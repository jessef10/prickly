import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";

// Components
import Header from "./components/header.js";
import Navigation from "./components/navigation.js"

// Pages
import Home from "./pages/home.js";
import CaseStudies from "./pages/caseStudies.js";
import Approach from "./pages/approach.js";
import Services from "./pages/services.js";
import About from "./pages/about.js"

// Routes

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about-us", name: "About Us", Component: About }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // prevent flashing
  gsap.to("body", 0, {
    css: { visibility: "visible" }
  });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerHeight
  });

  useEffect(() => {
    // Grab inner height of window for mobile screens when dealing with vh
    let vh = dimensions.height * 0.01;
    // Set css viriable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      <Header  dimensions={dimensions}/>
      <div className="App">
        <Routes>
          {routes.map(({path, Component}) => {
            return <Route key={path} exact path={path} element={<Component />} />
          })}

        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
