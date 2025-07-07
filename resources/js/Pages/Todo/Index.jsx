// resources/js/Pages/Todo/Index.jsx
import React from "react";
import useTodo from "@/hooks/useTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Index = () => {
    const {
        data,
        errors,
        handleChange,
        handleSubmit,
        processing,
        showForm,
        toggleForm,
        filterDate,
        setFilterDate,
        filteredTodos,
        handleEdit,
        handleComplete,
    } = useTodo();

    return (
        <div className="min-h-screen flex flex-col items-center bg-base-200 p-6">
            <div className="w-full max-w-xl space-y-4">
                <h1 className="text-3xl font-bold text-center">Todo App</h1>

                <div className="flex items-center justify-between">
                    <label className="form-control w-1/2">
                        <div className="label">
                            <span className="label-text">Filter by date</span>
                        </div>
                        <input
                            type="date"
                            className="input input-bordered"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                        />
                    </label>

                    <button className="btn btn-primary" onClick={toggleForm}>
                        {showForm ? "Cancel" : "Add Todo"}
                    </button>
                </div>

                {showForm && (
                    <TodoForm
                        data={data}
                        errors={errors}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        processing={processing}
                    />
                )}

                <TodoList
                    todos={filteredTodos}
                    onEdit={handleEdit}
                    onCompleted={handleComplete}
                />
            </div>
        </div>
    );
};

export default Index;
