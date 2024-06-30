import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/star-wars-logo-1002.png";
import "../../styles/Navbar.css";
import { Context } from "../store/appContext";
import Modal from "./Modal.jsx";

export const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { store, actions } = useContext(Context);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <Link to="/">
            <img
              src={StarWarsLogo}
              className="StarWarsLogo ms-2"
              alt="Star Wars Logo"
            />
          </Link>
          <button
            type="button"
            className="btn btn-light position-relative"
            onClick={showModal}
          >
            Favorites
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {store.favorites.length}
            </span>
          </button>
        </div>
      </nav>
      {modalVisible && (
        <Modal
          favorites={store.favorites}
          onClose={hideModal}
          onDelete={actions.deleteFavorite}
        />
      )}
    </>
  );
};
