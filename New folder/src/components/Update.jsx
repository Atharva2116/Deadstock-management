import { useState } from "react";
import "../../public/css/update_page.css"; 
import Button from "./Button";
const UpdatePage = () => {
  const [formData, setFormData] = useState({
    wifi: "",
    scrapDate: "",
    category: "",
    type: "",
    description: "",
    dsrNo: "",
    quantity: "",
    labDsrPageNo: "",
    centralDeadstockPageNo: "",
    descriptionAsPerCentralDeadstock: "",
    nameOfSupplier: "",
    pageNo: "",
    invoiceNo: "",
    invoiceDate: "",
    purchaseDate: "",
    amount: "",
    remarks: "",
    purchaseForLab: "",
    permanentlyTransferToLab: "",
    roomNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div id="update-main">
        <h1 id="update-heading">Update Equipment</h1>

        <main>
          <section className="new-equipment">
            <form onSubmit={handleSubmit}>
              <div className="form-group bg-transparent">
                <label htmlFor="dsr-no">Search by DSR No.:</label>
                <input
                  type="text"
                  id="dsr-no"
                  name="dsrNo"
                  placeholder="Enter DSR No."
                  value={formData.dsrNo}
                  onChange={handleChange}
                />
                <Button name="Search" icon="fas fa-search" />
              </div>
              <hr />
              <br />
              <div className="form-group">
                <label htmlFor="hasWifi">Scrap(Y/N)</label>
                <span className="radio-inline">
                  <input
                    type="radio"
                    id="hasWifi"
                    name="wifi"
                    value="yes"
                    onChange={handleChange}
                  />{" "}
                  Yes
                </span>
                <span className="radio-inline">
                  <input
                    type="radio"
                    id="noWifi"
                    name="wifi"
                    value="no"
                    onChange={handleChange}
                  />{" "}
                  No
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="scrap-date">Scrap on date</label>
                <input
                  type="date"
                  id="scrap-date"
                  name="scrapDate"
                  placeholder="MM/DD/YYYY"
                  value={formData.scrapDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="computer">Computer</option>
                  <option value="peripheral">Peripheral</option>
                  <option value="software">Software</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  placeholder="Eg. Peripheral"
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description of Equipment</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Eg. DAC01"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="Eg. 5"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lab-dsr-page-no">Lab DSR Page No.</label>
                <input
                  type="text"
                  id="lab-dsr-page-no"
                  name="labDsrPageNo"
                  placeholder="Eg. 23"
                  value={formData.labDsrPageNo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="central-deadstock-page-no">
                  Central DeadStock Page No.
                </label>
                <input
                  type="text"
                  id="central-deadstock-page-no"
                  name="centralDeadstockPageNo"
                  placeholder="Eg. 34"
                  value={formData.centralDeadstockPageNo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description-as-per-central-deadstock">
                  Description as per Central DeadStock
                </label>
                <input
                  type="text"
                  id="description-as-per-central-deadstock"
                  name="descriptionAsPerCentralDeadstock"
                  placeholder="Eg. DAC01"
                  value={formData.descriptionAsPerCentralDeadstock}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name-of-supplier">Name of Supplier</label>
                <input
                  type="text"
                  id="name-of-supplier"
                  name="nameOfSupplier"
                  placeholder="Eg. Raj Electronics"
                  value={formData.nameOfSupplier}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="page-no">Page No.</label>
                <input
                  type="text"
                  id="page-no"
                  name="pageNo"
                  placeholder="Eg. 54"
                  value={formData.pageNo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="invoice-no">Invoice No.</label>
                <input
                  type="text"
                  id="invoice-no"
                  name="invoiceNo"
                  placeholder="Eg. 54WQ123"
                  value={formData.invoiceNo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="invoice-date">Invoice Date:</label>
                <input
                  type="date"
                  id="invoice-date"
                  name="invoiceDate"
                  placeholder="MM/DD/YYYY"
                  value={formData.invoiceDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="purchase-date">Purchase Date:</label>
                <input
                  type="date"
                  id="purchase-date"
                  name="purchaseDate"
                  placeholder="MM/DD/YYYY"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  placeholder="Eg. 54WQ123"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input
                  type="text"
                  id="remarks"
                  name="remarks"
                  placeholder="Eg. 54WQ123"
                  value={formData.remarks}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="purchase-for-lab">Purchase for Lab</label>
                <input
                  type="text"
                  id="purchase-for-lab"
                  name="purchaseForLab"
                  placeholder="Eg. 54WQ123"
                  value={formData.purchaseForLab}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="permanently-transfer-to-lab">
                  Permanently Transfer to Lab
                </label>
                <input
                  type="text"
                  id="permanently-transfer-to-lab"
                  name="permanentlyTransferToLab"
                  placeholder="Eg. 54WQ123"
                  value={formData.permanentlyTransferToLab}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="room-no">Room No.</label>
                <input
                  type="text"
                  id="room-no"
                  name="roomNo"
                  placeholder="Eg. 54WQ123"
                  value={formData.roomNo}
                  onChange={handleChange}
                />
              </div>

              <div id="update-btn-div">
                <Button
                  name="Save"
                  icon="fas fa-save"
                  onClick={() => {
                    console.log("Save button clicked!");
                  }}
                />
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UpdatePage;
