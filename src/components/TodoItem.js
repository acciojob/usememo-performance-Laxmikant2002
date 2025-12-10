import React from 'react';

const TodoItem = ({ todo }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
        </li>
    );
};

export default TodoItem;