import React from "react";
import { NavLink } from "react-router-dom";
import { Booking, Settings, Marketing, Extra } from "../data/MenuData";
import Dashboard from "./Dashboard";
//
function MainNav() {
  return (
    <nav className="nav">
      {/* 
            <li className="aside__list-item">
              <NavLink to={Dashboard}>
                <span>Dashboard</span>
              </NavLink>
            </li> */}

      <ul>
        <label className="aside__list-label">Booking</label>
        {Booking.map((item) => {
          return (
            <li key={item.title}>
              <span className="nav__licon">{item.icon}</span>
              <NavLink to={item.title}>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul>
        <label className="aside__list-label">Settings</label>
        {Settings.map((item) => {
          return (
            <li key={item.title}>
              <span className="nav__licon">{item.icon}</span>
              <NavLink to={item.title}>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul>
        <label className="aside__list-label">Marketing</label>
        {Marketing.map((item) => {
          return (
            <li key={item.title}>
              <span className="nav__licon">{item.icon}</span>
              <NavLink to={item.title}>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul>
        <label className="aside__list-label">Extra</label>
        {Extra.map((item) => {
          return (
            <li key={item.title}>
              <span className="nav__licon">{item.icon}</span>
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
