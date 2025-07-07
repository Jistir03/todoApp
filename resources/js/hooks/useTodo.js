import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
export default function useTodo() {
    const { props } = usePage();
    const todos = props.todos || [];

    const [showForm, setShowForm] = useState(false);
    const [filterDate, setFilterDate] = useState("");
    const [deletingTodoId, setDeletingTodoId] = useState(null);

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
    const confirmDelete = (id) => {
        setDeletingTodoId(id);
    };

    const handleDelete = () => {
        if (!deletingTodoId) return;

        router.post(
            "/delete-task",
            { id: deletingTodoId },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setDeletingTodoId(null); // Close modal
                },
            }
        );
    };

    const closeDeleteModal = () => setDeletingTodoId(null);

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
    const handleComplete = (id) => {
        router.post("/set-as-complete", { id });
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
        handleEdit,
        handleComplete,
        handleComplete,
        confirmDelete,
        handleDelete,
        closeDeleteModal,
        deletingTodoId,
    };
}
