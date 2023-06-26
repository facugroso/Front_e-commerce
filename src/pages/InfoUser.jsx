import { useSelector } from "react-redux";
import "./InfoUser.css";

function InfoUser() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="container mt-3 py-5 ">
        <h1>User Info</h1>
        <div className="info-user">
          <p className="border">{user.dataValues.firstname}</p>
          <p className="border">{user.dataValues.lastname}</p>
          <p className="border">{user.dataValues.email}</p>
          <p className="border">{user.dataValues.phone}</p>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
