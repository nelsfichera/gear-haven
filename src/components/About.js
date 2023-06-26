import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <h3>ABOUT US.</h3>
      <h1>Discover Our Convenient Bike Rental Service</h1>
      <div className="about__two">
        <div className="about__photo">
          <img src="./img/bk1.png" alt="" />
        </div>
        <div className="about__text">
          <h3>Welcome to our bike rental service!</h3>
          <p>
            We believe that biking is not only a fun and healthy way to explore
            your surroundings, but it also helps reduce your carbon footprint
            and promotes sustainable transportation practices. Our rental fleet
            consists of well-maintained bikes, including electric bikes, to suit
            all types of riders and needs.
          </p>
          <p>
            Our knowledgeable staff is committed to providing exceptional
            customer service and helping you make the most of your biking
            experience. Whether you're a local looking to explore your city or a
            visitor looking for an eco-friendly way to see the sights, we've got
            you covered. Thank you for choosing us for your biking needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;