import { useState } from "react";

const Dashboard = () => {
  const [columns, setColumns] = useState({
    TODO: [
      {
        name: "Task 1",
        description: "Description for Task 1",
        createdAt: "2023-09-01",
      },
      {
        name: "Task 2",
        description: "Description for Task 2",
        createdAt: "2023-09-02",
      },
    ],
    "IN PROGRESS": [
      {
        name: "Task 3",
        description: "Description for Task 3",
        createdAt: "2023-09-03",
      },
      {
        name: "Task 4",
        description: "Description for Task 4",
        createdAt: "2023-09-04",
      },
    ],
    DONE: [
      {
        name: "Task 5",
        description: "Description for Task 5",
        createdAt: "2023-09-05",
      },
    ],
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recent");

  
  const onDrop = (e, toColumn) => {
    const task = JSON.parse(e.dataTransfer.getData("task")); // Parse task JSON
    const fromColumn = e.dataTransfer.getData("fromColumn");

    if (toColumn === fromColumn) return; // If dropped in the same column, do nothing

    setColumns((prev) => {
      // Remove task from the original column
      const fromData = prev[fromColumn].filter((t) => t.name !== task.name);
      // Add task to the target column
      const toData = [...prev[toColumn], task];

      return {
        ...prev,
        [fromColumn]: fromData,
        [toColumn]: toData,
      };
    });
  };

  const onDragOver = (e) => e.preventDefault();

  const onDragStart = (e, task, fromColumn) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("fromColumn", fromColumn);
  };

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col justify-start m-3 gap-2">
      <div >
        <button
          type="button"
          className="text-white bg-[#3173f5] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 w-[200px] py-2.5 "
        >
          Add Task
        </button>
      </div>

      <div className="h-[60px] border-[1px] shadow-xl rounded-sm flex justify-between items-center px-5">
        <div className="flex gap-2">
          <div className="flex justify-center items-center font-semibold">Search:</div>
          <div className="border-2 rounded-md px-2 py-[0.1rem] w-80">
            <input
              className="outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        
        <div className="flex gap-2">
          <div className="flex justify-center items-center font-semibold">Sort By:</div>
          <div className="relative border-2 rounded-md px-2 ">
            <button
              type="button"
              className="flex justify-center items-center p-0"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
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
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => handleSelect("Recent")}
                  >
                    Recent
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={() => handleSelect("Date")}
                  >
                    Date
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={() => handleSelect("Time")}
                  >
                    Time
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      
      <div className="flex space-x-5">
        {Object.keys(columns).map((column) => (
          <div
            key={column}
            className="w-1/3 h-screen border-[1px] rounded-lg p-4 shadow-lg"
            onDrop={(e) => onDrop(e, column)}
            onDragOver={onDragOver}
          >
            <h2 className="w-100 h-[40px] bg-[#3173f5] rounded-[3px] text-white flex items-center px-2 text-lg font-semibold">
              {column}
            </h2>

            {columns[column].map((task, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => onDragStart(e, task, column)}
                className="bg-blue-200 h-[150px] p-3 mt-2 flex flex-col justify-between rounded shadow-lg cursor-move"
              >
                <div className="flex flex-col">
                  <h2 className="w-100 h-[30px] text-lg font-bold">
                    {task.name}
                  </h2>
                  <p>{task.description}</p>
                </div>
                <div>
                  <div>
                    <small>Created At: {task.createdAt}</small>
                  </div>
                  <div className="flex justify-end items-center gap-1">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-3 py-1"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-3 py-1"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-3 py-1"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
