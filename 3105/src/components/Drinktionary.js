import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Drinktionary.css';
import Navbar from './Nav';
import Bad_Touch from '../image/drinks/Bad_Touch.png';
import Beer from '../image/drinks/Beer.png';
import Bleeding_Jane from '../image/drinks/Bleeding_Jane.png';
import BloomLight from '../image/drinks/BloomLight.png';
import BlueFairy from '../image/drinks/BlueFairy.png';
import CreviceSpike from '../image/drinks/CreviceSpike.png';

const drinksData = [
  {
    name: "Bad Touch",
    description: "It's a Sour, Classy and Vintage drink costing $250.",
    image: Bad_Touch
  },
  {
    name: "Beer",
    description: "It's a Bubbly, Classic and Vintage drink costing $200.",
    image: Beer
  },
  {
    name: "Bleeding Jane",
    description: "It's a Spicy, Classic and Sobering drink costing $200.",
    image: Bleeding_Jane
  },
  {
    name: "Bloom Light",
    description: "It's a Spicy, Promo and Bland drink costing $230",
    image: BloomLight
  },
  {
    name: "Blue Fairy",
    description: "It's a Sweet, Girly and Soft drink costing $170.",
    image: BlueFairy
  },
  {
    name: "Crevice Spike",
    description: "It's a Sour, Manly and Sobering drink costing $140.",
    image: CreviceSpike
  }
];

const DrinkCard = ({ name, description, image }) => (
  <div className="col-md-4 mb-4">
    <div className="card custom-card h-60 w-50">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const Drinktionary = () => {
  return (
    <div className="background-image">
      <div className="container-fluid p-0">
        <Navbar />
        <center>
          <h1 className="Drinktionary pt-2">Drinktionary</h1>
          <div className="row">
            {drinksData.map((drink, index) => (
              <DrinkCard 
                key={index}
                name={drink.name}
                description={drink.description}
                image={drink.image}

              />
            ))}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Drinktionary;
