import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const addToFavorites = (vehicle) => {
    actions.addFavorites(vehicle);
  };

  const showMoreInfo = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <div className="container">
      <h1 className="text-light">Vehicles</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.vehicles.map((vehicle, index) => (
          <div
            className="col-4"
            key={index}
            style={{ flex: "0 0 auto", maxWidth: "25%" }}
          >
            <div
              className="card m-2"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${
                  vehicle.url.split("/")[5]
                }.jpg`}
                className="card-img-top"
                alt="..."
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                }
              />
              <div className="card-body text-light">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">{vehicle.manufacturer}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => addToFavorites(vehicle)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                />
                <Link to={`/vehicle-details/${index + 1}`}>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    onClick={() => showMoreInfo(vehicle)}
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

export default Vehicles;
