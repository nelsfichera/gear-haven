import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const UserLayout = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    currentUser && navigate("/dashboard");
  }, [currentUser, navigate]);

  return (
    <>
      <div className="user layout-lg">
        <nav className="user__nav">
          <NavLink className="user__nav__link" to="." end>
            login
          </NavLink>
          <NavLink className="user__nav__link" to="signup">
            signup
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;