import React from "react";
import { formatPrice } from "../utils/helper";
import { decode } from "html-entities";
import { Link } from "react-router-dom";
import { pricing } from "../utils/data2";

const Card = ({ item }) => {
  const img = item.images[0] + "?wid=200";
  const tags = Object.entries(item.filter).map((a) => <span>{a[1]} </span>);
  const daily = pricing.find((p) => p.type === item.pricecat)?.daily || 2000;
  return (
    <div className="rent__card shadow-sm">
      <div className="rent__photo">
        <img src={img} alt="" />
        {item?.status === "rented" && <div className="rent__msg">RENTED !</div>}
      </div>
      <p className="rent__badge">{item.filter.subtype}</p>
      <h2>{decode(item.title)}</h2>
      <p className="rent__text">{tags}</p>
      <p className="rent__text">Price: {formatPrice(Number(daily))} daily</p>

      <Link to={`/bike/${item.tcin}`}>
        <button className="btn btn__primary">Select</button>
      </Link>
    </div>
  );
};

export default Card;