import React, { useEffect, useState } from 'react';
import './Friends.scss';
import Card from '../Card/Card';
import loadingIcon from '../images/loading-rolling.svg';

export default function Friends() {
  const [randomUser, setRandomUser] = useState({ name: { title: 'oley be' } });
  const [isLoaded, setIsLoaded] = useState(false);
  const FETCH_API = 'https://randomuser.me/api/';
  useEffect(() => {
    getRandomUser();
  }, []);
  function getRandomUser() {
    setIsLoaded(false);
    fetch(FETCH_API)
      .then((res) => res.json())
      .then((res) => setRandomUser(res.results[0]))
      .then(() => setIsLoaded(true));
  }
  return (
    <section className="friends">
      <h1>Friends</h1>
      <div className="card-container">{isLoaded ? <Card user={randomUser} /> : null}</div>
      {!isLoaded ? (
        <div className="loading-icon">
          <img src={loadingIcon} />
        </div>
      ) : null}
    </section>
  );
}
