import React from 'react';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [shuffledCards, setShuffledCards] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [matches, setMatches] = useState([]);

  function selectCard(i, emoji) {
    const card = {
      emoji: emoji,
      i: i,
    };
    setFlippedCards((cards) => [...cards, card]);
  }
  useEffect(() => {
    if (flippedCards.length > 1) {
      const lastEmoji = flippedCards[flippedCards.length - 1];
      const lastSecondEmoji = flippedCards[flippedCards.length - 2];
      if (lastEmoji.emoji == lastSecondEmoji.emoji) {
        setMatches([...matches, lastEmoji, lastSecondEmoji]);
        return setScore(score + 1);
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const emojies = ['💩', '😱', '👶', '💖'];
    setShuffledCards([...shuffleArray(emojies), ...shuffleArray(emojies)]);
  }, []);

  return (
    <div className="App">
      <div className="login-screen"></div>
      <header>
        <h1>CARD GAME</h1>
        <h3>Your score : {score}</h3>
      </header>
      <div className="card-container">
        {shuffledCards
          ? shuffledCards.map((emoji, i) => (
              <div
                className={
                  flippedCards.filter((card) => card.i === i)[0] ||
                  matches.filter((match) => match.emoji == emoji)[0]
                    ? 'card flipped'
                    : 'card'
                }
                onClick={() => {
                  selectCard(i, emoji);
                }}
                id={i}
                key={i}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front"></div>
                  <div className="flip-card-back">
                    <span>{emoji}</span>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
