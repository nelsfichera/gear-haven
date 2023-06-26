import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-wrapper">
      <div className="hero">
        <div className="hero__text">
          <h1>
            Looking to <span>rent</span> a bike?
          </h1>
          <h2>
            Rent and explore the world around you, while reducing your carbon
            footprint and staying active.
          </h2>
          <Link to="/user/signup">
            <button className="btn hero__btn">Join free</button>
          </Link>
        </div>
        <div className="hero__photo">
          <img src="./img/bk4.png" alt="heros" />
        </div>
      </div>
      <div className="calendar">
        <div className="calendar__form">
          <label htmlFor="name">Get 10% off by leaving yor name:</label>
          <input id="name" type="text" className="ipt" />
          <label htmlFor="email">and an e-mail:</label>
          <input id="email" type="text" className="ipt" />
          <button
            className="btn btn__primary"
            onClick={() => {
              navigate("/order", {
                state: { msg: `Wait for an email with your discount code :)` },
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;