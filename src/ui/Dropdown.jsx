import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { vendor } from '../data/VendorLIst';

import { Dropdown } from 'primereact/dropdown';

export function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center justify-center px-3 py-1"
      >
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

export function DropdownList() {
  const [selectedVendor, setSelectedVendor] = useState(null);

  return (
    <div className=" justify-content-center flex">
      <Dropdown
        value={selectedVendor}
        onChange={(e) => setSelectedVendor(e.value)}
        options={vendor}
        optionLabel="name"
        placeholder="Select Vendor"
        className="md:w-14rem w-full"
        checkmark={true}
        highlightOnSelect={false}
      />
    </div>
  );
}
