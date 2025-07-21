import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false, isEditing: false },
        { id: 2, text: "Build a Todo App", completed: false, isEditing: false },
    ]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        document.body.style.background = "linear-gradient(135deg, #c2e9fb, #a1c4fd)";
        return () => {
            document.body.style.background = "";
        };
    }, []);

    const addTodo = () => {
        if (input.trim() === "") return;
        setTodos([...todos, {
            id: Date.now(),
            text: input.trim(),
            completed: false,
            isEditing: false,
        }]);
        setInput("");
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEditing = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: true } : todo
        ));
    };

    const saveEdit = (id, newText) => {
        if (newText.trim() === "") return;
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText.trim(), isEditing: false } : todo
        ));
    };

    const cancelEdit = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: false } : todo
        ));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });

    return (
        <div className="max-w-3xl mx-auto mt-20 p-10 rounded-3xl backdrop-blur-xl bg-white/30 shadow-2xl border border-white/30 relative">
            {/* Header */}
            <h1 className="text-5xl font-bold text-center text-white mb-10 drop-shadow-md">
                <span className="inline-block animate-pulse">🌟</span> My Tasks
            </h1>

            {/* Input Field */}
            <div className="flex items-center mb-8 bg-white/50 backdrop-blur-md p-3 rounded-xl shadow-inner border border-gray-200">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add something awesome..."
                    className="flex-grow px-4 py-2 rounded-l-xl border-none focus:outline-none bg-transparent text-gray-700 text-lg placeholder-gray-500"
                />
                <button
                    onClick={addTodo}
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-2 rounded-r-xl font-bold shadow-md transition"
                >
                    Add
                </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                {["all", "active", "completed"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md border ${
                            filter === f
                                ? "bg-gradient-to-r from-blue-400 to-green-400 text-white border-transparent"
                                : "bg-white/50 text-gray-700 border-gray-300 hover:bg-white/70"
                        } transition`}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            {/* Todo List */}
            <ul className="space-y-5">
                {filteredTodos.length === 0 ? (
                    <li className="text-center text-white/80 font-medium py-8 text-lg">
                        You're free today! 🎉
                    </li>
                ) : (
                    filteredTodos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex items-center justify-between p-6 rounded-2xl shadow-xl border transition-all group ${
                                todo.completed
                                    ? "bg-green-100/40 border-green-300"
                                    : "bg-white/70 border-blue-200"
                            }`}
                        >
                            {todo.isEditing ? (
                                <input
                                    type="text"
                                    defaultValue={todo.text}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") saveEdit(todo.id, e.target.value);
                                        if (e.key === "Escape") cancelEdit(todo.id);
                                    }}
                                    onBlur={(e) => saveEdit(todo.id, e.target.value)}
                                    autoFocus
                                    className="flex-grow mr-3 px-4 py-2 border rounded-xl text-base font-medium bg-white/90"
                                />
                            ) : (
                                <span
                                    onClick={() => toggleComplete(todo.id)}
                                    className={`flex-grow cursor-pointer text-lg font-semibold ${
                                        todo.completed
                                            ? "line-through text-gray-400"
                                            : "text-gray-800 hover:text-green-600"
                                    } transition`}
                                >
                                    {todo.text}
                                </span>
                            )}
                            <div className="flex gap-2 ml-4">
                                {todo.isEditing ? (
                                    <button
                                        onClick={() => cancelEdit(todo.id)}
                                        className="text-sm px-4 py-1.5 rounded-xl bg-yellow-100 text-yellow-700 hover:bg-yellow-200 font-semibold shadow transition"
                                    >
                                        Cancel
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => startEditing(todo.id)}
                                        className="text-sm px-4 py-1.5 rounded-xl bg-blue-100 text-blue-700 hover:bg-blue-200 font-semibold shadow transition"
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="px-4 py-1.5 rounded-xl bg-red-100 text-red-700 hover:bg-red-200 font-semibold shadow text-lg transition"
                                    title="Delete"
                                >
                                    🗑️
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Dashboard;