
import "../../public/css/home.css";
import Searchbar from "./Searchbar";
import Button from "./Button";
const Home = () => {
  return (
    <>
      
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

      <Searchbar/>
        
       <Button name="Search"/>
       </div>

       <div className="home-container">
      <div id="data" style={{ overflowX: 'auto' }}>
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-bordered">
            <tr>
              <th>Scrap(Y/N)</th>
              <th>Scrap on date</th>
              <th>Category</th>
              <th>Type</th>
              <th>Description of equipment</th>
              <th>DSR no.</th>
              <th>Quantity</th>
              <th>Lab DSR Page no.</th>
              <th>Central deadstock pg no.</th>
              <th>Description as per central deadstock</th>
              <th>Name of supplier</th>
              <th>Page no</th>
              <th>Invoice no.</th>
              <th>Invoice date</th>
              <th>Purchase date</th>
              <th>Amount</th>
              <th>Remarks</th>
              <th>Purchase for Lab</th>
              <th>Permanently transfer to Lab</th>
              <th>Room no.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jill</td>
              <td>Smilskjbdcksbdcth</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>Jill</td>
              <td>Smilskjbdcksbdcth</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smilskjbdcksbdcth</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>Jill</td>
              <td>Smilskjbdcksbdcth</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smilskjbdcksbdcth</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>Jill</td>
              <td>Smilskjbdcksbdcth</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
     
    </>
  );
};

export default Home;
