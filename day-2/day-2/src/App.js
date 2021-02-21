import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((res) => {
        setPeoples(res.results);
        console.log(peoples);
      });
  }, []);
  return (
    <div className="App">
      <h1>Kanye Rest!!</h1>
      <div className="data">
        <ul>
          {peoples.map((i) => (
            <li>
              <div>{i.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
