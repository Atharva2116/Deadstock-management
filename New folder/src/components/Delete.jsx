import Search from "./Searchbar";
import Button from "./Button";

import "../../public/css/home.css";

const Delete = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Delete</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Everything
            </button>
            <ul className="dropdown-menu dropdown-menu-dark absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block">
              <li>
                <a
                  className="dropdown-item px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <Search />

          <Button
            name="Search"
            icon="fas fa-search"
            className="bg-green-500 text-white hover:bg-green-600 rounded-lg px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Delete;
