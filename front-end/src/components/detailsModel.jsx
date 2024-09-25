import React, { useState } from "react";

const DetailsModal = ({ isOpen, task, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Task Name</label>
            <div className="w-full p-2 border rounded">{task?.name || ""}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <div className="w-full p-2 border rounded">
              {" "}
              {task?.description || ""}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsModal;
