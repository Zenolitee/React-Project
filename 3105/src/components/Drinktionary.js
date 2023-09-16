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
import FlamingMoai from '../image/drinks/FlamingMoai.png';
import CobaltVelvet from '../image/drinks/Cobalt_Velvet.png';
import FringeWeaver from '../image/drinks/Fringe_Weaver.png';
import FluffyDream from '../image/drinks/Fluffy_Dream.png';
import GrizzlyTemple from '../image/drinks/GrizzlyTemple.png';
import GutPunch from '../image/drinks/GutPunch.png';

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
  },
  {
    name: "Flaming Moai",
    description: "It's a secret drink that is necessary to bring secret characters to the bar.",
    image: FlamingMoai
  },
  {
    name: "Cobalt Velvet",
    description: "It's a Bubbly, Classy and Burning drink costing $280.",
    image: CobaltVelvet
  },
  {
    name: "Fluffy Dream",
    description: "It's a Sour, Girly and Soft drink costing $170.",
    image: FluffyDream
  },
  {
    name: "Fringe Weaver",
    description: "It's a Bubbly, Classy and Strong drink costing $260.",
    image: FringeWeaver
  },
  {
    name: "Grizzly Temple",
    description: "It's a Bitter, Promo and Bland drink costing $220.",
    image: GrizzlyTemple
  },
  {
    name: "Gut Punch",
    description: "It's a Bitter, Promo and Bland drink costing $220.",
    image: GutPunch
  }
];

const DrinkCard = ({ name, description, image }) => (

  <div className="col-sm-2 mb-4">
    <div className="card custom-card h-90 w-10">
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
