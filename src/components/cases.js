import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    subtitle: "Indoors",
    title: "Plants in a fun but elegant pot, perfect for your home",
    img: "home",
    desc: "Small plant in decorative pot"
  },
  {
    id: 2,
    subtitle: "Hybrid",
    title: "Plants suited for any space, outdoors or indoors",
    img: "space",
    desc: "Variety of size plants in a porch"
  },
  {
    id: 3,
    subtitle: "Outdoors",
    title: "Plants to keep your garden space full of life",
    img: "outdoor",
    desc: "Plants living in an garden"
  }
]

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
      <Link to="/plants">
        <div className="row">
          {caseStudies.map(caseItem => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.jpg`)}
                  alt={caseItem.desc}
                />
              </div>
            </div>
          ))}
        </div>
      </Link>
      </div>
    </section>
  );
};

export default Cases;
