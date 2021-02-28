import './App.scss';

function App() {
  const emojies = ['💩', '😱', '👶', '💖'];
  return (
    <div className="App">
      <header>
        <h1>CARD GAME</h1>
      </header>
      <div className="card-container">
        {emojies.map((emoji) => (
          <div className="card">
            <div class="flip-card-inner">
              <div class="flip-card-front">CARD</div>
              <div class="flip-card-back">
                <span>{emoji}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
