import React from 'react';
import Todo from '../todo/Todo';

const TodoList = ({ todos, updateTodo, deleteTodo, toggleEditTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    toggleEditTodo={toggleEditTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;