import React from "react";
import MainNav from "./MainNav";

import "./sidemenu.css";

function Sidebar() {
  return (
    <aside>
    <MainNav />
    </aside>
  );
}

export default Sidebar;

{/* <ul className="aside__list">
  <li>
    <ul className="aside__list-booking">
      <label className="aside__list-label">Booking</label>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>booking</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Groccery Stores</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Accounting</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Subscription</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Customers</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Report</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Chat</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Accounting</span>
        </NavLink>
      </li>
    </ul>
  </li>
  <li>
    <ul className="aside__list">
      <label className="aside__list-label">Settings</label>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Profile</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Customize</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Styling</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>CMS</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Catalog</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Configurations</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Tax</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Payment Options</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Manage Delivery</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Cache Contorls</span>
        </NavLink>
      </li>
    </ul>
  </li>
  <li>
    <ul className="aside__list">
      <label className="aside__list-label">Marketing</label>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Banners</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Promo Code</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Loyality Card</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Campaing</span>
        </NavLink>
      </li>
    </ul>
  </li>
  <li>
    <ul className="aside__list">
      <label className="aside__list-label">Extra</label>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>Tools</span>
        </NavLink>
      </li>
      <li className="aside__list-item">
        <NavLink to={Dashboard}>
          <span>DB Aduit Logs</span>
        </NavLink>
      </li>
    </ul>
  </li>
</ul> */}