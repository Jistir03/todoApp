import React from "react";

const DeleteModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <dialog className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm Deletion</h3>
                <p className="py-4">
                    Are you sure you want to delete this task?
                </p>
                <div className="modal-action">
                    <button className="btn btn-error" onClick={onConfirm}>
                        Yes, Delete
                    </button>
                    <button className="btn" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default DeleteModal;
