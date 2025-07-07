import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

export default function useTodo() {
    const { props } = usePage();
    const todos = props.todos || [];

    const [showForm, setShowForm] = useState(false);
    const [filterDate, setFilterDate] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        id: null,
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const toggleForm = () => setShowForm(!showForm);

    const handleEdit = (todo) => {
        setData({
            id: todo.ID,
            title: todo.TITLE,
            description: todo.DESCRIPTION,
        });
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const endpoint = data.id ? "/update-task" : "/add-task";

        post(endpoint, {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setShowForm(false);
            },
        });
    };

    const filteredTodos = filterDate
        ? todos.filter((todo) => todo.CREATED_AT?.startsWith(filterDate))
        : todos;

    return {
        data,
        errors,
        processing,
        showForm,
        filterDate,
        filteredTodos,
        handleChange,
        handleSubmit,
        toggleForm,
        setFilterDate,
        handleEdit, // ✅ expose this so you can pass it to TodoList
    };
}
