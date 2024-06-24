import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import StarWarsBackground from "../../img/paul-volkmer-qVotvbsuM_c-unsplash.jpg";

const CharacterDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (params.id && store.characters.length > 0) {
      const selectedCharacter = store.characters.find(
        (item) => item.url.split("/")[5] == params.id
      );
      console.log(selectedCharacter);
      setCharacter(selectedCharacter);
    }
  }, [params.id, store.characters]);

  return (
    <div
      style={{
        backgroundImage: `url(${StarWarsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <div className="card m-5">
          <div className="row g-0">
            <div className="col-6">
              <img
                className="img-fluid rounded-start m-4"
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  character.url && character.url.split("/")[5]
                }.jpg`}
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                }
              />
            </div>

            <div className="col-6">
              <div className="card-body m-4">
                <h5 className="card-title">
                  {character.name && character.name}
                </h5>
                <p className="card-text">
                  <strong>Height:</strong>{" "}
                  {character.height && character.height}
                </p>
                <p className="card-text">
                  <strong>Mass:</strong> {character.mass && character.mass}
                </p>
                <p className="card-text">
                  <strong>Hair Color:</strong>{" "}
                  {character.hair_color && character.hair_color}
                </p>
                <p className="card-text">
                  <strong>Skin Color:</strong> {character.skin_color}
                </p>
                <p className="card-text">
                  <strong>Eye Color:</strong> {character.eye_color}
                </p>
                <p className="card-text">
                  <strong>Birth Year:</strong> {character.birth_year}
                </p>
                <p className="card-text">
                  <strong>Gender:</strong> {character.gender}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
