import React from "react";
import { reviews } from "../utils/data2";

const Review = () => {
  return (
    <div className="review" id="reviews">
      <h3>Our Customers Love Us! </h3>
      <h1>See What They Say About Their Biking Adventures!</h1>
      <div className="review__three">
        {reviews.map((r) => (
          <ReviewCard data={r} />
        ))}
      </div>
    </div>
  );
};

export default Review;

const ReviewCard = ({ data }) => {
  return (
    <div className="review__card shadow-sm">
      <div className="review__head">
        <img src={data.img} alt="" />
      </div>
      <h2>{data.name}</h2>
      <p>{data.text}</p>
    </div>
  );
};