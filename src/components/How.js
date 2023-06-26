import React from "react";

const How = () => {
  return (
    <div className="how" id="services">
      <h3>Renting a bike with us is easy and hassle-free! </h3>
      <h1>Our process is simple and convenient.</h1>
      <div className="how__three">
        <div className="how__card">
          <div className="how__icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <h3>Choose rental location:</h3>
          <p>
            Consider your desired ride type when selecting a rental location.
            Choose a city center for leisurely rides or a park/trail location
            for a more challenging experience.
          </p>
        </div>
        <div className="how__card">
          <div className="how__icon">
            <i className="fa-regular fa-calendar"></i>
          </div>
          <h3>Select convenient date.</h3>
          <p>
            Select a rental bike date that works for your schedule and provides
            enough time to fully enjoy your biking adventure.
          </p>
        </div>
        <HowCard />
      </div>
    </div>
  );
};

export default How;

const HowCard = () => {
  return (
    <div className="how__card">
      <div className="how__icon">
        <i className="fa-solid fa-calendar-check"></i>
      </div>
      <h3>Pick up and ride.</h3>
      <p>
        On the day of your rental, go to the designated location to pick up your
        bike. Our company will provide you with a helmet, lock, and any other
        accessories you may need.
      </p>
    </div>
  );
};