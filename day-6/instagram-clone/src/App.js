import Dashboard from "./components/dashboard/dashboard";
import PhotoPage from "./components/photopage/photoPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Image" component={PhotoPage}>
          </Route>
          <Route exact path="/">
          <Dashboard />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

