import React from 'react';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [shuffledCards, setShuffledCards] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [matches, setMatches] = useState([]);
  const [isStarted, setIsStarted] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [gameAnimate, setGameAnimate] = useState(false);
  const [finishAnimate, setFinishAnimate] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  function selectCard(i, emoji) {
    const card = {
      emoji: emoji,
      i: i,
    };
    setFlippedCards((cards) => [...cards, card]);
  }

  function fadeoutEase() {
    setAnimate(true);
    setTimeout(() => {
      setIsStarted(false);
    }, 1000);
  }
  function toggleGameAnimate() {}

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
    if (score == 4) {
      setTimeout(() => {
        setIsFinished(true);
      }, 400);
      setTimeout(() => {
        setFinishAnimate(true);
      }, 600);
    }
  }, [score]);

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
      {isStarted ? (
        <section className={animate ? 'login animate' : 'login'}>
          <div className="content">
            <h1>
              WELCOME TO<span>MemoCard</span>
            </h1>
            <div onClick={() => fadeoutEase()} className="button">
              <span>Start</span>
            </div>
          </div>
        </section>
      ) : null}
      {isFinished ? (
        <section className={finishAnimate ? 'finish animate' : 'finish'}>
          <div className="content">
            <h1>YOU WIN!</h1>
            <h5>🏆</h5>
          </div>
        </section>
      ) : null}
      <header>
        <h1>MemoCard</h1>
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
