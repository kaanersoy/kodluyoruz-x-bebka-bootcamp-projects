import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [shuffledCards, setShuffledCards] = useState(false);
  const [selectedCard, setSeletedCard] = useState(false);
  const [matches, setMatches] = useState([]);

  function selectCard(item) {
    if (selectCard) {
      if (selectedCard === item) {
        return setMatches([...matches, item]);
      }
    }
    return setSeletedCard(item);
  }

  useEffect(() => {
    function shuffleArray(array) {
      array.sort(() => Math.random() - 0.5);
    }
    const emojies = ['💩', '😱', '👶', '💖'];
    shuffleArray(emojies);
    const firstPattern = emojies;
    shuffleArray(emojies);
    const secondPattern = emojies;
    setShuffledCards([...secondPattern, ...secondPattern]);
  }, []);

  return (
    <div className="App">
      <div className="login-screen"></div>
      <header>
        <h1>CARD GAME</h1>
      </header>
      <div className="card-container">
        {shuffledCards
          ? shuffledCards.map((emoji) => (
              <div
                className="card"
                onClick={() => {
                  selectCard(emoji);
                }}
              >
                <div class="flip-card-inner">
                  <div class="flip-card-front"></div>
                  <div class="flip-card-back">
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
