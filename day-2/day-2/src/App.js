import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState(null);
  const [wantedResponse, setWantedResponse] = useState(null);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then((res) => res.json())
      .then((res) => {
        // setResponse(res.results);
        const filteredResponse = res.results.reduce(
          (acc, item) => [
            ...acc,
            { name: item.name, bmi_index: getBMIIndex(item.mass, item.height) },
          ],
          []
        );
      });
  }, []);

  function getBMIIndex(weight, height) {
    return (weight / (height / 100)) * (height / 100);
  }

  return (
    <div className="App">
      <h1>Kanye Rest📻</h1>
      <div className="data">
        <ul></ul>
      </div>
    </div>
  );
}

export default App;
