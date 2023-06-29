import { useContext } from "react";
import { FormContext, TotalContext, ShippingContext } from "../pages/CheckOut";
import { useSelector } from "react-redux";

function ShippingMethod({ subTotal }) {
  const { formData, setFormData } = useContext(FormContext);
  const { total, setTotal } = useContext(TotalContext);
  const { shipping, setShipping } = useContext(ShippingContext);
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="col">
        <div className="container border mb-3">
          <div className="d-flex justify-content-between p-1">
            <span className="fw-bold">Contact</span>
            <span>{user.dataValues.email}</span>
          </div>
          <div className="d-flex justify-content-between p-1">
            <span className="fw-bold">Ship to</span>
            <span>{`${formData.step1.fullAddress.country},${formData.step1.fullAddress.address},${formData.step1.fullAddress.city},${formData.step1.fullAddress.state}`}</span>
          </div>
        </div>
        <h3>Shipping Method</h3>
        <div className="d-flex flex-column">
          <ul className="p-0 mt-2">
            <div className="border p-3">
              <li className="d-flex">
                <input
                  type="radio"
                  name="shipping-method"
                  value="Standard"
                  onChange={(event) => {
                    setTotal(Number(subTotal)),
                      setShipping("Free"),
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        step2: {
                          ...prevFormData.step2,
                          method: event.target.value,
                        },
                      }));
                  }}
                  defaultChecked
                ></input>
                <label className="fw-light ms-2">
                  Standard 3 To 5 Business Days - Free
                </label>
                <span className="ms-auto">Free</span>
              </li>
            </div>
            <div className="border p-3">
              <li className="d-flex mb-2">
                <input
                  type="radio"
                  name="shipping-method"
                  value="Express"
                  onChange={() => {
                    setTotal(parseFloat(Number(subTotal) + 15).toFixed(2)),
                      setShipping("Express $15"),
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        step2: {
                          ...prevFormData.step2,
                          method: event.target.value,
                        },
                      }));
                  }}
                ></input>
                <label className="fw-light ms-2">
                  Express 2-3 Business Days
                </label>
                <span className="ms-auto">$15.00</span>
              </li>
            </div>
            <div className="border p-3">
              <li className="d-flex mb-2">
                <input
                  type="radio"
                  name="shipping-method"
                  value="Priority"
                  onChange={() => {
                    setTotal(parseFloat(Number(subTotal) + 30).toFixed(2)),
                      setShipping("Priority $30"),
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        step2: {
                          ...prevFormData.step2,
                          method: event.target.value,
                        },
                      }));
                  }}
                ></input>
                <label className="fw-light ms-2">
                  Priority 1-2 Business Day
                </label>
                <span className="ms-auto">$30.00</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ShippingMethod;
