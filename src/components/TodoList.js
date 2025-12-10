import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos}) => {
    const slowDown = () => {
        for (let i = 0; i < 10000000; i++) {
        }
    };
    slowDown();

    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;