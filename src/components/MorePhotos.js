import React from "react";
import { useOutletContext } from "react-router-dom";

const MorePhotos = () => {
  const bike = useOutletContext();
  return (
    <div className="more-details">
      <div className="bike__bull">
        <ul>
          {bike.bullet_descriptions.map((b) => (
            <li dangerouslySetInnerHTML={{ __html: b }}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MorePhotos;