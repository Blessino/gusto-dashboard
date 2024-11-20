import React from 'react';
import Logo from '../ui/Logo';
import MainNav from './mainNav';
import './sidebar.css';

function Sidebar() {
  return (
    <>
      <aside className="fixed w-80">
        <figure className="py-4 px-8 w-52 h-24">
          <Logo />
        </figure>
        <MainNav />
      </aside>
    </>
  );
}

export default Sidebar;
