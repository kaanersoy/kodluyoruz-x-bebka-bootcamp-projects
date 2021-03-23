//create rootReducer

import { combineReducers}  from "redux";
import { photosReducer } from "./photosReducer";
import { commentsReducer } from "./commentsReducer";


const rootReducer = combineReducers({ //from redux
    photosReducer,
    commentsReducer
});

export default rootReducer;