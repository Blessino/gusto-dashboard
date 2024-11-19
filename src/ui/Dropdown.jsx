import React, { useState } from 'react';
// import "../ui/dropdown.css";
import { HiChevronDown } from 'react-icons/hi2';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="flex items-center justify-center cursor-pointer px-3 py-1">
        <p>en</p> <HiChevronDown />
      </button>
      {isOpen && (
        <ul className="absolute right-0 z-10 block w-20 bg-white shadow-lg">
          <li className="cursor-pointer list-none p-1.5 text-center transition-all duration-300 ease-in-out hover:bg-gray-200">
            English
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
