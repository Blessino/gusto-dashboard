import React from "react";
import Logo from "../ui/Logo";
import MainNav from "./mainNav";
import "../ui/sidebar.css"

function Sidebar() {
  return (
    <>
      <aside className="aside__sidebar">
        <figure>
          <Logo />
        </figure>
        <MainNav />
      </aside>
    </>
  );
}

export default Sidebar;
