import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = ({ admin }) => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/order", {
          state: { msg: `Succesfully sign out` },
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Sorry cant logout!");
      });
  };
  // console.log(currentUser);
  return (
    <div className="logout">
      <p>{`Signed In as ${currentUser.email}`}</p>
      <p>Access level: {admin ? "admin" : "standard"}</p>
      <button className="btn btn__logout" onClick={userSignOut}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;