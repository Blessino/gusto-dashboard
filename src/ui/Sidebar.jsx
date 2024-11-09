import React from "react";
import Logo from "../ui/Logo";
import MainNav from "./mainNav";

function Sidebar() {
  return (
    <>
      <aside>
        <figure>
          <Logo />
        </figure>
        <MainNav />
      </aside>
    </>
  );
}

export default Sidebar;
