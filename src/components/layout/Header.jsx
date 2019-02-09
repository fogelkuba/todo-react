import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">Abouts</Link>
    </header>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px'
}

const linkStyle = {
  color: '#fff',
  margin: '0 1rem'
}

