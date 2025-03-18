import React from "react";
import "./App.css";
import fish1 from "./assets/goldfish.png";
import fish2 from "./assets/clownfish.png";
import fish3 from "./assets/dory.png";
import fish4 from "./assets/angelfis.jpg";

const fishList = [
  { id: 1, name: "Goldfish", className: "fish fish1", image: fish1 },
  { id: 2, name: "Clownfish", className: "fish fish2", image: fish2 },
  { id: 3, name: "Blue Tang", className: "fish fish3", image: fish3 },
  { id: 4, name: "Angelfish", className: "fish fish4", image: fish4 },
];

const App = () => {
  return (
    <div className="aquarium">
      {fishList.map((fish) => (
        <div key={fish.id} className={fish.className}>
          <img src={fish.image} alt={fish.name} className="fish-img" />
          <span className="fish-name">{fish.name}</span>
        </div>
      ))}
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
    </div>
  );
};

export default App;
