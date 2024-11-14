import React, { useState } from "react";
import "../ui/dropdown.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        en
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">English</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
