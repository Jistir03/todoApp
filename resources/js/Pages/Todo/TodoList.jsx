// resources/js/Pages/Todo/TodoList.jsx
import React from "react";
import { Pencil, Trash2, CheckCircle } from "lucide-react";
import dayjs from "dayjs";

const TodoList = ({ todos, onEdit }) => {
    return (
        <div className="space-y-4">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <div
                        key={todo.ID}
                        className="card bg-base-100 shadow-md border border-base-300"
                    >
                        <div className="card-body">
                            <h2 className="card-title text-base-content">
                                {todo.TITLE}
                                {todo.IS_COMPLETED == 1 && (
                                    <span className="badge badge-success ml-2">
                                        Completed
                                    </span>
                                )}
                            </h2>
                            <p className="text-base-content">
                                {todo.DESCRIPTION}
                            </p>
                            <div className="text-sm text-base-content opacity-60">
                                Created at:{" "}
                                {dayjs(todo.CREATED_AT).format(
                                    "MMMM D, YYYY h:mm A"
                                )}
                            </div>
                            <div className="card-actions justify-end mt-2">
                                <button
                                    onClick={() => onEdit(todo)}
                                    className="btn btn-outline btn-primary btn-sm"
                                    title="Edit"
                                >
                                    <Pencil className="w-4 h-4" />
                                </button>

                                <button
                                    className="btn btn-outline btn-error btn-sm"
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                                {todo.IS_COMPLETED == 0 && (
                                    <button
                                        className="btn btn-outline btn-success btn-sm"
                                        title="Complete"
                                    >
                                        <CheckCircle className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center text-base-content opacity-60">
                    No todos found for selected date.
                </div>
            )}
        </div>
    );
};

export default TodoList;
