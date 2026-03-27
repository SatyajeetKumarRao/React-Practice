import React, { useState } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [taskLabel, setTaskLabel] = useState("");
    const [editTodd, setEditTodo] = useState(null);

    const handleAddNewTodo = () => {
        if (editTodd) {
            handleTodoUpdate(editTodd, 'label', taskLabel);
            setEditTodo(null);
            setTaskLabel('');
        }
        else {
            const newTodo = {
                id: crypto.randomUUID(),
                label: taskLabel,
                completed: false,
            };
            setTodoList((prev) => [...prev, newTodo]);
            setTaskLabel("");
        }
    };

    function handleTodoUpdate(id, key, value) {
        setTodoList((prev) => {
            const updatedTodos = prev.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        [key]: value,
                    };
                }
                return todo;
            });

            return updatedTodos;
        });
    }

    function handleDelete(id) {
        setTodoList((prev) => {
            const updatedTodos = prev.filter((todo) => todo.id !== id);
            return updatedTodos;
        });
    }

    function handleEdit(id) {
        const todo = todoList.find((todo) => todo.id === id);
        setTaskLabel(todo.label);
        setEditTodo(todo.id);
    }
    return (
        <div className="todo">
            {/* <h2>Todo</h2> */}
            <div className="todo-container">
                <p className="title">To-Do List</p>
                <div className="todo-input-container">
                    <input
                        className="todo-input"
                        type="text"
                        name="todo-name"
                        id="todo-name"
                        placeholder="Add your task"
                        value={taskLabel}
                        onChange={(e) => setTaskLabel(e.target.value)}
                    />
                    <button className="todo-add-btn" type="button" disabled={!taskLabel} onClick={handleAddNewTodo}>
                        {editTodd ? "Save" : "Add"}
                    </button>
                </div>
                <div className="todo-card-container">
                    {todoList.map((todo) => (
                        <div className="todo-card" key={todo.id}>
                            <input
                                className="todo-card-checkbox"
                                type="checkbox"
                                name="todo-completed"
                                id="todo-completed"
                                checked={todo.completed}
                                onChange={(e) =>
                                    handleTodoUpdate(todo.id, 'completed', e.currentTarget.checked)
                                }
                            />
                            <p className={`todo-card-label ${todo.completed ? 'completed' : ''}`}>{todo.label}</p>
                            <div className="todo-card-btn">
                                <button
                                    className="todo-card-btn-edit"
                                    type="button"
                                    onClick={() => handleEdit(todo.id)}
                                >
                                    <FontAwesomeIcon icon={faPen} color="orange" />
                                </button>
                                <button
                                    className="todo-card-btn-delete"
                                    type="button"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} color="red" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todo;
