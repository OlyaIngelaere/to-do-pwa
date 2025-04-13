import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TodoOverview from './pages/TodoOverview';
import CreateTodo from './pages/CreateTodo';
import TodoDetail from './pages/TodoDetail';

function App() {
  const [todos, setTodos] = useState([]);

  const toggleDone = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TodoOverview todos={todos} toggleDone={toggleDone} />} />
          <Route path="/create" element={<CreateTodo setTodos={setTodos} />} />
          <Route path="/todo/:id" element={<TodoDetail todos={todos} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;