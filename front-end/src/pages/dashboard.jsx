import { useState } from "react";
import EditTaskModal from "../components/editTaskModal";
import DetailsModal from "../components/detailsModel";
import DeleteConfirmationModal from "../components/deleteConfirmationModal";
import AddTaskModal from "../components/addTaskModel";
import TaskCard from "../components/taskCard";
import SortBy from "../components/sortBy";

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

 

  const [searchQuery, setSearchQuery] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); 
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [columnToEdit, setColumnToEdit] = useState("");
  const [taskToView, setTaskToView] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [columnToDelete, setColumnToDelete] = useState("");
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false); 

  const openAddTaskModal = () => {
    setIsAddTaskModalOpen(true);
  };

  const handleAddTask = (newTask) => {
    setColumns((prev) => ({
      ...prev,
      [newTask.status]: [...prev[newTask.status], newTask],
    }));
  };

  const onDrop = (e, toColumn) => {
    const task = JSON.parse(e.dataTransfer.getData("task"));
    const fromColumn = e.dataTransfer.getData("fromColumn");

    if (toColumn === fromColumn) return;

    setColumns((prev) => {
      const fromData = prev[fromColumn].filter((t) => t.name !== task.name);
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterTasks = (tasks) => {
    return tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSelect = (option) => {
    sortTasks(option);
  };

  const sortTasks = (option) => {
    const sortedColumns = { ...columns };

    Object.keys(sortedColumns).forEach((column) => {
      sortedColumns[column] = sortedColumns[column].sort((a, b) => {
        if (option === "Recent") {
          return new Date(b.createdAt) - new Date(a.createdAt); 
        } else if (option === "name") {
          return a.name.localeCompare(b.name); 
        } else if (option === "Date") {
          return new Date(a.createdAt) - new Date(b.createdAt); 
        }
        return 0;
      });
    });

    setColumns(sortedColumns);
  };


  const confirmDelete = (task, column) => {
    console.log("Confirm Delete Called:", task);
    setTaskToDelete(task);
    setColumnToDelete(column);
    setIsDeleteModalOpen(true);
  };


  const handleDelete = () => {
    setColumns((prevColumns) => {
      const updatedTasks = prevColumns[columnToDelete].filter(
        (task) => task.name !== taskToDelete.name
      );
      return {
        ...prevColumns,
        [columnToDelete]: updatedTasks,
      };
    });
    setIsDeleteModalOpen(false);
  };


  const openEditModal = (task, column) => {
    setTaskToEdit(task);
    setColumnToEdit(column);
    setIsEditModalOpen(true);
  };

  const handleTaskUpdate = (updatedTask) => {
    setColumns((prevColumns) => {
      const updatedTasks = prevColumns[columnToEdit].map((task) => {
        if (task.name === taskToEdit.name) {
          return updatedTask;
        }
        return task;
      });
      return {
        ...prevColumns,
        [columnToEdit]: updatedTasks,
      };
    });
    setIsEditModalOpen(false);
  };

  const openDetailsModal = (task) => {
    setTaskToView(task); 
    setIsDetailsModalOpen(true); 
  };

  return (
    <div className="flex flex-col justify-start m-3 gap-2">
      <div >
        <button
          type="button"
          className="text-white bg-[#3173f5] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 w-full md:w-[200px] py-2.5 "
          onClick={openAddTaskModal}
        >
          Add Task
        </button>
      </div>

      <div className="p-2 border-[1px] shadow-xl rounded-sm flex justify-start lg:justify-between items-start lg:items-center gap-2 px-5 flex-col lg:flex-row ">
        <div className="flex gap-2">
          <div className="flex justify-center items-center font-semibold w-[80px]">
            Search:
          </div>
          <div className="border-2 rounded-md px-2 py-[0.1rem] lg:w-80">
            <input
              className="outline-none w-full"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex justify-center items-center font-semibold w-[80px]">
            Sort By:
          </div>

          <SortBy onSelect={handleSelect} />
        </div>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row">
        {Object.keys(columns).map((column) => (
          <div
            key={column}
            className="w-full lg:w-1/3 border-[1px] rounded-lg p-4 shadow-lg"
            onDrop={(e) => onDrop(e, column)}
            onDragOver={onDragOver}
          >
            <h2 className="w-100 h-[40px] bg-[#3173f5] rounded-[3px] text-white flex items-center px-2 text-lg font-semibold">
              {column}
            </h2>

            {filterTasks(columns[column]).map((task, index) => (
              <TaskCard
                key={index}
                task={task}
                column={column}
                index={index}
                onDragStart={onDragStart}
                confirmDelete={confirmDelete}
                openEditModal={openEditModal}
                openDetailsModal={openDetailsModal}
              />
            ))}
          </div>
        ))}
      </div>

      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAdd={handleAddTask}
      />
      <EditTaskModal
        isOpen={isEditModalOpen}
        task={taskToEdit}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleTaskUpdate}
      />
      <DetailsModal
        isOpen={isDetailsModalOpen}
        task={taskToView}
        onClose={() => setIsDetailsModalOpen(false)}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        taskName={taskToDelete?.name}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Dashboard;
