import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const addToFavorites = (planet) => {
    actions.addFavorites(planet);
  };

  const showMoreInfo = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="container">
      <h1 className="text-light">Planets</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.planets.map((planet, index) => (
          <div
            className="col-4"
            key={index}
            style={{ flex: "0 0 auto", maxWidth: "25%" }}
          >
            <div className="card m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${
                  planet.url.split("/")[5]
                }.jpg`}
                className="card-img-top"
                alt="..."
                onError={(e) =>
                  planet.url.split("/")[5] == "1"
                    ? (e.target.src =
                        "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png")
                    : (e.target.src =
                        "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                }
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">Pop: {planet.population}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => addToFavorites(planet)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                />
                <Link to={`/planet-details/${index + 1}`}>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    onClick={() => showMoreInfo(planet)}
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
