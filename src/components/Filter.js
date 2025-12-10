import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <div className='filters'>
            <button onClick={() => setFilter("all")} disabled={filter === "all"}>
                All
            </button>
            <button onClick={() => setFilter("active")} disabled={filter === "active"}>
                Active
            </button>
            <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>
                Completed
            </button>
        </div>
    );
};

export default Filter;