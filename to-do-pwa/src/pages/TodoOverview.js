import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TodoOverview({ todos, toggleDone }) {
  const [filter, setFilter] = useState('all');
  const now = new Date();

  const filtered = todos.filter(todo => {
    if (filter === 'done') return todo.done;
    if (filter === 'open') return !todo.done;
    if (filter === 'past') return new Date(todo.time) < now;
    if (filter === 'future') return new Date(todo.time) >= now;
    return true;
  });

  return (
    <div className="container mt-4">
      <h2>Todo Overview</h2>

      <div className="mb-3 d-flex align-items-center">
        <Link to="/create" className="btn btn-primary me-2">Create New</Link>
        <select onChange={e => setFilter(e.target.value)} className="form-select w-auto d-inline">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="open">Open</option>
          <option value="past">Past Due</option>
          <option value="future">Upcoming</option>
        </select>
      </div>

      <ul className="list-group">
        {filtered.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <Link to={`/todo/${todo.id}`} className="text-decoration-none">
                <strong>{todo.title}</strong> — {todo.done ? "✅ Done" : "⏳ Open"}
              </Link>
              <br />
              <small className="text-muted">{new Date(todo.time).toLocaleString()}</small>
            </div>
            <button
              className={`btn btn-sm ${todo.done ? 'btn-secondary' : 'btn-success'}`}
              onClick={() => toggleDone(todo.id)}
            >
              {todo.done ? 'Undo' : 'Mark as Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}