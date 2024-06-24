import React from "react";
import { Link } from "react-router-dom";
import "../../styles/modal.css";

export const Modal = ({ favorites, onClose }) => {
  const renderFavoriteLink = (favorite) => {
    let linkUrl;
    if (favorite.type === "character") {
      linkUrl = `/character-details/${favorite.id}`;
    } else if (favorite.type === "planet") {
      linkUrl = `/planet-details/${favorite.id}`;
    } else if (favorite.type === "vehicle") {
      linkUrl = `/vehicle-details/${favorite.id}`;
    } else {
      // Handle unsupported types or throw an error
      console.error("Unsupported favorite type:", favorite.type);
      return null;
    }

    return (
      <li key={favorite.id} onClick={onClose}>
        <Link to={linkUrl}>{favorite.name}</Link>
      </li>
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Favorites</h5>
          <button type="button" className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <ul className="list-unstyled">
            {favorites.length > 0 ? (
              favorites.map((favorite) => renderFavoriteLink(favorite))
            ) : (
              <li>No favorites added yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
