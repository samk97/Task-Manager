import React, { useState } from "react";

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("TODO"); // Default status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      const newTask = {
        name: taskName,
        description: taskDescription,
        createdAt: new Date().toISOString().split("T")[0],
        status: taskStatus, // Include status in new task
      };
      onAdd(newTask);
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-md shadow-md w-1/3">
          <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Task Name</label>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="border rounded-md w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Description</label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="border rounded-md w-full p-2"
                rows="3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Status</label>
              <select
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
                className="border rounded-md w-full p-2"
              >
                <option value="TODO">TODO</option>
                <option value="IN PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddTaskModal;
