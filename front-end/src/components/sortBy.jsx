import { useState } from "react";

const SortBy = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select an option");
  
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };
  
    const handleSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option); 
    };
  
    return (
      <div className="relative border-2 rounded-md px-2">
        <button
          type="button"
          className="flex justify-center items-center p-0"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
  
        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg">
            <div className="py-1">
              {["Recent", "name", "Date"].map((option) => (
                <a
                  key={option}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default SortBy;
  