import React, { useState } from 'react';
import TodoList from '../../components/todoList/TodoList';
import '../../app.scss';

const TodoPage = () => {
    const initialTodos = [
        { id: 1, text: 'Task 1', isEditing: false },
        { id: 2, text: 'Task 2', isEditing: false },
        { id: 3, text: 'Task 3', isEditing: false },
        { id: 4, text: 'Task 4', isEditing: false },
        { id: 5, text: 'Task 5', isEditing: false },
        { id: 6, text: 'Task 6', isEditing: false },
    ];

    const [todos, setTodos] = useState(initialTodos);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue, isEditing: false }]);
            setInputValue('');
        }
    };

    const updateTodo = (id, newText) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText, isEditing: false } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleEditTodo = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
    };

    return (
        <div className="todo-container">
            <h1>TO DO</h1>
            <div className={'todo-header'}>
                <input
                    placeholder={'Enter a task'}
                    className="todo-input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className={'todo-button'} onClick={addTodo} disabled={!inputValue.trim()}>Add task</button>
            </div>

            <TodoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                toggleEditTodo={toggleEditTodo}
            />
        </div>
    );
};

export default TodoPage;