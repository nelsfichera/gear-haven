import React from "react";
import { fbSignup } from "../utils/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ user: "", pwd: "", conf: "" });
  const [alertmsg, setAlertmsg] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.pwd !== formData.conf) {
      setAlertmsg({ type: "--danger", text: "Passwords Don't Match" });
      return;
    }

    fbSignup(formData.user, formData.pwd)
      .then(() => {
        setAlertmsg({
          type: "--success",
          text: `${formData.user} created succesfully`,
        });
        alert(`User created succesfully. You can login now`);
        navigate("/user");
      })
      .catch((err) => {
        setAlertmsg({ type: "--danger", text: `${err.message}` });
        // FirebaseError
        // console.log("fb", err);
      });
  };
  return (
    <div className="signup">
      <h1>Signup</h1>
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
        <input
          type="password"
          name="conf"
          value={formData.conf}
          placeholder="conirm password"
          onChange={formChange}
          className="ipt"
          required
        />
        <button type="submit" className="btn btn__primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;