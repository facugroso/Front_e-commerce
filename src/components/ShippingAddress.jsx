import { useContext } from "react";
import { useSelector } from "react-redux";
import { FormContext } from "../pages/CheckOut";
import "../pages/CheckOut.css";

function ShippingAddress() {
  const { formData, setFormData } = useContext(FormContext);
  const user = useSelector((state) => state.user);

  return (
    <>
      <span className="fs-4 modelSubtitle">Shipping Address</span>
      <div className="border mt-2">
        <label className="ms-2 description">Country/Region</label>
        <select
          className="w-100 border border-0"
          onChange={(event) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              step1: {
                ...prevFormData.step1,
                fullAddress: {
                  ...prevFormData.step1.fullAddress,
                  country: event.target.value,
                },
              },
            }));
          }}
          required
        >
          <option value=""></option>
          <option value="United States description">United States</option>
        </select>
      </div>
      <div className="row m-0 g-1">
        <div className="col-12 col-md-6 border p-0 mt-2">
          <label className="ms-2 description">First Name</label>
          <input
            type="text"
            className="w-100 p-2"
            name="firstname"
            value={formData.step1?.firstname || ""}
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  firstname: event.target.value,
                },
              }));
            }}
            required
          ></input>
        </div>
        <div className="col-12 col-md-6 border p-0 mt-2">
          <label className="ms-2 description">Last Name</label>
          <input
            type="text"
            className="w-100 p-2"
            name="lastname"
            value={formData.step1?.lastname || ""}
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  lastname: event.target.value,
                },
              }));
            }}
            required
          ></input>
        </div>
      </div>
      <div className="border mt-2">
        <label className="ms-2 description">Address</label>
        <input
          type="text"
          className="w-100 p-2"
          name="address"
          value={formData.step1?.fullAddress?.address || ""}
          onChange={(event) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              step1: {
                ...prevFormData.step1,
                fullAddress: {
                  ...prevFormData.step1.fullAddress,
                  address: event.target.value,
                },
              },
            }));
          }}
          required
        ></input>
      </div>
      <div className="border mt-2">
        <label className="ms-2 description">Apartment</label>
        <input type="text" className="w-100 p-2" name="apartment"></input>
      </div>
      <div className="mt-2 row g-2 px-1">
        <div className="col-12 col-md-4 gap-2 border p-0 m-0">
          <label className="ms-2 description">City</label>
          <input
            type="text"
            className="p-2"
            value={formData.step1?.fullAddress?.city || ""}
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  fullAddress: {
                    ...prevFormData.step1.fullAddress,
                    city: event.target.value,
                  },
                },
              }));
            }}
            required
          ></input>
        </div>
        <div className="col-12 col-md-4 border p-0 m-0">
          <label className="ms-2 description">State</label>
          <input
            type="text"
            className="p-2"
            value={formData.step1?.fullAddress?.state || ""}
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  fullAddress: {
                    ...prevFormData.step1.fullAddress,
                    state: event.target.value,
                  },
                },
              }));
            }}
            required
          ></input>
        </div>
        <div className="col-12 col-md-4 border p-0 m-0">
          <label className="ms-2 description">Zip code</label>
          <input
            type="number"
            className="p-2"
            value={formData.step1?.fullAddress?.zipcode || ""}
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  fullAddress: {
                    ...prevFormData.step1.fullAddress,
                    zipcode: event.target.value,
                  },
                },
              }));
            }}
          ></input>
        </div>
      </div>

      <div className="border mt-2">
        <label className="ms-2 description">Phone</label>
        <input
          type="number"
          className="w-100 p-2"
          name="phone"
          value={formData.step1?.phone || ""}
          onChange={(event) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              step1: {
                ...prevFormData.step1,
                phone: event.target.value,
              },
            }));
          }}
        ></input>
      </div>
    </>
  );
}

export default ShippingAddress;
