import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import StarWarsBackground from "../../img/paul-volkmer-qVotvbsuM_c-unsplash.jpg";

const VehicleDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();

  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        if (params.id && store.vehicles.length > 0) {
          const vehicleIndex = parseInt(params.id) - 1;
          if (vehicleIndex >= 0 && vehicleIndex < store.vehicles.length) {
            const selectedVehicle = store.vehicles[vehicleIndex];
            setVehicle(selectedVehicle);
          } else {
            console.log(`Vehicle with id ${params.id} not found.`);
          }
        }
      } catch (error) {
        console.error("Error fetching vehicle:", error);
      }
    };

    fetchVehicle();
  }, [params.id, store.vehicles]);

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
              src={`https://starwars-visualguide.com/assets/img/vehicles/${
                vehicle.url && vehicle.url.split("/")[5]
              }.jpg`}
              onError={(e) =>
                (e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg")
              }
            />
          </div>

          <div className="col-6">
            <div className="card-body m-4 text-light ">
              <h3 className="card-title">{vehicle.name && vehicle.name}</h3>
              <p className="card-text">
                <strong>Manufacturer:</strong>{" "}
                {vehicle.manufacturer && vehicle.manufacturer}
              </p>
              <p className="card-text">
                <strong>Cost:</strong>{" "}
                {vehicle.cost_in_credits && vehicle.cost_in_credits}
              </p>
              <p className="card-text">
                <strong>Max Speed:</strong>{" "}
                {vehicle.max_atmosphering_speed &&
                  vehicle.max_atmosphering_speed}
              </p>
              <p className="card-text">
                <strong>Crew:</strong> {vehicle.crew && vehicle.crew}
              </p>
              <p className="card-text">
                <strong>Passengers:</strong>{" "}
                {vehicle.passengers && vehicle.passengers}
              </p>
              <p className="card-text">
                <strong>Cargo Capacity:</strong>{" "}
                {vehicle.cargo_capacity && vehicle.cargo_capacity}
              </p>
              <p className="card-text">
                <strong>Consumables:</strong>{" "}
                {vehicle.consumables && vehicle.consumables}
              </p>
              <p className="card-text">
                <strong>Hyperdrive Rating:</strong>{" "}
                {vehicle.vehicle_class && vehicle.vehicle_class}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
