import React, { useState, useMemo } from 'react';
import useTodos from '../hooks/useTodos';
import Filter from './Filter';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import '../styles/App.css';

const App = () => {
  const { todos, addTodo } = useTodos(); // Destructure to get the todos array and addTodo function
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter(todo => !todo.completed);
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    return todos;
  }, [todos, filter]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark' : ""}`}>
      <h1>Todo App with useMemo Performance</h1>
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Filter filter={filter} setFilter={setFilter} />
      <AddTodo addTodo={addTodo} /> {/* Pass addTodo as a prop */}
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default App;