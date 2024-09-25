import React from 'react';

const DeleteConfirmationModal = ({ isOpen, taskName, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Delete Task</h2>
        <p>Are you sure you want to delete the task "{taskName}"?</p>
        <div className="flex justify-end mt-4">
          <button
            className="text-white bg-gray-500 hover:bg-gray-700 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
