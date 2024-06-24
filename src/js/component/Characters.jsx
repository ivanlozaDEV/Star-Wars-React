import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Characters = () => {
  const { store, actions } = useContext(Context);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const addToFavorites = (character) => {
    actions.addFavorites(character);
  };

  const showMoreInfo = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="container">
      <h1 className="text-light">Characters</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.characters.map((character, index) => (
          <div
            className="col-4"
            key={index}
            style={{ flex: "0 0 auto", maxWidth: "35%" }}
          >
            <div className="card m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  character.url.split("/")[5]
                }.jpg`}
                z
                className="card-img-top"
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                }
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Birth: {character.birth_year}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => addToFavorites(character)}
                  style={{ cursor: "pointer" }}
                />
                <Link to={`/character-details/${index + 1}`}>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    onClick={() => showMoreInfo(character)}
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

export default Characters;
