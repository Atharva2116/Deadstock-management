import { Link } from "react-router-dom";
import "../../public/css/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <ul className="navbar-nav me-auto mb-4 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">
                Delete
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">
                Update
              </Link>
            </li>
            {/* Add other links as needed */}
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark alert-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <h4>Menu</h4>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
