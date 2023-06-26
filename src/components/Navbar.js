import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleBurger = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          GearHaven <i className="fa-solid fa-bicycle"></i>
        </div>
        <button className="nobtn burger__btn" onClick={toggleBurger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar__list ${open ? "navbar__list--open" : ""}`}>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/">
              Home
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#ride">
              Ride
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#services">
              Services
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#about">
              About
            </NavHashLink>
          </li>
          <li className="navbar__item hov-animate">
            <NavHashLink smooth to="/#reviews">
              Reviews
            </NavHashLink>
          </li>
        </ul>
        <Link to="/user">
          <button className="btn btn__primary shadow-sm">User / Admin</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;