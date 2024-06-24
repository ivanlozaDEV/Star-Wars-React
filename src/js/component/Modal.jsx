import React from "react";
import { Navbar } from "./navbar";
import "../../styles/modal.css";
import { Link } from "react-router-dom";

export const Modal = ({ favorites, onClose }) => {
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
              favorites.map((favorite, index) => (
                <li key={index} onClick={onClose}>
                  <Link to={`/character-details/${favorite.id}`}>
                    {favorite.name}
                  </Link>
                </li>
              ))
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
