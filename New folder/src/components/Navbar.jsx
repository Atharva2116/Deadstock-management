import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import "../../public/css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform top-0 left-0 w-64 bg-gray-900 h-full overflow-hidden shadow-lg fixed z-30 transition-transform duration-300 ease-in-out`}
        id="navbarToggleExternalContent"
      >
        <nav className="navbar bg-gray-900 ">
          <div className="container-fluid">
            <button
              className="navbar-toggler filter invert"
              type="button"
              onClick={toggleSidebar}
            >
              <h4 className="text-white filter invert">Menu</h4>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className="bg-gray-900 p-4">
          <ul className="space-y-4">
            <li className="nav-item">
              <Link
                className="nav-link text-white flex items-center hover:text-gold-500 hover:bg-gray-700 p-2 rounded-md transition-colors duration-300"
                to="/"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faHome} className="mr-3" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white flex items-center hover:bg-gray-700  p-2 rounded-md transition-colors duration-300"
                to="/add"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white flex items-center hover:bg-gray-700 p-2 rounded-md transition-colors duration-300"
                to="/delete"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faTrash} className="mr-3" />
                Delete
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white flex items-center hover:bg-gray-700 p-2 rounded-md transition-colors duration-300"
                to="/update"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-3" />
                Update
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar filter invert">
        <div className="container-fluid bg-black">
          <button
            className="navbar-toggler filter invert"
            type="button"
            onClick={toggleSidebar}
          >
            <h4 className="text-white filter invert">Menu</h4>
            <span className="navbar-toggler-icon "></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
