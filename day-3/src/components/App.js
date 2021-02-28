import Header from '../components/Header/Header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Friends from './views/Friends';
import About from './views/About';

function App() {
  return (
    <Router>
      <section>
        <Header></Header>
        <Switch>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
