import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { cities } from '../data/CityList';

import { Dropdown } from 'primereact/dropdown';

export function DropDown() {
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




export  function DropdownCity() {
  const [selectedCity, setSelectedCity] = useState(null);
  console.log(cities );

  return (
    <div className="card justify-content-center flex">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        
        optionLabel="name"
        placeholder="Select a City"
        className="md:w-14rem w-full"
        checkmark={true}
        highlightOnSelect={false}
      />
    </div>
  );
}
