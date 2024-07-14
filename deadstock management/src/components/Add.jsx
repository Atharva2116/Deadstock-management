import '../../public/css/add_page.css';
import Button from './Button';
const Add = () => {
  return (
    <div>

      

      <div id="add-main">
        <h1 id="add-heading">New Equipment</h1>
      </div>

      <main>
        <section className="new-equipment">
          <form id='form'>
            <div className="form-group">
              <label htmlFor="hasWifi">Scrap(Y/N)</label>
              <span className="radio-inline">
                <input type="radio" id="hasWifi" name="wifi" value="yes" /> Yes
              </span>
              <span className="radio-inline">
                <input type="radio" id="noWifi" name="wifi" value="no" /> No
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="scrap-date">Scrap on date</label>
              <input type="date" id="scrap-date" name="scrap-date" placeholder="MM/DD/YYYY" />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select name="category" id="category">
                <option value="">Select a category</option>
                <option value="computer">Computer</option>
                <option value="peripheral">Peripheral</option>
                <option value="software">Software</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input type="text" id="type" name="type" placeholder="Eg. Peripheral" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description of Equipment</label>
              <input type="text" id="description" name="description" placeholder="Eg. DAC01" />
            </div>

            <div className="form-group">
              <label htmlFor="dsr-no">DSR No.</label>
              <input type="text" id="dsr-no" name="dsr-no" placeholder="Eg. Peripheral" />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" placeholder="Eg. 5" />
            </div>

            <div className="form-group">
              <label htmlFor="lab-dsr-page-no">Lab DSR Page No.</label>
              <input type="text" id="lab-dsr-page-no" name="lab-dsr-page-no" placeholder="Eg. 23" />
            </div>

            <div className="form-group">
              <label htmlFor="central-deadstock-page-no">Central DeadStock Page No.</label>
              <input type="text" id="central-deadstock-page-no" name="central-deadstock-page-no" placeholder="Eg. 34" />
            </div>

            <div className="form-group">
              <label htmlFor="description-as-per-central-deadstock">Description as per Central DeadStock</label>
              <input type="text" id="description-as-per-central-deadstock" name="description-as-per-central-deadstock" placeholder="Eg. DAC01" />
            </div>

            <div className="form-group">
              <label htmlFor="name-of-supplier">Name of Supplier</label>
              <input type="text" id="name-of-supplier" name="name-of-supplier" placeholder="Eg. Raj Electronics" />
            </div>

            <div className="form-group">
              <label htmlFor="page-no">Page No.</label>
              <input type="text" id="page-no" name="page-no" placeholder="Eg. 54" />
            </div>

            <div className="form-group">
              <label htmlFor="invoice-no">Invoice No.</label>
              <input type="text" id="invoice-no" name="invoice-no" placeholder="Eg. 54WQ123" />
            </div>

            <div className="form-group">
              <label htmlFor="invoice-date">Invoice Date:</label>
              <input type="date" id="invoice-date" name="invoice-date" placeholder="MM/DD/YYYY" />
            </div>

            <div className="form-group">
              <label htmlFor="purchase-date">Purchase Date:</label>
              <input type="date" id="purchase-date" name="purchase-date" placeholder="MM/DD/YYYY" />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="text" id="amount" name="amount" placeholder="Eg. 54WQ123" />
            </div>

            <div className="form-group">
              <label htmlFor="remarks">Remarks</label>
              <input type="text" id="remarks" name="remarks" placeholder="Eg. 54WQ123" />
            </div>

            <div className="form-group">
              <label htmlFor="purchase-for-lab">Purchase for Lab</label>
              <input type="text" id="purchase-for-lab" name="purchase-for-lab" placeholder="Eg. 54WQ123" />
            </div>

            <div className="form-group">
              <label htmlFor="permanently-transfer-to-lab">Permanently Transfer to Lab</label>
              <input type="text" id="permanently-transfer-to-lab" name="permanently-transfer-to-lab" placeholder="Eg. 54WQ123" />
            </div>

            <div className="form-group">
              <label htmlFor="room-no">Room No.</label>
              <input type="text" id="room-no" name="room-no" placeholder="Eg. 54WQ123" />
            </div>

            <div id="add-btn-div">
                <Button name={"Save"}></Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Add;
