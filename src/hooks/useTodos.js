import { useState } from 'react';

const generateTodos = () => {
    const todos = [];
    for (let i = 1; i <= 50; i++) {
        todos.push({
            id: i,
            text: `Task ${i}`,
            completed: i % 2 === 0,
        });
    }
    return todos;
};

const useTodos = () => {
    const [todos, setTodos] = useState(generateTodos());

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return { todos, addTodo };
};

export default useTodos;