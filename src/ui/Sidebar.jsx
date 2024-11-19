import React from "react";
import Logo from "../ui/Logo";
import MainNav from "./mainNav";
import "./sidebar.css"
// import "./logo.css"


function Sidebar() {
  return (
    <>
      <aside className="fixed w-80
      ">
        <figure className="fig__logo-nav">
          <Logo />
        </figure>
        <MainNav />
      </aside>
    </>
  );
}

export default Sidebar;
