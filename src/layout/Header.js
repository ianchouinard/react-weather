import React from 'react';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>React Weather</h1>
      <nav>
        <Link to="/">Forecast</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  )
}
