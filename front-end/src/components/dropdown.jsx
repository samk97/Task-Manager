import React from 'react';

const Dropdown = ({ isOpen, handleSelect, options }) => {
  return (
    isOpen && (
      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {options.map((option, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    )
  );
};

export default Dropdown;
