import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getFire } from "../utils/firebase";
import Loader from "./Loader";
import Alert from "./Alert";

const types1 = [
  { value: "", display: "All" },
  { value: "Cruiser", display: "Cruiser" },
  { value: "Road", display: "Road" },
  { value: "Electric", display: "Electric" },
];
// const types2 = [
//   "Tricycles",
//   "Cruiser",
//   "Hybrid",
//   "Road",
//   "Mountain",
//   "Electric",
// ];

const Rent = () => {
  const [filter, setFilter] = useState({ value: "", display: "All" });
  const [types, setTypes] = useState(types1);
  function handleActive(type) {
    setTypes((prev) => {
      return prev.map((p) => {
        if (p.value === type.value) {
          return { ...p, active: true };
        } else {
          return { ...p, active: false };
        }
      });
    });
    setFilter(type);
  }
  const [allBikes, SetAllBikes] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    getFire()
      .then((data) => SetAllBikes({ data, loading: false, error: null }))
      .catch((err) => {
        console.log(err);
        SetAllBikes((prev) => ({ ...prev, error: true }));
      });
  }, []);

  if (allBikes.loading) {
    return <Loader />;
  } else if (allBikes.error) {
    return <Alert msg={"Sorry DB is offline"} />;
  }

  return (
    <div className="rent" id="ride">
      <h3>Experience the city on two wheels with our bike rentals.</h3>
      <h1>Discover more, own less: rent a bike today!</h1>
      <div className="rent__filter">
        {types.map((t) => {
          return (
            <div
              className={`rent__filter__btn${
                t.display === "Electric" ? " rent__filter__btn--special" : ""
              }${t?.active ? " rent__filter__btn--active" : ""}`}
              onClick={() => handleActive(t)}
            >
              {t.display}{" "}
              {t.display === "Electric" && <i className="fa-solid fa-bolt"></i>}
            </div>
          );
        })}
      </div>
      <div className="rent__cards">
        {allBikes.data
          .filter((a) => a.status !== "removed")
          .filter((a) => a.filter.subtype.includes(filter.value))
          .map((a) => (
            <Card item={a} />
          ))}
      </div>
    </div>
  );
};

export default Rent;