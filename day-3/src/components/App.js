import Header from '../components/Header/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Friends from './views/Friends';

function App() {
  return (
    <Router>
      <section>
        <Header></Header>
        <Switch>
          <Route path="/friends">
            <Friends />
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
