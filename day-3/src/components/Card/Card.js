import React from 'react';
import './Card.scss';

export default function Card(props) {
  const { user } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={user.picture.large} alt="" />
      </div>
      <h3>{user.name.first + ' ' + user.name.last}</h3>
      <p>People Description</p>
      <small>Phone vsvs</small>
    </div>
  );
}
