import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import store from "./store/store";
import App from './App';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  rootElement
);
