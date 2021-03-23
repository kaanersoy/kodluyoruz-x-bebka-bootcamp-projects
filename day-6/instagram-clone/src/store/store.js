//create only store

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";


const store = createStore ( //from redux
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))  //from redux-thunk
);

export default store;