import { useSelector } from "react-redux";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./InfoUser.css";

function InfoUser() {
  const user = useSelector((state) => state.user);
  const [openUno, setOpenUno] = useState(false);
  const [openDos, setOpenDos] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  const [questions, setQuestions] = useState("");
  const handleSubmit = () => {
    console.log("Question:", questions);
  };
  return (
    <>
      <div className="container mt-3 py-5 ">
        <div className="row">
          <div className="col">
            <h1>User Info</h1>
            <div className="info-user">
              <label htmlFor="">Name:</label>
              <p className="border ">{user.dataValues.firstname}</p>
              <label htmlFor="">Lastname:</label>
              <p className="border">{user.dataValues.lastname}</p>
              <label htmlFor="">Email:</label>
              <p className="border">{user.dataValues.email}</p>
              <label htmlFor="">Phone:</label>
              <p className="border">{user.dataValues.phone}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Frequent questions</h3>
              <div>
                <span
                  className="border w-50"
                  onClick={() => setOpenUno(!openUno)}
                  aria-controls="example-collapse-text"
                  aria-expanded={openUno}
                >
                  How much does delivery cost?
                </span>
                <Collapse in={openUno}>
                  <div id="example-collapse-text">
                    Shipping is totally free if you live within the United
                    States.
                  </div>
                </Collapse>
              </div>
              <div>
                <span
                  className="border w-50"
                  onClick={() => setOpenDos(!openDos)}
                  aria-controls="example-collapse-text"
                  aria-expanded={openDos}
                >
                  How long does shipping take?
                </span>
                <Collapse in={openDos}>
                  <div id="example-collapse-text">
                    If you are within the United States, deliveries arrive
                    within the next 7 days
                  </div>
                </Collapse>
              </div>
              <div>
                <span
                  className="border w-50"
                  onClick={() => setOpenThree(!openThree)}
                  aria-controls="example-collapse-text"
                  aria-expanded={openThree}
                >
                  Are returns allowed?
                </span>
                <Collapse in={openThree}>
                  <div id="example-collapse-text">
                    That's right, within the next 30 days of receiving the
                    purchase. As long as the product is in the conditions you
                    received it.
                  </div>
                </Collapse>
              </div>
              <form onSubmit={handleSubmit} className="mt-2">
                <div>
                  <h6 htmlFor="questions">Ask your question...</h6>
                </div>
                <div>
                  <textarea
                    type="text"
                    id="questions"
                    value={questions}
                    onChange={(e) => setQuestions(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
