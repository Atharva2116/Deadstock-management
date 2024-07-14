import Search from "./Searchbar";
import Button from "./Button";

import "../../public/css/home.css";
const Delete = () => {
  return (
    <>
    <h1>Delete</h1>
      <div className="opt">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Everything
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item active" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <Search />

        <Button name="Search" />
      </div>
    </>
  );
};

export default Delete;
