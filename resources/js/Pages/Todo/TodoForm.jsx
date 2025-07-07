// resources/js/Pages/Todo/TodoForm.jsx
import React from "react";

const TodoForm = ({ data, errors, handleChange, handleSubmit, processing }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="card bg-base-100 shadow-md">
                <div className="card-body space-y-4">
                    <label className="form-control w-full floating-label">
                        <input
                            name="title"
                            type="text"
                            placeholder=" "
                            value={data.title}
                            onChange={handleChange}
                            className={`input input-bordered w-full ${
                                errors.title ? "input-error" : ""
                            }`}
                        />
                        <span>Title</span>
                    </label>

                    <label className="form-control w-full floating-label relative">
                        <textarea
                            name="description"
                            placeholder=" "
                            value={data.description}
                            onChange={handleChange}
                            className={`textarea textarea-bordered w-full resize-none pt-6 ${
                                errors.description ? "textarea-error" : ""
                            }`}
                            rows="4"
                        ></textarea>
                        <span className="absolute left-3 top-2 text-sm text-gray-500 bg-base-100 px-1 pointer-events-none">
                            Description
                        </span>
                    </label>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="btn btn-success"
                            disabled={processing}
                        >
                            Save Todo
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TodoForm;
