import React, { useState } from 'react';
import editIcon from '../../images/Edit.png';
import deleteIcon from '../../images/Delete.png';

const Todo = ({ todo, updateTodo, deleteTodo, toggleEditTodo }) => {
    const [editValue, setEditValue] = useState(todo.text);

    const handleEdit = () => {
        if (todo.isEditing && editValue.trim()) {
            updateTodo(todo.id, editValue);
        } else {
            toggleEditTodo(todo.id);
        }
    };

    const handleCancel = () => {
        setEditValue(todo.text);
        toggleEditTodo(todo.id);
    };

    return (
        <li className="todo-item">
            {todo.isEditing ? (
                <>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <div className="todo-buttons">
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handleEdit}>Save</button>
                    </div>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <div className="todo-img">
                        <div className={'img'} onClick={handleEdit}><img src={editIcon} alt="Edit"/></div>
                        <div className={'img'} onClick={() => deleteTodo(todo.id)}><img src={deleteIcon} alt="Delete"/></div>
                    </div>
                </>
            )}
        </li>
    );
};

export default Todo;