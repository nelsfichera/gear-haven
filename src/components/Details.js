import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { editBike, editUser, getOne } from "../utils/firebase";
import Loader from "./Loader";
import { AuthContext } from "../context/AuthContext";
import Alert from "./Alert";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const [wait, SetWait] = useState(false);

  const { id } = useParams();
  const [bike, SetBike] = useState({ data: [], loading: true, error: null });
  useEffect(() => {
    getOne("main", id)
      .then((data) => SetBike({ data, loading: false }))
      .catch((err) => {
        console.log(err);
        SetBike((prev) => ({ ...prev, error: true }));
      });
  }, [id]);

  const navigate = useNavigate();
  async function handleRent() {
    if (!currentUser) {
      alert("You need to login first");
      navigate("/user");
      return;
    }
    SetWait(true);
    try {
      const oldUser = await getOne("users", currentUser.uid);

      if (oldUser.bikes.length >= 2) {
        return navigate("/order", {
          state: {
            msg: `Sorry cant rent the bike. Maximum nuber of bikes rented(2) exceeded.`,
          },
        });
      }
      const newBike = { ...bike.data, status: "rented" };
      // SetBike({ data: newBike, loading: false });
      const newUser = { ...oldUser, bikes: [...oldUser.bikes, newBike] };
      //update firebase
      await editBike(newBike);
      await editUser(newUser);
      navigate("/order", {
        state: { msg: `You've just rented bike : ${newBike.id}` },
      });
    } catch (err) {
      console.log(err);
      alert("Sorry can not rent right now.");
    }
  }

  if (bike.loading) {
    return <Loader />;
  } else if (bike.error) {
    return <Alert msg={"Sorry DB is offline"} />;
  }
  return (
    <div className="details layout-lg">
      <nav className="details__nav">
        <NavLink to="." end className="details__nav__link">
          General Info
        </NavLink>
        <NavLink to="moreinfo" className="details__nav__link">
          More details
        </NavLink>
        <NavLink to="price" className="details__nav__link">
          Pricing
        </NavLink>
        {bike.data.status === "ready" ? (
          <div className="details__nav__rent" onClick={handleRent}>
            {wait ? "Processing..." : "Rent this Bike"}
          </div>
        ) : (
          <div className="details__nav__rent">Not available</div>
        )}
      </nav>
      <Outlet context={bike.data} />
    </div>
  );
};

export default Details;