import React from "react";
import nursery from "../assets/plant-nursery.jpg"

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="about">
            <span>Our Story</span>
            <h3>We strive to connect your living space with nature.</h3>
            <p>Our journey started with a simple premise, help people bring a little life to their home. We began growing small plants perfectly suited for the home. Our customers were delighted and just like a plant, we slowly started to grow. As a result, we expanded our options to provide more plants for every part of a living space.</p>
          </div>
          <div className="about-img">
            <img src={nursery} alt="Plant nursery with a variety of plants" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
