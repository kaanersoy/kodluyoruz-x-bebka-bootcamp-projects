import './Header.scss';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 5) {
        return setIsSticky(true);
      }
      setIsSticky(false);
    });
  });

  return (
    <header className={isSticky ? 'sticky' : null}>
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
