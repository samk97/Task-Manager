import React, { useState } from "react";

const EditTaskModal = ({ isOpen, task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

  // Update the state when the task prop changes (important when the modal opens with a new task)
  React.useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Task Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={editedTask?.name || ""}
              onChange={(e) =>
                setEditedTask({ ...editedTask, name: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              value={editedTask?.description || ""}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
