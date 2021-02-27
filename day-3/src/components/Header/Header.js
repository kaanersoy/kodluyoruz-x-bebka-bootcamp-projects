import './Header.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        return setIsSticky(true);
      }
      setIsSticky(false);
    });
  });

  return (
    <section>
      <header className={isSticky ? 'sticky' : null}>
        <div className="logo">
          <h1>Frenzify</h1>
        </div>
        <div className="urls">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/friends">Friends</Link>
        </div>
      </header>
      <div className="place-holder"></div>
    </section>
  );
}
