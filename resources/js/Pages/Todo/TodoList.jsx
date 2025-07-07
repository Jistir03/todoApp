import React from "react";
import { Pencil, Trash2, CheckCircle } from "lucide-react";
import dayjs from "dayjs";

const TodoList = ({ todos, onEdit, onCompleted }) => {
    return (
        <div className="space-y-4">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <div
                        key={todo.ID}
                        className="card bg-base-100 shadow-md border border-base-300"
                    >
                        <div className="card-body flex flex-col min-h-[180px]">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <h2 className="card-title text-base-content mb-0">
                                        {todo.TITLE}
                                    </h2>
                                    {todo.IS_COMPLETED == 1 && (
                                        <span className="badge badge-success">
                                            Completed
                                        </span>
                                    )}
                                </div>

                                {todo.IS_COMPLETED == 0 && (
                                    <div className="flex items-center gap-2">
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
                                        <button
                                            onClick={() => onCompleted(todo.ID)}
                                            className="btn btn-outline btn-success btn-sm"
                                            title="Complete"
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <p className="text-base-content mt-2">
                                {todo.DESCRIPTION}
                            </p>

                            <div className="flex-1" />

                            <div className="text-sm text-base-content opacity-60 text-right mt-4 ml-auto">
                                <div>
                                    Created:{" "}
                                    {dayjs(todo.CREATED_AT).format(
                                        "MMMM D, YYYY h:mm A"
                                    )}
                                </div>
                                {todo.IS_COMPLETED == 1 &&
                                    todo.COMPLETED_AT && (
                                        <div>
                                            Completed:{" "}
                                            {dayjs(todo.COMPLETED_AT).format(
                                                "MMMM D, YYYY h:mm A"
                                            )}
                                        </div>
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
