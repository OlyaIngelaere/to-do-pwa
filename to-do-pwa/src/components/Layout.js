import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">TodoPWA</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Overview</Link>
          <Link className="nav-link" to="/create">Create</Link>
        </div>
      </nav>

      <main className="container py-4">
        <Outlet /> {}
      </main>
    </>
  );
}