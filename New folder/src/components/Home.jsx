import "../../public/css/home.css";
import Searchbar from "./Searchbar";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="flex items-center mb-4 space-x-4">
          <div className="relative">
            <button
              className="btn bg-gray-800 text-white  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg px-4 py-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Everything
            </button>
            <ul className="dropdown-menu absolute mt-2 w-48 bg-gray-800  text-white rounded-lg shadow-lg">
              <li>
                <a className="dropdown-item px-4 py-2 hover:bg-gray-700 cursor-pointer filter invert">Action</a>
              </li>
              <li>
                <a className="dropdown-item px-4 py-2 hover:bg-gray-700 cursor-pointer filter invert">Another action</a>
              </li>
              <li>
                <a className="dropdown-item px-4 py-2 hover:bg-gray-700 cursor-pointer filter invert">Something else here</a>
              </li>
            </ul>
          </div>
          <Searchbar />
          <Button name="Search" icon="fas fa-search" className="bg-blue-500 text-white hover:bg-blue-600" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div id="data" className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  {[
                    "Scrap(Y/N)", "Scrap on date", "Category", "Type", "Description of equipment", 
                    "DSR no.", "Quantity", "Lab DSR Page no.", "Central deadstock pg no.", 
                    "Description as per central deadstock", "Name of supplier", "Page no", 
                    "Invoice no.", "Invoice date", "Purchase date", "Amount", "Remarks", 
                    "Purchase for Lab", "Permanently transfer to Lab", "Room no."
                  ].map((header) => (
                    <th key={header} className="px-4 py-2 text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    {[
                      "Jill", "Smilskjbdcksbdcth", "50", "50", "50", 
                      "50", "50", "50", "50", "50", 
                      "50", "50", "Jill", "Smilskjbdcksbdcth", "50", 
                      "50", "50", "50", "50"
                    ].map((data, idx) => (
                      <td key={idx} className="px-4 py-2">{data}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
