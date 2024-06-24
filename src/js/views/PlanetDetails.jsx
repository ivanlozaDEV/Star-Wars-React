import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import StarWarsBackground from "../../img/paul-volkmer-qVotvbsuM_c-unsplash.jpg";

const PlanetDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();

  const [planet, setPlanet] = useState({});
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    if (params.id && store.planets.length > 0) {
      const selectedPlanet = store.planets.find(
        (item) => item.url.split("/")[5] == params.id
      );
      setPlanet(selectedPlanet);

      if (selectedPlanet.residents.length > 0) {
        const residentUrls = selectedPlanet.residents;
        const residentIds = residentUrls.map((url) => url.split("/")[5]);
        const residentData = store.characters.filter((character) =>
          residentIds.includes(character.url.split("/")[5])
        );
        setResidents(residentData);
      }
    }
  }, [params.id, store.planets, store.characters]);

  return (
    <div
      style={{
        backgroundImage: `url(${StarWarsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
        minHeight: "87vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card m-5"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <div className="row g-0">
          <div className="col-6">
            <img
              className="img-fluid rounded m-4"
              src={`https://starwars-visualguide.com/assets/img/planets/${
                planet.url && planet.url.split("/")[5]
              }.jpg`}
              onError={(e) =>
                (e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg")
              }
            />
          </div>

          <div className="col-6">
            <div className="card-body m-4 text-light ">
              <h3 className="card-title">{planet.name && planet.name}</h3>
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
                <strong>Residents:</strong>
                <div className="d-flex flex-wrap">
                  {residents.map((resident) => (
                    <Link
                      key={resident.url.split("/")[5]}
                      to={`/character-details/${resident.url.split("/")[5]}`}
                      className="m-2"
                    >
                      <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${
                          resident.url.split("/")[5]
                        }.jpg`}
                        className="img-thumbnail"
                        alt={resident.name}
                        style={{ width: "50px", height: "50px" }}
                        onError={(e) =>
                          (e.target.src =
                            "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                        }
                      />
                    </Link>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
