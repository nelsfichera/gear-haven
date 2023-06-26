import React from "react";
import { pricing } from "../utils/data2";
import { formatPrice } from "../utils/helper";
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const bike = useOutletContext();

  const price = pricing.find((p) => p.type === bike.pricecat) || pricing[0];

  return (
    <div className="pricing">
      <div className="pricing__card">
        <h2>Basic</h2>
        <p className="pricing__card__num">{formatPrice(price.basic)}</p>
        <h2>Daily</h2>
        <p className="pricing__card__num">{formatPrice(price.daily)}</p>
        <h2>Monthly</h2>
        <p className="pricing__card__num">{formatPrice(price.monthly)}</p>
        <h2>Additional info</h2>
        <p className="pricing__card__txt">{price.info}</p>
        <p className="pricing__card__txt">{price.extra}</p>
        <p className="pricing__card__txt">{price.discount}</p>
      </div>
    </div>
  );
};

export default Pricing;