import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Frenzify</h1>
      </div>
      <div className="urls">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/friends">Friends</a>
      </div>
    </header>
  );
}
