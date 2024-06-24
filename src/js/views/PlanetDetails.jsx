import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();

  const [planet, setPlanet] = useState({});

  useEffect(() => {
    if (params.id && store.planets.length > 0) {
      const selectedPlanet = store.planets.find(
        (item) => item.url.split("/")[5] == params.id
      );
      console.log(selectedPlanet);
      setPlanet(selectedPlanet);
    }
  }, [params.id, store.planets]);

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${
                planet.url && planet.url.split("/")[5]
              }.jpg`}
              className="card-img-top"
              onError={(e) =>
                (e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg")
              }
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{planet.name && planet.name}</h5>
              <p className="card-text">
                <strong>Rotation Period:</strong>{" "}
                {planet.rotation_period && planet.rotation_period}
              </p>
              <p className="card-text">
                <strong>Orbital Period:</strong>{" "}
                {planet.orbital_period && planet.orbital_period}
              </p>
              <p className="card-text">
                <strong>Diameter:</strong> {planet.diameter && planet.diameter}
              </p>
              <p className="card-text">
                <strong>Climate:</strong> {planet.climate && planet.climate}
              </p>
              <p className="card-text">
                <strong>Gravity:</strong> {planet.gravity && planet.gravity}
              </p>
              <p className="card-text">
                <strong>Terrain:</strong> {planet.terrain && planet.terrain}
              </p>
              <p className="card-text">
                <strong>Residents:</strong>{" "}
                {planet.residents && planet.residents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
