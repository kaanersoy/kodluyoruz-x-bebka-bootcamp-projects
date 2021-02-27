import './Home.scss';
import React from 'react';
import mainPageCoverImage from '../images/main-page-cover.svg';

export default function Home() {
  return (
    <div>
      <div className="app-content">
        <div className="content">
          <h1>Frienzify</h1>
          <p>Click and watch how rises your friend count!</p>
        </div>
        <div className="image">
          <img src={mainPageCoverImage} alt="" />
        </div>
      </div>
    </div>
  );
}
