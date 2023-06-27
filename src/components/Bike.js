import React from "react";
import { decode } from "html-entities";
import { formatPrice, starRating } from "../utils/helper";
import { pricing } from "../utils/data2";

const Bike = ({ bike: one }) => {
  // Load images
  const [imgFirst, ...imgRest] = one.images;
  // Apply filter
  const tags = Object.entries(one.filter).map((a) => <span>{a[1]} </span>);
  // Get prices
  const fromPricecat = (cat) => {
    return pricing.find((p) => p.type === cat).daily;
  };

  return (
    <div className="bike">
      <h1 className="bike__title">{decode(one.title)}</h1>
      <div className="bike__img">
        <div className="bike__imgfirst">
          <img src={imgFirst + "?wid=600"} alt="" />
        </div>
        <div className="bike__imgrest">
          {imgRest.slice(0, 3).map((i) => (
            <img src={i + "?wid=200"} alt="" />
          ))}
        </div>
      </div>

      <div className="bike__info">
        <h1>Daily Price: {formatPrice(fromPricecat(one.pricecat || "b"))}</h1>
        <h2>
          {/* Load rating */}
          Rating: {one.rating} ({one.rating_count}) {starRating(one.rating)}
        </h2>
      </div>
      <div className="bike__tags">{tags}</div>
      <div
        className="bike__desc"
        dangerouslySetInnerHTML={{ __html: one.downstream_description }}
      ></div>
      {one.bullets && (
        <div className="bike__soft">
          <ul>
            {one.bullets.map((b) => (
              <li>{b}</li>
            ))}
          </ul>
        </div>
      )}
      <br />
      <br />
    </div>
  );
};

export default Bike;