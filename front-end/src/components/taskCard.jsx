import React from "react";

const TaskCard = ({
  task,
  column,
  index,
  onDragStart,
  confirmDelete,
  openEditModal,
  openDetailsModal,
}) => {
  return (
    <div
      key={index}
      draggable
      onDragStart={(e) => onDragStart(e, task, column)}
      className="bg-blue-200 p-3 mt-2 flex flex-col gap-4 justify-between rounded shadow-lg cursor-move"
    >
      <div className="flex flex-col">
        <h2 className="w-100 h-[30px] text-lg font-bold">{task.name}</h2>
        <p>{task.description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <small>Created At: {task.createdAt}</small>
        </div>
        <div className="flex justify-end items-center gap-1">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-1"
            onClick={() => confirmDelete(task, column)}
          >
            Delete
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-1"
            onClick={() => openEditModal(task, column)}
          >
            Edit
          </button>

          <button
            type="button"
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-1"
            onClick={() => openDetailsModal(task, column)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
