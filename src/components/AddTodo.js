import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Add a new todo'
                style={{ padding: '10px', width: '70%' }}
            />
            <button type='submit' style={{ padding: '10px' }}>
                Add
            </button>
        </form>
    );
};

export default AddTodo;