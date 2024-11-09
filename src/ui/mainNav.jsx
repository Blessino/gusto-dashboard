import React from "react";
import { NavLink } from "react-router-dom";
import { Booking, Settings, Marketing, Extra } from "../data/MenuData";
import Dashboard from "./Dashboard";
import "../ui/mainnav.css"
//
function MainNav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <label className="nav__list-label">Booking</label>
        {Booking.map((item) => {
          return (
            <li key={item.title} className="nav__list-item">
              <span className="nav__icon">{item.icon}</span>
              <NavLink to={item.title}>
                <span className="nav__list-title">{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="nav__list">
        <label className="nav__list-label">Settings</label>
        {Settings.map((item) => {
          return (
            <li key={item.title} className="nav__list-item">
              <span className="nav__icon">{item.icon}</span>
              <NavLink to={item.title}>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="nav__list">
        <label className="nav__list-label">Marketing</label>
        {Marketing.map((item) => {
          return (
            <li key={item.title} className="nav__list-item">
              <span className="nav__icon">{item.icon}</span>
              <NavLink to={item.title}>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="nav__list">
        <label className="nav__list-label">Extra</label>
        {Extra.map((item) => {
          return (
            <li key={item.title} className="nav__list-item">
              <span className="nav__icon">{item.icon}</span>
              <NavLink to={item.title}>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;
