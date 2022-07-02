import React from "react";
import big from "../assets/big-plants.jpg";

const plants = [
  {
    id: 1,
    img: "small-plant",
    desc: "Small plants in a pot",
    title: "Small Plants",
    categories: "Indoors",
    price: "$10 - $15"
  },
  {
    id: 2,
    img: "medium-plant",
    desc: "Medium sized plants",
    title: "Medium Plants",
    categories: "Indoors, Hybrid, Outdoors",
    price: "$20 - $25"
  },
  {
    id: 3,
    img: "large-plant",
    desc: "Large plant",
    title: "Large Plants",
    categories: "Indoors, Hybrid, Outdoors",
    price: "$30 - $40"
  }
];

const Plants = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="plant-content">
            <h2 className="plant-heading">Happy Plants</h2>
            <div className="plant-cover">
              <img src={big} alt="Plant nursery with a variety of plants" />
            </div>
            <div className="plant-options">
              {plants.map(plant => (
                <div className="plant" key={plant.id}>
                  <div className="plant-image">
                    <img
                      src={require(`../assets/${plant.img}.jpg`)}
                      alt={plant.desc}
                    />
                  </div>
                  <div className="plant-info">
                    <h3>{plant.title}</h3>
                    <span>{plant.categories}</span>
                    <p>{plant.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plants;
