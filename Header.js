import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return <div className="header">
    <Link to="/">Home</Link>
      <h1>Todo App</h1>
  </div>;
};

export default Header;
