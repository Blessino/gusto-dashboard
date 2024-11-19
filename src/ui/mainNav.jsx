import React from 'react';
import { NavLink } from 'react-router-dom';
import { Booking, Settings, Marketing, Extra } from '../data/MenuData';
// import '../ui/mainnav.css';
//
function MainNav() {
  return (
    <nav className="fixed h-[80vh] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200 text-gray-600">
      <ul className="shadow-[0px_2px_5px_0px_rgba(203,213,225,0.2)]">
        <label className="text-[0.69rem] font-light uppercase text-gray-900">
          Booking
        </label>
        {Booking.map((item) => {
          return (
            <li key={item.title} className="list-none">
              <NavLink
                to={item.title}
                className="mx-1 my-2 px-4 py-2 flex items-center justify-start gap-2 transition-all duration-200 ease-in-out hover:translate-x-1 hover:cursor-pointer hover:rounded-md hover:bg-blue-100 hover:text-teal-400"
              >
                <img src={item.icon} alt={item.title} className="h-4 w-4" />

                <span className="nav__list-title">{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="shadow-[0px_2px_5px_0px_rgba(203,213,225,0.2)]">
        <label className="text-[0.69rem] font-light uppercase text-gray-900">
          Settings
        </label>
        {Settings.map((item) => {
          return (
            <li
              key={item.title}
              className="list-none "
            >
              <NavLink
                to={item.title}
                className="mx-1 my-2 flex items-center justify-start gap-2 px-4 py-2 transition-all duration-200 ease-in-out hover:translate-x-1 hover:cursor-pointer hover:rounded-md hover:bg-blue-100 hover:text-teal-400"
              >
                <span className="h-5 w-5">
                  <img src={item.icon} alt={item.title} />
                </span>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="shadow-[0px_2px_5px_0px_rgba(203,213,225,0.2)]">
        <label className="text-[0.69rem] font-light uppercase text-gray-900">
          Marketing
        </label>
        {Marketing.map((item) => {
          return (
            <li
              key={item.title}
              className=" list-none "
            >
              <NavLink
                to={item.title}
                className="mx-1 my-2 flex items-center justify-start gap-2 px-4 py-2 transition-all duration-200 ease-in-out hover:translate-x-1 hover:cursor-pointer hover:rounded-md hover:bg-blue-100 hover:text-teal-400"
              >
                <span className="h-5 w-5" >
                  <img src={item.icon} alt={item.title} />
                </span>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="shadow-[0px_2px_5px_0px_rgba(203,213,225,0.2)]">
        <label className="text-[0.69rem] font-light uppercase text-gray-900">
          Extra
        </label>
        {Extra.map((item) => {
          return (
            <li
              key={item.title}
              className=" list-none"
            >
              <NavLink
                to={item.title}
                className="mx-1 my-2 flex items-center justify-start gap-2 px-4 py-2 transition-all duration-200 ease-in-out hover:translate-x-1 hover:cursor-pointer hover:rounded-md hover:bg-blue-100 hover:text-teal-400"
              >
                <span className="h-5 w-5">
                  <img src={item.icon} alt={item.title} />
                </span>
                <span className="nav__item-title">{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;
