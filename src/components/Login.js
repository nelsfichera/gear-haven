import React, { useContext } from "react";
import { fbLogin } from "../utils/firebase";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ user: "", pwd: "" });
  const [alertmsg, setAlertmsg] = useState({ type: "", text: "" });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fbLogin(formData.user, formData.pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((err) => {
        setAlertmsg({ type: "--danger", text: `${err.message}` });
        // console.log(err);
      });
  };
  return (
    <div className="signup">
      <h1>Login</h1>
      <div className={`alert alert${alertmsg.type}`}>{alertmsg.text}</div>
      <form onSubmit={(e) => submitHandler(e)} className="signup__form">
        <input
          type="text"
          name="user"
          value={formData.user}
          placeholder="username"
          onChange={formChange}
          className="ipt"
          required
        />
        <input
          type="password"
          name="pwd"
          value={formData.pwd}
          placeholder="password"
          onChange={formChange}
          className="ipt"
          required
        />
        <button type="submit" className="btn btn__primary">
          Login
        </button>
      </form>
      {/* <UserStatus /> */}
    </div>
  );
};

export default Login;