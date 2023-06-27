import { decode } from "html-entities";
import React from "react";

const EditCard = ({ bike, handleChange, handleEdit }) => {
  const img = bike.images[0] + "?wid=200";
  return (
    <div className="editcard">
      <div className="editcard__info">
        <h2>{decode(bike.title)}</h2>
        <p>{bike.tcin}</p>
        <div className="editcard__photo">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="editcard__list">

        <label htmlFor="pricecat">Price category</label>
        <div className="select">
          <select
            id="pricecat"
            name="pricecat"
            onChange={(e) => handleChange(e, bike)}
            value={bike.pricecat}
          >
            <option value="">select price category</option>
            <option value="a">a - economic</option>
            <option value="b">b - standard</option>
            <option value="c">c - premium</option>
            <option value="d">d - supreme</option>
          </select>
        </div>
        <label htmlFor="status">Bike status</label>

        <div className="select">
          <select
            id="status"
            name="status"
            onChange={(e) => handleChange(e, bike)}
            value={bike.status}
          >
            <option value="">select status</option>
            <option value="ready">ready</option>
            <option value="rented">rented</option>
            <option value="broken">broken</option>
            <option value="removed">removed</option>
          </select>
        </div>
        <button className="btn" onClick={() => handleEdit(bike)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditCard;