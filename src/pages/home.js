import React, { useEffect, useState } from "react";
import gsap from "gsap";
import IntroOverlay from "../components/introOverlay.js"
import Banner from "../components/banner.js";
import Cases from "../components/cases.js";

const homeAnimation = (completeAnimation) => {
  let tl = gsap.timeline();

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
    },
    onComplete: completeAnimation
  });

}

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    // On load timeline
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
