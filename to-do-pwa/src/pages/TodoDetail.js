import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function TodoDetail({ todos }) {
  const { id } = useParams();
  const todo = todos.find(t => t.id === id);
  const navigate = useNavigate();

  if (!todo) return <div className="container mt-4">Todo not found</div>;

  return (
    <div className="container mt-4">
      <h2>{todo.title}</h2>
      <p><strong>Text:</strong> {todo.text}</p>
      <p><strong>Status:</strong> {todo.done ? 'Done ✅' : 'Open ⏳'}</p>
      <p><strong>Time:</strong> {new Date(todo.time).toLocaleString()}</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}