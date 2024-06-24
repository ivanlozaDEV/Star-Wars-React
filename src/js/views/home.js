import React from "react";
import StarWarsBackground from "../../img/paul-volkmer-qVotvbsuM_c-unsplash.jpg";

import "../../styles/home.css";
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planetas.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => {
  return (
    <div
      id="homeBody"
      className="container-fluid"
      style={{
        backgroundImage: `url(${StarWarsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="container-fluid d-flex flex-column m-4">
        <div className="container my-4">
          <Characters />
        </div>
        <div className="container my-4">
          <Planets />
        </div>
        <div className="container my-4">
          <Vehicles />
        </div>
      </div>
    </div>
  );
};
