import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title,
      text,
      time,
      done: false,
    };
    setTodos(prev => [...prev, newTodo]);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Create New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Text</label>
          <textarea value={text} onChange={e => setText(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date & Time</label>
          <input type="datetime-local" value={time} onChange={e => setTime(e.target.value)} className="form-control" required />
        </div>
        <button className="btn btn-success">Add Todo</button>
      </form>
    </div>
  );
}